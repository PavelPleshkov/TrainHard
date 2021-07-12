import Component from '../component';

import TimerTemplate from '../../../templates/pages/timer';

class Timer extends Component {
    constructor() {
        super();

        // this.timer;
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
        // const main = document.getElementsByClassName('main-wrapper')[0];
        const btnControl = document.getElementsByClassName('main-btn-control')[0];
        const btnReset = document.getElementsByClassName('main-btn-reset')[0];
        // const timer = (this.timer) ? this.timer : document.getElementsByClassName('main-timer')[0];
        const timer = document.getElementsByClassName('main-timer')[0];
        const minutesBlock = document.getElementsByClassName('minutes')[0];
        const secondsBlock = document.getElementsByClassName('seconds')[0];
        const milisecondsBlock = document.getElementsByClassName('miliseconds')[0];
        // const workingBlock = document.createElement('div');
        const audioHalf = new Audio('../../../audio/audio-half.mp3');
        const audioStop = new Audio('../../../audio/audio-stop.wav');
        let minutes = +localStorage.getItem('minutes') || 0;
        let seconds = +localStorage.getItem('seconds') || 0;
        let miliseconds = +localStorage.getItem('miliseconds') || 0;
        minutesBlock.innerHTML = localStorage.getItem('minutes') || '00';
        secondsBlock.innerHTML = localStorage.getItem('seconds') || '00';
        milisecondsBlock.innerHTML = localStorage.getItem('miliseconds') || '00';
        // let minutes = +minutesBlock.innerHTML.trim();
        // let seconds = +secondsBlock.innerHTML.trim();
        // let miliseconds = +milisecondsBlock.innerHTML.trim();
        secondsBlock.addEventListener('mousedown', () => {
            seconds++;
            secondsBlock.innerHTML = seconds;
        });


        const limit = 1;
        // let state = localStorage.getItem('timerState');

        // if (minutes) {
        //     if (minutes != limit) {
        //         if (state == 'running' || state == 'stopped') {
        //             timer.dataset.state = state;

        //         }
        //     }
        // }
        // localStorage.setItem('timerState', timer.dataset.state);

        window.addEventListener('unload', () => {
            let state = localStorage.getItem('timerState');
            if (state == 'running') {
                timer.dataset.state = 'stopped';
                localStorage.setItem('timerState', timer.dataset.state);
            }
        });
        // window.addEventListener('load', () => {
        //     let state = localStorage.getItem('timerState');
        //     if (state == 'stopped') {
        //         btnControl.innerHTML = 'Run';
        //     }
        // });
        loadAfterRunning();
        function loadAfterRunning() {
            window.addEventListener('load', () => {
                let state = localStorage.getItem('timerState');
                if (state == 'stopped') {
                    btnControl.innerHTML = 'Run';
                }
            });
        }

        window.addEventListener('hashchange', () => {
            let state = localStorage.getItem('timerState');
            if (location.hash == `#/${this.request.resource}/${this.request.action}` && state == 'stopped') {
                const btnControl = document.getElementsByClassName('main-btn-control')[0];
                btnControl.innerHTML = 'Run';
            }
            // this.timer = timer;
        });

        // if (location.hash == '#/workout/timer') {
        //     window.addEventListener('hashchange', setTimeToLS);
        // } else {
        //     window.removeEventListener('hashchange', setTimeToLS);
        // }
        // window.addEventListener('hashchange', () => {
        //     // clearInterval(timerId);
        //     // stopTimer();
        // //     if (location.hash == '/workout/timer') {
        // //         // setTimeToLS();
        // //         // getTimeFromLS();
        // //         minutesBlock.innerHTML = localStorage.getItem('minutes') || '00';
        // // secondsBlock.innerHTML = localStorage.getItem('seconds') || '00';
        // // milisecondsBlock.innerHTML = localStorage.getItem('miliseconds') || '00';
        // //         // controlTimer();
        // //     }
        // });

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
        // window.onunload = function() {
        //     localStorage.setItem('time', getTime());
        //     localStorage.setItem('state', stopWatchContainer.dataset.state);
        //     localStorage.setItem('marks', JSON.stringify(marks));
        // };
        // localStorage.setItem('miliseconds', miliseconds);
        // localStorage.setItem('seconds', seconds);
        // localStorage.setItem('minutes', minutes);



        // localStorage.setItem('timerState', timer.dataset.state);

        btnControl.addEventListener('click', controlTimerState);

        btnControl.addEventListener('click', controlBtnControlText);
        // btnControl.addEventListener('click', controlTimerState);
        btnControl.addEventListener('click', controlTimer);

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
                // setTimeToLS();
            }
        }

        if (localStorage.getItem('timerState') == 'finished') {
            btnControl.innerHTML = 'Go work!';
            btnControl.removeEventListener('click', controlTimer);
            btnControl.addEventListener('click', redirectToWorkout);
        }
        // window.addEventListener('hashchange', () => {
        //     timer.dataset.state = localStorage.getItem(timerState);
        //     localStorage.setItem('timerState', timer.dataset.state);
        //     clearInterval(timerId);
        // });

        function controlTimer() {
            window.addEventListener('hashchange', () => {
                // timer.dataset.state = 'stopped';
                timer.dataset.state = localStorage.getItem('timerState');
                // if (timer.dataset.state == 'stopped' || timer.dataset.state == 'running') {
                //     clearInterval(timerId);
                // }
                if (localStorage.getItem('timerState') == 'finished') {
                    clearInterval(timerId);
                    goWork();
                } else {
                    clearInterval(timerId);
                    timer.dataset.state = 'stopped';
                    // if (location.hash == '#/workout/timer') {
                    //     btnControl.innerHTML = 'Run';
                    // }
                    // btnControl.innerHTML = 'Run';
                    localStorage.setItem('timerState', timer.dataset.state);
                    // loadAfterRunning();

                }
                // localStorage.setItem('timerState', timer.dataset.state);
                // clearInterval(timerId);
            });

            const timerId = setInterval(() => {
                getTimeFromLS();
                if (timer.dataset.state == 'running') {
                    getTimeFromLS();
                    miliseconds += 1;
                    setValueToBlock(miliseconds, milisecondsBlock);
                    setTimeToLS();

                    if (miliseconds == 100) {
                        miliseconds = 0;
                        seconds += 1;
                        setValueToBlock(seconds, secondsBlock);
                        setValueToBlock(miliseconds, milisecondsBlock);

                        if (seconds == 30 && miliseconds == 0) {
                            audioHalf.play();
                        }

                        if (seconds == 5 && miliseconds == 0 && minutes != limit) {
                            seconds = 0;
                            minutes += 1;
                            // audioHalf.play();

                            if (minutes.toString().length == 1) {
                                minutesBlock.innerHTML = '0' + minutes;
                            } else {
                                minutesBlock.innerHTML = minutes;
                            }

                            setValueToBlock(minutes, minutesBlock);
                            setValueToBlock(seconds, secondsBlock);
                        }

                        if (minutes == limit) {
                            clearInterval(timerId);
                            audioStop.play();
                            goWork();
                            // timer.dataset.state = 'stopped';
                            // localStorage.setItem('timerState', timer.dataset.state);
                            // setTimeToLS();
                            // audioStop.play();
                            // btnControl.innerHTML = 'Go work!';
                            // btnControl.removeEventListener('click', controlTimer);
                            // btnControl.addEventListener('click', redirectToWorkout);
                        }
                    }
                } else if (timer.dataset.state == 'initial' || timer.dataset.state == 'stopped') {
                    clearInterval(timerId);
                }

            }, 10);

            // btnReset.addEventListener('click', resetTimer);

            // // btnReset.addEventListener('click', (timerId) => resetTimer(timerId));

            // function resetTimer() {
            //     clearInterval(timerId);
            //     for (let digits of timer.children) {
            //         digits.innerHTML = '00';
            //     }

            //     miliseconds = 0;
            //     seconds = 0;
            //     minutes = 0;
            //     setTimeToLS();
            //     // workingBlock.innerHTML = '';
            //     // workingBlock.remove();
            //     localStorage.setItem('timerState', 'stopped');
            //     // timer.dataset.state = localStorage.getItem('timerState');
            //     timer.dataset.state = 'initial';

            //     // timer.dataset.state = 'initial';
            //     // timer.dataset.state = localStorage.getItem('timerState');
            //     btnControl.innerHTML = 'Start';
            //     btnControl.removeEventListener('click', redirectToWorkout);
            //     btnControl.addEventListener('click', controlTimer);
            // }

        }

        function goWork() {
            timer.dataset.state = 'finished';
            localStorage.setItem('timerState', timer.dataset.state);
            setTimeToLS();
            // audioStop.play();
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

        btnReset.addEventListener('click', resetTimer);

        function resetTimer() {
            // clearInterval(timerId);
            for (let digits of timer.children) {
                digits.innerHTML = '00';
            }

            miliseconds = 0;
            seconds = 0;
            minutes = 0;
            setTimeToLS();
            // workingBlock.innerHTML = '';
            // workingBlock.remove();
            localStorage.setItem('timerState', 'initial');
            timer.dataset.state = localStorage.getItem('timerState');

            // timer.dataset.state = 'initial';
            // timer.dataset.state = localStorage.getItem('timerState');
            btnControl.innerHTML = 'Start';
            btnControl.removeEventListener('click', redirectToWorkout);
            btnControl.addEventListener('click', controlTimer);
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






























// import Component from '../component';

// import TimerTemplate from '../../../templates/pages/timer';

// class Timer extends Component {
//     constructor() {
//         super();

//         this.workout = this.workouts.find(workout => workout.id === JSON.parse(localStorage.getItem('way')));
//     }

//     render() {
//         return new Promise(resolve => {
//             resolve(TimerTemplate());
//         });
//     }

//     afterRender() {
//         this.setActions();
//     }

//     setActions() {
//         // const main = document.getElementsByClassName('main-wrapper')[0];
//         const btnControl = document.getElementsByClassName('main-btn-control')[0];
//         const btnReset = document.getElementsByClassName('main-btn-reset')[0];
//         const timer = document.getElementsByClassName('main-timer')[0];
//         const minutesBlock = document.getElementsByClassName('minutes')[0];
//         const secondsBlock = document.getElementsByClassName('seconds')[0];
//         const milisecondsBlock = document.getElementsByClassName('miliseconds')[0];
//         // const workingBlock = document.createElement('div');
//         const audioHalf = new Audio('../../../audio/audio-half.mp3');
//         const audioStop = new Audio('../../../audio/audio-stop.wav');
//         let minutes = +localStorage.getItem('minutes') || 0;
//         let seconds = +localStorage.getItem('seconds') || 0;
//         let miliseconds = +localStorage.getItem('miliseconds') || 0;
//         minutesBlock.innerHTML = localStorage.getItem('minutes') || '00';
//         secondsBlock.innerHTML = localStorage.getItem('seconds') || '05';
//         milisecondsBlock.innerHTML = localStorage.getItem('miliseconds') || '00';
//         // let minutes = +minutesBlock.innerHTML.trim();
//         // let seconds = +secondsBlock.innerHTML.trim();
//         // let miliseconds = +milisecondsBlock.innerHTML.trim();
//         secondsBlock.addEventListener('mousedown', () => {
//             seconds++;
//             secondsBlock.innerHTML = seconds;
//         });


//         const limit = 1;
//         // let state = localStorage.getItem('timerState');

//         // if (minutes) {
//         //     if (minutes != limit) {
//         //         if (state == 'running' || state == 'stopped') {
//         //             timer.dataset.state = state;

//         //         }
//         //     }
//         // }
//         // localStorage.setItem('timerState', timer.dataset.state);

//         window.addEventListener('unload', () => {
//             // setTimeToLS();
//             // timer.dataset.state = localStorage.getItem('timerState');
//             let state = localStorage.getItem('timerState');
//             if (state == 'running') {
//                 timer.dataset.state = 'stopped';
//                 localStorage.setItem('timerState', timer.dataset.state);
//             }
//             // if (state == 'initial') {

//             // }
//         });
//         // window.addEventListener('load', () => {
//         //     let state = localStorage.getItem('timerState');
//         //     if (state == 'stopped') {
//         //         btnControl.innerHTML = 'Run';
//         //     }
//         // });
//         loadAfterRunning();
//         function loadAfterRunning() {
//             window.addEventListener('load', () => {
//                 let state = localStorage.getItem('timerState');
//                 if (state == 'stopped') {
//                     btnControl.innerHTML = 'Run';
//                 }
//             });
//         }

//         window.addEventListener('hashchange', () => {
//             let state = localStorage.getItem('timerState');
//             if (location.hash == `#/${this.request.resource}/${this.request.action}` && state == 'stopped') {
//                 const btnControl = document.getElementsByClassName('main-btn-control')[0];
//                 btnControl.innerHTML = 'Run';
//             }
//         });

//         // if (location.hash == '#/workout/timer') {
//         //     window.addEventListener('hashchange', setTimeToLS);
//         // } else {
//         //     window.removeEventListener('hashchange', setTimeToLS);
//         // }
//         // window.addEventListener('hashchange', () => {
//         //     // clearInterval(timerId);
//         //     // stopTimer();
//         // //     if (location.hash == '/workout/timer') {
//         // //         // setTimeToLS();
//         // //         // getTimeFromLS();
//         // //         minutesBlock.innerHTML = localStorage.getItem('minutes') || '00';
//         // // secondsBlock.innerHTML = localStorage.getItem('seconds') || '00';
//         // // milisecondsBlock.innerHTML = localStorage.getItem('miliseconds') || '00';
//         // //         // controlTimer();
//         // //     }
//         // });

//         function getTimeFromLS() {
//             minutes = +localStorage.getItem('minutes');
//             seconds = +localStorage.getItem('seconds');
//             miliseconds = +localStorage.getItem('miliseconds');
//         }

//         function setTimeToLS() {
//             localStorage.setItem('miliseconds', milisecondsBlock.innerHTML);
//             localStorage.setItem('seconds', secondsBlock.innerHTML);
//             localStorage.setItem('minutes', minutesBlock.innerHTML);
//         }
//         // window.onunload = function() {
//         //     localStorage.setItem('time', getTime());
//         //     localStorage.setItem('state', stopWatchContainer.dataset.state);
//         //     localStorage.setItem('marks', JSON.stringify(marks));
//         // };
//         // localStorage.setItem('miliseconds', miliseconds);
//         // localStorage.setItem('seconds', seconds);
//         // localStorage.setItem('minutes', minutes);



//         // localStorage.setItem('timerState', timer.dataset.state);

//         btnControl.addEventListener('click', controlTimerState);

//         btnControl.addEventListener('click', controlBtnControlText);
//         // btnControl.addEventListener('click', controlTimerState);
//         btnControl.addEventListener('click', controlTimer);

//         function controlTimerState() {
//             if (timer.dataset.state == 'initial' || timer.dataset.state == 'stopped') {
//                 localStorage.setItem('timerState', 'running');
//                 timer.dataset.state = localStorage.getItem('timerState');
//             } else if (timer.dataset.state == 'running') {
//                 localStorage.setItem('timerState', 'stopped');
//                 timer.dataset.state = localStorage.getItem('timerState');
//             }
//         }

//         function controlBtnControlText() {
//             if (timer.dataset.state == 'initial' || timer.dataset.state == 'stopped') {
//                 btnControl.innerHTML = 'Run';
//             } else if (timer.dataset.state == 'running') {
//                 btnControl.innerHTML = 'Stop';
//                 // setTimeToLS();
//             }
//         }

//         if (localStorage.getItem('timerState') == 'finished') {
//             btnControl.innerHTML = 'Go work!';
//             btnControl.removeEventListener('click', controlTimer);
//             btnControl.addEventListener('click', redirectToWorkout);
//         }
//         // window.addEventListener('hashchange', () => {
//         //     timer.dataset.state = localStorage.getItem(timerState);
//         //     localStorage.setItem('timerState', timer.dataset.state);
//         //     clearInterval(timerId);
//         // });

//         function controlTimer() {
//             window.addEventListener('hashchange', () => {
//                 // timer.dataset.state = 'stopped';
//                 timer.dataset.state = localStorage.getItem('timerState');
//                 // if (timer.dataset.state == 'stopped' || timer.dataset.state == 'running') {
//                 //     clearInterval(timerId);
//                 // }
//                 if (localStorage.getItem('timerState') == 'finished') {
//                     clearInterval(timerId);
//                     goWork();
//                 } else {
//                     clearInterval(timerId);
//                     timer.dataset.state = 'stopped';
//                     // if (location.hash == '#/workout/timer') {
//                     //     btnControl.innerHTML = 'Run';
//                     // }
//                     // btnControl.innerHTML = 'Run';
//                     localStorage.setItem('timerState', timer.dataset.state);
//                     // loadAfterRunning();

//                 }
//                 // localStorage.setItem('timerState', timer.dataset.state);
//                 // clearInterval(timerId);
//             });

//             const timerId = setInterval(() => {
//                 getTimeFromLS();
//                 if (timer.dataset.state == 'running') {
//                     getTimeFromLS();
//                     miliseconds -= 1;
//                     setValueToBlock(Math.abs(miliseconds), milisecondsBlock);
//                     setTimeToLS();

//                     if (miliseconds == - 100) {
//                         miliseconds = 0;
//                         seconds -= 1;
//                         setValueToBlock(Math.abs(seconds), secondsBlock);
//                         setValueToBlock(Math.abs(miliseconds), milisecondsBlock);

//                         if (seconds == 30 && miliseconds == 0) {
//                             audioHalf.play();
//                         }

//                         if (seconds == 5 && miliseconds == 0 && minutes != limit) {
//                             seconds = 0;
//                             minutes += 1;
//                             // audioHalf.play();

//                             if (minutes.toString().length == 1) {
//                                 minutesBlock.innerHTML = '0' + minutes;
//                             } else {
//                                 minutesBlock.innerHTML = minutes;
//                             }

//                             setValueToBlock(minutes, minutesBlock);
//                             setValueToBlock(seconds, secondsBlock);
//                         }

//                         if (minutes == limit) {
//                             clearInterval(timerId);
//                             audioStop.play();
//                             goWork();
//                             // timer.dataset.state = 'stopped';
//                             // localStorage.setItem('timerState', timer.dataset.state);
//                             // setTimeToLS();
//                             // audioStop.play();
//                             // btnControl.innerHTML = 'Go work!';
//                             // btnControl.removeEventListener('click', controlTimer);
//                             // btnControl.addEventListener('click', redirectToWorkout);
//                         }
//                     }
//                 } else if (timer.dataset.state == 'initial' || timer.dataset.state == 'stopped') {
//                     clearInterval(timerId);
//                 }

//             }, 10);

//             // btnReset.addEventListener('click', resetTimer);

//             // // btnReset.addEventListener('click', (timerId) => resetTimer(timerId));

//             // function resetTimer() {
//             //     clearInterval(timerId);
//             //     for (let digits of timer.children) {
//             //         digits.innerHTML = '00';
//             //     }

//             //     miliseconds = 0;
//             //     seconds = 0;
//             //     minutes = 0;
//             //     setTimeToLS();
//             //     // workingBlock.innerHTML = '';
//             //     // workingBlock.remove();
//             //     localStorage.setItem('timerState', 'stopped');
//             //     // timer.dataset.state = localStorage.getItem('timerState');
//             //     timer.dataset.state = 'initial';

//             //     // timer.dataset.state = 'initial';
//             //     // timer.dataset.state = localStorage.getItem('timerState');
//             //     btnControl.innerHTML = 'Start';
//             //     btnControl.removeEventListener('click', redirectToWorkout);
//             //     btnControl.addEventListener('click', controlTimer);
//             // }

//         }

//         function goWork() {
//             timer.dataset.state = 'finished';
//             localStorage.setItem('timerState', timer.dataset.state);
//             setTimeToLS();
//             // audioStop.play();
//             btnControl.innerHTML = 'Go work!';
//             btnControl.removeEventListener('click', controlTimer);
//             btnControl.addEventListener('click', redirectToWorkout);
//         }

//         function setValueToBlock(val, block) {
//             if (val.toString().length <= 2) {
//                 if (val.toString().length == 1) {
//                     block.innerHTML = '0' + val;
//                 } else {
//                     block.innerHTML = val;
//                 }
//             } else {
//                 block.innerHTML = '00';
//             }
//         }

//         btnReset.addEventListener('click', resetTimer);

//         function resetTimer() {
//             // clearInterval(timerId);
//             for (let digits of timer.children) {
//                 digits.innerHTML = '00';
//             }

//             miliseconds = 0;
//             seconds = 0;
//             minutes = 0;
//             setTimeToLS();
//             // workingBlock.innerHTML = '';
//             // workingBlock.remove();
//             localStorage.setItem('timerState', 'initial');
//             timer.dataset.state = localStorage.getItem('timerState');

//             // timer.dataset.state = 'initial';
//             // timer.dataset.state = localStorage.getItem('timerState');
//             btnControl.innerHTML = 'Start';
//             btnControl.removeEventListener('click', redirectToWorkout);
//             btnControl.addEventListener('click', controlTimer);
//         }

//         function redirectToWorkout() {
//             location.hash = '/workout';
//             localStorage.removeItem('minutes');
//             localStorage.removeItem('seconds');
//             localStorage.removeItem('miliseconds');
//         }
//     }
// }

// export default Timer;

































// import Component from '../component';

// import TimerTemplate from '../../../templates/pages/timer';

// class Timer extends Component {
//     constructor() {
//         super();

//         this.workout = this.workouts.find(workout => workout.id === JSON.parse(localStorage.getItem('way')));
//     }

//     render() {
//         return new Promise(resolve => {
//             resolve(TimerTemplate());
//         });
//     }

//     afterRender() {
//         this.setActions();
//     }

//     setActions() {
//         const main = document.getElementsByClassName('main-wrapper')[0];
//         const btnControl = document.getElementsByClassName('main-btn-control')[0];
//         const timer = document.getElementsByClassName('main-timer')[0];
//         const minutesBlock = document.getElementsByClassName('minutes')[0];
//         const secondsBlock = document.getElementsByClassName('seconds')[0];
//         const milisecondsBlock = document.getElementsByClassName('miliseconds')[0];
//         minutesBlock.innerHTML = localStorage.getItem('minutes') || '00';
//         secondsBlock.innerHTML = localStorage.getItem('seconds') || '00';
//         milisecondsBlock.innerHTML = localStorage.getItem('miliseconds') || '00';
//         let minutes = +minutesBlock.innerHTML.trim();
//         let seconds = +secondsBlock.innerHTML.trim();
//         let miliseconds = +milisecondsBlock.innerHTML.trim();
//         // let minutes = +localStorage.getItem('minutes') || +minutesBlock.innerHTML.trim();
//         // let seconds = +localStorage.getItem('seconds') || +secondsBlock.innerHTML.trim();
//         // let miliseconds = +localStorage.getItem('miliseconds') || +milisecondsBlock.innerHTML.trim();
//         // let minutes = localStorage.getItem('minutes') || 0;
//         // let seconds = localStorage.getItem('seconds') || 0;
//         // let miliseconds = localStorage.getItem('miliseconds') || 0;
//         const workingBlock = document.createElement('div');
//         const audioHalf = new Audio('../../../audio/audio-half.mp3');
//         const audioStop = new Audio('../../../audio/audio-stop.wav');
//         const limit = 1;
//         let btnReset;
//         // var timerId;

//         // localStorage.setItem('timerState', timer.dataset.state);


//         // if (timer.dataset.state != 'initial') {
//         //     timer.dataset.state = 'running';
//         // }
//         window.addEventListener('unload', () => {
//             // localStorage.setItem('miliseconds', miliseconds);
//             // localStorage.setItem('seconds', seconds);
//             // localStorage.setItem('minutes', minutes);
//             setTimeToLS();
//             // clearInterval(timerId);
//             // stopTimer();

//             // localStorage.setItem('timerState', timer.dataset.state);
//             // timer.dataset.state = localStorage.getItem('timerState');

//             // controlBtnControlText();

//         });

//         // if (location.hash == '#/workout/timer') {
//         //     window.addEventListener('hashchange', setTimeToLS);
//         // } else {
//         //     window.removeEventListener('hashchange', setTimeToLS);
//         // }
//         // window.addEventListener('hashchange', () => {
//         //     // clearInterval(timerId);
//         //     // stopTimer();
//         // //     if (location.hash == '/workout/timer') {
//         // //         // setTimeToLS();
//         // //         // getTimeFromLS();
//         // //         minutesBlock.innerHTML = localStorage.getItem('minutes') || '00';
//         // // secondsBlock.innerHTML = localStorage.getItem('seconds') || '00';
//         // // milisecondsBlock.innerHTML = localStorage.getItem('miliseconds') || '00';
//         // //         // controlTimer();
//         // //     }
//         // });

//         function getTimeFromLS() {
//             minutes = +localStorage.getItem('minutes');
//             seconds = +localStorage.getItem('seconds');
//             miliseconds = +localStorage.getItem('miliseconds');
//         }

//         function setTimeToLS() {
//             localStorage.setItem('miliseconds', milisecondsBlock.innerHTML);
//             localStorage.setItem('seconds', secondsBlock.innerHTML);
//             localStorage.setItem('minutes', minutesBlock.innerHTML);
//         }
//         // window.onunload = function() {
//         //     localStorage.setItem('time', getTime());
//         //     localStorage.setItem('state', stopWatchContainer.dataset.state);
//         //     localStorage.setItem('marks', JSON.stringify(marks));
//         // };
//         // localStorage.setItem('miliseconds', miliseconds);
//         // localStorage.setItem('seconds', seconds);
//         // localStorage.setItem('minutes', minutes);



//         // localStorage.setItem('timerState', timer.dataset.state);


//         btnControl.addEventListener('click', controlBtnControlText);
//         btnControl.addEventListener('click', controlTimerState);
//         btnControl.addEventListener('click', controlTimer);

//         function controlTimerState() {
//             if (timer.dataset.state == 'initial' || timer.dataset.state == 'stopped') {
//                 localStorage.setItem('timerState', 'running');
//                 timer.dataset.state = localStorage.getItem('timerState');
//             } else if (timer.dataset.state == 'running') {
//                 localStorage.setItem('timerState', 'stopped');
//                 timer.dataset.state = localStorage.getItem('timerState');
//             }
//         }

//         function controlBtnControlText() {
//             if (timer.dataset.state == 'initial' || timer.dataset.state =='stopped') {
//                 main.appendChild(workingBlock);
//                 workingBlock.appendChild(btnReset);
//             }
//             if (timer.dataset.state == 'initial' || timer.dataset.state == 'stopped') {
//                 btnControl.innerHTML = 'Stop';
//             // } else if (btnControl.innerHTML == 'Stop') {
//             } else if (timer.dataset.state == 'running') {

//                 btnControl.innerHTML = 'Run';
//                 // localStorage.setItem('miliseconds', miliseconds);
//                 // localStorage.setItem('seconds', seconds);
//                 // localStorage.setItem('minutes', minutes);
//                 setTimeToLS();
//                 // minutes = localStorage.getItem('minutes');
//                 // seconds = localStorage.getItem('seconds');
//                 // miliseconds = localStorage.getItem('miliseconds');
//             }
//         }

//         function setValueToBlock(val, block) {
//             if (val.toString().length <= 2) {
//                 if (val.toString().length == 1) {
//                     block.innerHTML = '0' + val;
//                 } else {
//                     block.innerHTML = val;
//                 }
//             } else {
//                 block.innerHTML = '00';
//             }
//         }

//         function controlTimer() {
//             window.addEventListener('hashchange', () => {
//                 timer.dataset.state = 'stopped';
//                 localStorage.setItem('timerState', timer.dataset.state);
//                 clearInterval(timerId);
//             });
//             // const timerId = setInterval(function() {
//             const timerId = setInterval(() => {

//                 // if (location.hash == )
//                 // window.addEventListener('hashchange', () => {
//                 //     // clearInterval(timerId);
//                 //     timer.dataset.state == 'stopped';
//                 // });


//                 getTimeFromLS();
//                 if (timer.dataset.state == 'running') {
//                     miliseconds += 1;
//                     setValueToBlock(miliseconds, milisecondsBlock);
//                     setTimeToLS();

//                     if (miliseconds == 100) {
//                         miliseconds = 0;
//                         seconds += 1;
//                         setValueToBlock(seconds, secondsBlock);

//                         setValueToBlock(miliseconds, milisecondsBlock);
//                     }

//                     if (seconds == 30 && miliseconds == 0) {
//                         audioHalf.play();
//                     }

//                     if (seconds == 60 && miliseconds == 0 && minutes != limit) {
//                         seconds = 0;
//                         minutes += 1;

//                         audioHalf.play();

//                         if (minutes.toString().length == 1) {
//                             minutesBlock.innerHTML = '0' + minutes;
//                         } else {
//                             minutesBlock.innerHTML = minutes;
//                         }

//                         setValueToBlock(minutes, minutesBlock);
//                         setValueToBlock(seconds, secondsBlock);
//                     }

//                     if (minutes == limit) {
//                         clearInterval(timerId);
//                         audioStop.play();
//                         btnControl.innerHTML = 'Go work!';
//                         btnControl.removeEventListener('click', controlTimer);
//                         btnControl.addEventListener('click', redirectToWorkout);
//                     }

//                 } else if (timer.dataset.state == 'initial' || timer.dataset.state == 'stopped') {
//                     // setTimeToLS();
//                     clearInterval(timerId);
//                 }

//             }, 10);
//         }

//         if (timer.dataset.state == 'initial') {
//             btnReset = createBtn('Reset');
//         }

//         function createBtn(type) {
//             const btn = document.createElement('button');

//             btn.setAttribute('type', 'button');
//             btn.innerHTML = type;
//             btn.classList.add('main-btn', 'btn' + type);

//             return btn;
//         }

//         btnReset.addEventListener('click', resetTimer);

//         function resetTimer() {
//             for (let digits of timer.children) {
//                 digits.innerHTML = '00';
//             }

//             miliseconds = 0;
//             seconds = 0;
//             minutes = 0;
//             setTimeToLS();
//             workingBlock.innerHTML = '';
//             workingBlock.remove();
//             localStorage.setItem('timerState', 'stopped');
//             timer.dataset.state = localStorage.getItem('timerState');

//             // timer.dataset.state = 'initial';
//             // timer.dataset.state = localStorage.getItem('timerState');
//             btnControl.innerHTML = 'Start';
//             btnControl.removeEventListener('click', redirectToWorkout);
//             btnControl.addEventListener('click', controlTimer);
//         }

//         function redirectToWorkout() {
//             location.hash = '/workout';
//             localStorage.removeItem('minutes');
//             localStorage.removeItem('seconds');
//             localStorage.removeItem('miliseconds');
//         }
//     }
// }

// export default Timer;
