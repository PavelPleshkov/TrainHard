import Component from '../component';

import TimerTemplate from '../../../templates/pages/timer';

class Timer extends Component {
    constructor() {
        super();

        this.workout = this.workouts.find(workout => workout.id === JSON.parse(localStorage.getItem('way')));
    }

    render() {
        return new Promise(resolve => {
            resolve(TimerTemplate());
        });
    }

    afterRender() {
        this.setActions();
    }

    setActions() {
        const btnControl = document.getElementsByClassName('main-btn-control')[0];
        const btnReset = document.getElementsByClassName('main-btn-reset')[0];
        const timer = document.getElementsByClassName('main-timer')[0];
        const minutesBlock = document.getElementsByClassName('minutes')[0];
        const secondsBlock = document.getElementsByClassName('seconds')[0];
        const milisecondsBlock = document.getElementsByClassName('miliseconds')[0];
        const audioHalf = new Audio('../../../audio/audio-half.mp3');
        const audioStop = new Audio('../../../audio/audio-stop.wav');
        let minutes = +localStorage.getItem('minutes') || 0;
        let seconds = +localStorage.getItem('seconds') || 0;
        let miliseconds = +localStorage.getItem('miliseconds') || 0;
        const limitBlock = document.getElementsByClassName('main-limit')[0];
        const limitContainer = document.getElementsByClassName('main-limit-container')[0];
        const limitMinutesBlock = document.getElementsByClassName('main-limit-minutes')[0];
        const limitSecondsBlock = document.getElementsByClassName('main-limit-seconds')[0];
        let limitMinutes = +localStorage.getItem('limitMinutes') || 0;
        let limitSeconds = +localStorage.getItem('limitSeconds') || 0;

        window.addEventListener('load', () => {
            let timerState = localStorage.getItem('timerState');
            let limitState = localStorage.getItem('limitState');

            if (timerState == 'stopped') {
                btnControl.innerHTML = 'Run';
            }

            if (limitState == 'blocked') {
                blockLimitContainer();
            } else {
                unblockLimitContainer();
            }
        });

        window.addEventListener('unload', () => {
            let timerState = localStorage.getItem('timerState');

            if (timerState == 'running') {
                timer.dataset.state = 'stopped';
                localStorage.setItem('timerState', timer.dataset.state);
            }
        });

        window.addEventListener('hashchange', () => {
            let timerState = localStorage.getItem('timerState');
            let limitState = localStorage.getItem('limitState');

            if (location.hash == `#/${this.request.resource}/${this.request.action}` && timerState == 'stopped') {
                const btnControl = document.getElementsByClassName('main-btn-control')[0];

                btnControl.innerHTML = 'Run';
            }

            if (limitState == 'blocked' && location.hash == `#/${this.request.resource}/${this.request.action}`) {
                blockLimitContainer();
            }
        });

        minutesBlock.innerHTML = localStorage.getItem('minutes') || '00';
        secondsBlock.innerHTML = localStorage.getItem('seconds') || '00';
        milisecondsBlock.innerHTML = localStorage.getItem('miliseconds') || '00';
        limitContainer.dataset.state = localStorage.getItem('limitState');
        setValueToBlock(limitMinutes, limitMinutesBlock);
        setValueToBlock(limitSeconds, limitSecondsBlock);
        limitBlock.addEventListener('click', changeLimit);

        btnControl.addEventListener('click', controlTimerState);
        btnControl.addEventListener('click', controlBtnControlText);
        btnControl.addEventListener('click', controlTimer);
        btnControl.addEventListener('click', blockLimitContainer);

        btnReset.addEventListener('click', resetTimer);

        if (localStorage.getItem('timerState') == 'finished') {
            btnControl.innerHTML = 'Go work!';
            btnControl.removeEventListener('click', controlTimer);
            btnControl.addEventListener('click', redirectToWorkout);
            unblockLimitContainer();
        }

        function changeLimit() {
            if (event.target == limitMinutesBlock) {
                if (limitMinutes <= 3) {
                    limitMinutes++;
                }

                if (limitMinutes > 3) {
                    limitMinutes = 0;
                }

                setValueToBlock(limitMinutes, limitMinutesBlock);
            }

            if (event.target == limitSecondsBlock) {
                if (limitSeconds == 0) {
                    limitSeconds = 30;
                } else {
                    limitSeconds = 0;
                }

                setValueToBlock(limitSeconds, limitSecondsBlock);
            }

            localStorage.setItem('limitMinutes', limitMinutes);
            localStorage.setItem('limitSeconds', limitSeconds);
        }

        function getTimeFromLS() {
            minutes = +localStorage.getItem('minutes');
            seconds = +localStorage.getItem('seconds');
            miliseconds = +localStorage.getItem('miliseconds');
        }

        function setTimeToLS() {
            localStorage.setItem('miliseconds', milisecondsBlock.innerHTML);
            localStorage.setItem('seconds', secondsBlock.innerHTML);
            localStorage.setItem('minutes', minutesBlock.innerHTML);
        }

        function blockLimitContainer() {
            const limitContainer = document.getElementsByClassName('main-limit-container')[0];

            for (let limit of limitContainer.children) {
                limit.classList.add('diactivated');
            }

            localStorage.setItem('limitState', 'blocked');
            limitContainer.dataset.state = localStorage.getItem('limitState');
            limitBlock.removeEventListener('click', changeLimit);
        }

        function unblockLimitContainer() {
            for (let limit of limitContainer.children) {
                limit.classList.remove('diactivated');
            }

            localStorage.setItem('limitState', 'unblocked');
            limitContainer.dataset.state = localStorage.getItem('limitState');
            limitBlock.addEventListener('click', changeLimit);
        }

        function controlTimerState() {
            if (timer.dataset.state == 'initial' || timer.dataset.state == 'stopped') {
                localStorage.setItem('timerState', 'running');
                timer.dataset.state = localStorage.getItem('timerState');
            } else if (timer.dataset.state == 'running') {
                localStorage.setItem('timerState', 'stopped');
                timer.dataset.state = localStorage.getItem('timerState');
            }
        }

        function controlBtnControlText() {
            if (timer.dataset.state == 'initial' || timer.dataset.state == 'stopped') {
                btnControl.innerHTML = 'Run';
            } else if (timer.dataset.state == 'running') {
                btnControl.innerHTML = 'Stop';
            }
        }

        function controlTimer() {
            window.addEventListener('hashchange', () => {
                timer.dataset.state = localStorage.getItem('timerState');

                if (localStorage.getItem('timerState') == 'finished') {
                    clearInterval(timerId);
                    goWork();
                } else {
                    clearInterval(timerId);
                    timer.dataset.state = 'stopped';
                    localStorage.setItem('timerState', timer.dataset.state);
                }
            });

            const timerId = setInterval(() => {
                getTimeFromLS();

                if (timer.dataset.state == 'running') {
                    miliseconds += 1;
                    setValueToBlock(miliseconds, milisecondsBlock);
                    setTimeToLS();

                    if (miliseconds == 100) {
                        miliseconds = 0;
                        seconds += 1;
                        setValueToBlock(seconds, secondsBlock);
                        setValueToBlock(miliseconds, milisecondsBlock);

                        if (seconds == 30 && miliseconds == 0 && minutes != limitMinutes) {
                            audioHalf.play();
                        }

                        if (seconds == 60 && miliseconds == 0) {
                            seconds = 0;
                            minutes += 1;

                            if (minutes.toString().length == 1) {
                                minutesBlock.innerHTML = '0' + minutes;
                            } else {
                                minutesBlock.innerHTML = minutes;
                            }

                            setValueToBlock(minutes, minutesBlock);
                            setValueToBlock(seconds, secondsBlock);
                        }

                        if (minutes == limitMinutes && seconds == limitSeconds || minutes == 60) {
                            clearInterval(timerId);
                            audioStop.play();
                            goWork();
                            unblockLimitContainer();
                        }
                    }
                } else if (timer.dataset.state == 'initial' || timer.dataset.state == 'stopped') {
                    clearInterval(timerId);
                }
            }, 10);
        }

        function goWork() {
            timer.dataset.state = 'finished';
            localStorage.setItem('timerState', timer.dataset.state);
            setTimeToLS();
            btnControl.innerHTML = 'Go work!';
            btnControl.removeEventListener('click', controlTimer);
            btnControl.addEventListener('click', redirectToWorkout);
        }

        function setValueToBlock(val, block) {
            if (val.toString().length <= 2) {
                if (val.toString().length == 1) {
                    block.innerHTML = '0' + val;
                } else {
                    block.innerHTML = val;
                }
            } else {
                block.innerHTML = '00';
            }
        }

        function resetTimer() {
            for (let digits of timer.children) {
                digits.innerHTML = '00';
            }

            miliseconds = 0;
            seconds = 0;
            minutes = 0;
            setTimeToLS();
            localStorage.setItem('timerState', 'initial');
            timer.dataset.state = localStorage.getItem('timerState');
            btnControl.innerHTML = 'Start';
            btnControl.removeEventListener('click', redirectToWorkout);
            btnControl.addEventListener('click', controlTimer);
            unblockLimitContainer();
        }

        function redirectToWorkout() {
            location.hash = '/workout';
            localStorage.removeItem('minutes');
            localStorage.removeItem('seconds');
            localStorage.removeItem('miliseconds');
        }
    }
}

export default Timer;