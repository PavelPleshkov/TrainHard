import Component from '../component.js';

class Timer extends Component {
    constructor() {
        super();

        this.workout = this.workouts.find(workout => workout.id === JSON.parse(localStorage.getItem('way')));
    }

    render() {
        return new Promise(resolve => {
            resolve(`
                <main class="main">
                    <h1 class="main-title">Your rest</h1>
                    <div class="main-wrapper">
                        <button class="main-btn main-btn-control btn-control" type="button">Start</button>
                        <div class="main-timer watch" data-state="initial">
                            <div class="minutes">
                                00
                            </div>
                            <div class="seconds">
                                00
                            </div>
                            <div class="miliseconds">
                                00
                            </div>
                        </div>
                    </div>
                </main>
            `);
        });
    }

    afterRender() {
        this.setActions();
    }

    setActions() {
        // var main = document.getElementsByClassName('main')[0];
        const main = document.getElementsByClassName('main-wrapper')[0];
        // var btnControl = document.getElementsByClassName('btnControl')[0];
        const btnControl = document.getElementsByClassName('main-btn-control')[0];
        // var watch = document.getElementsByClassName('watch')[0];
        const timer = document.getElementsByClassName('main-timer')[0];

        const minutesBlock = document.getElementsByClassName('minutes')[0];
        const secondsBlock = document.getElementsByClassName('seconds')[0];
        const milisecondsBlock = document.getElementsByClassName('miliseconds')[0];
        let minutes = +minutesBlock.innerHTML.trim();
        let seconds = +secondsBlock.innerHTML.trim();
        let miliseconds = +milisecondsBlock.innerHTML.trim();

        const audioHalf = new Audio('../../../audio/audio-half.mp3');
        const audioStop = new Audio('../../../audio/audio-stop.wav');
        // const audio = document.getElementsByTagName('audio')[0];

        var workingBlock = document.createElement('div');
        // var resultsBlock = document.createElement('div');
        // resultsBlock.classList.add('results');
        // var result = document.createElement('div');
        // result.classList.add('result');
        // var removedBtnControl;


        // window.addEventListener('unload', () => {
        //     localStorage.setItem('minutes', minutes);
        // });
        // window.onunload = function() {
        //     localStorage.setItem('time', getTime());
        //     localStorage.setItem('state', stopWatchContainer.dataset.state);
        //     localStorage.setItem('marks', JSON.stringify(marks));
        // };
        // localStorage.setItem('miliseconds', miliseconds);
        // localStorage.setItem('seconds', seconds);
        // localStorage.setItem('minutes', minutes);
        // localStorage.setItem('state', timer.dataset.state);


        btnControl.addEventListener('click', controlBtns);
        btnControl.addEventListener('click', controlState);
        btnControl.addEventListener('click', controlTimer);

        function controlState() {
            if (timer.dataset.state == 'initial' || timer.dataset.state == 'stopped') {
                localStorage.setItem('state', 'running');
                timer.dataset.state = localStorage.getItem('state');
                // timer.dataset.state = 'running';
                // console.log(timer.dataset.state);
            } else if (timer.dataset.state == 'running') {
                localStorage.setItem('state', 'stopped');
                timer.dataset.state = localStorage.getItem('state');
                // timer.dataset.state = 'stopped';
                // console.log(timer.dataset.state);
            }
        }

        function controlBtns() {
            if (timer.dataset.state == 'initial') {
                main.appendChild(workingBlock);
                workingBlock.appendChild(btnReset);
                // workingBlock.appendChild(btnSave);
            }
            if (timer.dataset.state == 'initial' || timer.dataset.state == 'stopped') {
                btnControl.innerHTML = 'Stop';
            } else if (btnControl.innerHTML == 'Stop') {
                btnControl.innerHTML = 'Run';
            }
        }

        function setValue(val, block) {
            // if (val.toString().length == 3) {
            //     block.innerHTML = '00';
            // }
            if (val.toString().length == 1) {
                block.innerHTML = '0' + val;
            } else {
                block.innerHTML = val;
            }
        }

        function controlTimer() {
            var timerId = setInterval(function() {
                if (timer.dataset.state == 'running') {
                    miliseconds += 1;
                    // localStorage.setItem('miliseconds', miliseconds);
                    // miliseconds = localStorage.getItem('miliseconds');
                    // setValue(localStorage.getItem('miliseconds'), milisecondsBlock);
                    setValue(miliseconds, milisecondsBlock);

                    if (miliseconds == 100) {
                        seconds += 1;
                        setValue(seconds, secondsBlock);
                        miliseconds = 0;
                        setValue(miliseconds, milisecondsBlock);
                    }
                    // if (seconds == 5) {
                    //     // removedBtnControl = main.removeChild(btnControl);
                    //     btnSave.remove();
                    // }
                    if (seconds == 30) {
                        audioHalf.play();
                    }

                    if (seconds == 60) {
                        minutes += 1;
                        audioHalf.play();

                        if (minutes.toString().length == 1) {
                            minutesBlock.innerHTML = '0' + minutes;
                        } else {
                            minutesBlock.innerHTML = minutes;
                        }

                        setValue(minutes, minutesBlock);
                        seconds = 0;
                        setValue(seconds, secondsBlock);
                    }

                    if (minutes == 1) {
                        clearInterval(timerId);
                        // removedBtnControl = main.removeChild(btnControl);
                        // btnSave.remove();
                        audioStop.play();
                    }
                } else if (timer.dataset.state == 'initial' || timer.dataset.state == 'stopped') {
                    // console.log('stop timer');
                    // const audio = new Audio('../../../sounds/Sound6.mp3');
                    // audio.play();
                    clearInterval(timerId);
                }
            }, 10);
        }

        if (timer.dataset.state == 'initial') {
            var btnReset = createBtn('Reset');
            // var btnSave = createBtn('Save');
        }

        function createBtn(type) {
            var btn = document.createElement('button');

            btn.setAttribute('type', 'button');
            btn.innerHTML = type;
            btn.classList.add('main-btn', 'btn' + type);

            return btn;
        }

        btnReset.addEventListener('click', resetTimer);

        function resetTimer() {
            // for (var i = 0; i < timer.children.length; i++) {
            //     timer.children[i].innerHTML = '00';
            // }

            for (let digits of timer.children) {
                digits.innerHTML = '00';
            }

            // if (main.firstElementChild != btnControl) {
            //     main.insertBefore(removedBtnControl, main.children[0]);
            // }

            miliseconds = 0;
            seconds = 0;
            minutes = 0;
            workingBlock.innerHTML = '';
            // resultsBlock.innerHTML = '';
            // resultsBlock.remove();
            workingBlock.remove();
            timer.dataset.state = 'initial';
            btnControl.innerHTML = 'Start';
        }

        // btnSave.addEventListener('click', function() {
        //     workingBlock.appendChild(resultsBlock);
        // });

        // btnSave.addEventListener('click', addResult);

        // function addResult() {
        //     var newResult = result.cloneNode(false);

        //     if (!resultsBlock.firstElementChild) {
        //         newResult.innerHTML = '1) ' + minutesBlock.innerHTML + ' : ' + secondsBlock.innerHTML + ' : ' + milisecondsBlock.innerHTML;
        //     } else {
        //         newResult.innerHTML = +resultsBlock.lastElementChild.innerHTML.match(/\d+(?=\))/) + 1 + ') ' + minutesBlock.innerHTML + ' : ' + secondsBlock.innerHTML + ' : ' + milisecondsBlock.innerHTML;
        //     }

        //     resultsBlock.appendChild(newResult);
        // }
    }
}

export default Timer;

// setActions() {
//     // var main = document.getElementsByClassName('main')[0];
//     const main = document.getElementsByClassName('mainWrapper')[0];
//     // var btnControl = document.getElementsByClassName('btnControl')[0];
//     const btnControl = document.getElementsByClassName('mainBtnControl')[0];
//     // var watch = document.getElementsByClassName('watch')[0];
//     const timer = document.getElementsByClassName('mainTimer')[0];

//     const minutesBlock = document.getElementsByClassName('minutes')[0];
//     const secondsBlock = document.getElementsByClassName('seconds')[0];
//     const milisecondsBlock = document.getElementsByClassName('miliseconds')[0];
//     let minutes = +minutesBlock.innerHTML.trim();
//     let seconds = +secondsBlock.innerHTML.trim();
//     let miliseconds = +milisecondsBlock.innerHTML.trim();

//     var workingBlock = document.createElement('div');
//     var resultsBlock = document.createElement('div');
//     resultsBlock.classList.add('results');
//     var result = document.createElement('div');
//     result.classList.add('result');
//     var removedBtnControl;




//     // window.addEventListener('unload', () => {
//     //     localStorage.setItem('minutes', minutes);
//     // });
//     // window.onunload = function() {
//     //     localStorage.setItem('time', getTime());
//     //     localStorage.setItem('state', stopWatchContainer.dataset.state);
//     //     localStorage.setItem('marks', JSON.stringify(marks));
//     // };
//     // localStorage.setItem('miliseconds', miliseconds);
//     // localStorage.setItem('seconds', seconds);
//     // localStorage.setItem('minutes', minutes);
//     // localStorage.setItem('state', timer.dataset.state);




//     btnControl.addEventListener('click', controlBtns);
//     btnControl.addEventListener('click', controlState);
//     btnControl.addEventListener('click', controlTimer);

//     function controlState() {
//         if (timer.dataset.state == 'initial' || timer.dataset.state == 'stopped') {
//             localStorage.setItem('state', 'running');
//             timer.dataset.state = localStorage.getItem('state');
//             // timer.dataset.state = 'running';
//             // console.log(timer.dataset.state);
//         } else if (timer.dataset.state == 'running') {
//             localStorage.setItem('state', 'stopped');
//             timer.dataset.state = localStorage.getItem('state');
//             // timer.dataset.state = 'stopped';
//             // console.log(timer.dataset.state);
//         }
//     }

//     function controlBtns() {
//         if (timer.dataset.state == 'initial') {
//             main.appendChild(workingBlock);
//             workingBlock.appendChild(btnReset);
//             workingBlock.appendChild(btnSave);
//         }
//         if (timer.dataset.state == 'initial' || timer.dataset.state == 'stopped') {
//             btnControl.innerHTML = 'Stop';
//         } else if (btnControl.innerHTML == 'Stop') {
//             btnControl.innerHTML = 'Run';
//         }
//     }

//     function setValue(val, block) {
//         if (val.toString().length == 1) {
//             block.innerHTML = '0' + val;
//         } else {
//             block.innerHTML = val;
//         }
//     }

//     function controlTimer() {
//         var timerId = setInterval(function() {
//             if (timer.dataset.state == 'running') {
//                 miliseconds += 1;
//                 // localStorage.setItem('miliseconds', miliseconds);
//                 // miliseconds = localStorage.getItem('miliseconds');
//                 // setValue(localStorage.getItem('miliseconds'), milisecondsBlock);
//                 setValue(miliseconds, milisecondsBlock);

//                 if (miliseconds == 100) {
//                     seconds += 1;
//                     setValue(seconds, secondsBlock);
//                     miliseconds = 0;
//                     setValue(miliseconds, milisecondsBlock);
//                 }

//                 if (seconds == 60) {
//                     minutes += 1;

//                     if (minutes.toString().length == 1) {
//                         minutesBlock.innerHTML = '0' + minutes;
//                     } else {
//                         minutesBlock.innerHTML = minutes;
//                     }

//                     setValue(minutes, minutesBlock);
//                     seconds = 0;
//                     setValue(seconds, secondsBlock);
//                 }

//                 if (minutes == 60) {
//                     clearInterval(timer);
//                     removedBtnControl = main.removeChild(btnControl);
//                     btnSave.remove();
//                 }

//             } else if (timer.dataset.state == 'initial' || timer.dataset.state == 'stopped') {
//                 // console.log('stop timer');
//                 clearInterval(timerId);
//             }
//         }, 10);
//     }

//     if (timer.dataset.state == 'initial') {
//         var btnReset = createBtn('Reset');
//         var btnSave = createBtn('Save');
//     }

//     function createBtn(type) {
//         var btn = document.createElement('button');

//         btn.setAttribute('type', 'button');
//         btn.innerHTML = type;
//         btn.classList.add('btn', 'btn' + type);

//         return btn;
//     }

//     btnReset.addEventListener('click', resetTimer);

//     function resetTimer() {
//         // for (var i = 0; i < timer.children.length; i++) {
//         //     timer.children[i].innerHTML = '00';
//         // }

//         for (let digits of timer.children) {
//             digits.innerHTML = '00';
//         }

//         if (main.firstElementChild != btnControl) {
//             main.insertBefore(removedBtnControl, main.children[0]);
//         }

//         miliseconds = 0;
//         seconds = 0;
//         minutes = 0;
//         workingBlock.innerHTML = '';
//         resultsBlock.innerHTML = '';
//         resultsBlock.remove();
//         workingBlock.remove();
//         timer.dataset.state = 'initial';
//         btnControl.innerHTML = 'Start';

//     }

//     btnSave.addEventListener('click', function() {
//         workingBlock.appendChild(resultsBlock);
//     });

//     btnSave.addEventListener('click', addResult);

//     function addResult() {
//         var newResult = result.cloneNode(false);

//         if (!resultsBlock.firstElementChild) {
//             newResult.innerHTML = '1) ' + minutesBlock.innerHTML + ' : ' + secondsBlock.innerHTML + ' : ' + milisecondsBlock.innerHTML;
//         } else {
//             newResult.innerHTML = +resultsBlock.lastElementChild.innerHTML.match(/\d+(?=\))/) + 1 + ') ' + minutesBlock.innerHTML + ' : ' + secondsBlock.innerHTML + ' : ' + milisecondsBlock.innerHTML;
//         }

//         resultsBlock.appendChild(newResult);
//     }
// }




// setActions() {
//     // var main = document.getElementsByClassName('main')[0];
//     const main = document.getElementsByClassName('mainWrapper')[0];
//     // var btnControl = document.getElementsByClassName('btnControl')[0];
//     const btnControl = document.getElementsByClassName('mainBtnControl')[0];
//     // var watch = document.getElementsByClassName('watch')[0];
//     const watch = document.getElementsByClassName('mainTimer')[0];
//     var minutesBlock = document.getElementsByClassName('minutes')[0];
//     var secondsBlock = document.getElementsByClassName('seconds')[0];
//     var milisecondsBlock = document.getElementsByClassName('miliseconds')[0];
//     var minutes = +minutesBlock.innerHTML.trim();
//     var seconds = +secondsBlock.innerHTML.trim();
//     var miliseconds = +milisecondsBlock.innerHTML.trim();
//     var workingBlock = document.createElement('div');
//     var resultsBlock = document.createElement('div');
//     resultsBlock.classList.add('results');
//     var result = document.createElement('div');
//     result.classList.add('result');
//     var removedBtnControl;
//     localStorage.setItem('miliseconds', miliseconds);
//     localStorage.setItem('seconds', seconds);
//     localStorage.setItem('minutes', minutes);
//     localStorage.setItem('state', watch.dataset.state);

//     btnControl.addEventListener('click', controlBtns);
//     btnControl.addEventListener('click', controlState);
//     btnControl.addEventListener('click', controlWatch);

//     function controlState() {
//         if (watch.dataset.state == 'initial' || watch.dataset.state == 'stopped') {
//             localStorage.setItem('state', 'running');
//             watch.dataset.state = localStorage.getItem('state');
//             // watch.dataset.state = 'running';
//             // console.log(watch.dataset.state);
//         } else if (watch.dataset.state == 'running') {
//             localStorage.setItem('state', 'stopped');
//             watch.dataset.state = localStorage.getItem('state');
//             // watch.dataset.state = 'stopped';
//             // console.log(watch.dataset.state);
//         }
//     }

//     function controlBtns() {
//         if (watch.dataset.state == 'initial') {
//             main.appendChild(workingBlock);
//             workingBlock.appendChild(btnReset);
//             workingBlock.appendChild(btnSave);
//         }
//         if (watch.dataset.state == 'initial' || watch.dataset.state == 'stopped') {
//             btnControl.innerHTML = 'Stop';
//         } else if (btnControl.innerHTML == 'Stop') {
//             btnControl.innerHTML = 'Run';
//         }
//     }

//     function setValue(val, block) {
//         if (val.toString().length == 1) {
//             block.innerHTML = '0' + val;
//         } else {
//             block.innerHTML = val;
//         }
//     }

//     function controlWatch() {
//         var timer = setInterval(function() {
//             if (watch.dataset.state == 'running') {
//                 miliseconds += 1;
//                 // localStorage.setItem('miliseconds', miliseconds);
//                 // miliseconds = localStorage.getItem('miliseconds');
//                 // setValue(localStorage.getItem('miliseconds'), milisecondsBlock);
//                 setValue(miliseconds, milisecondsBlock);

//                 if (miliseconds == 100) {
//                     seconds += 1;
//                     setValue(seconds, secondsBlock);
//                     miliseconds = 0;
//                     setValue(miliseconds, milisecondsBlock);
//                 }

//                 if (seconds == 60) {
//                     minutes += 1;

//                     if (minutes.toString().length == 1) {
//                         minutesBlock.innerHTML = '0' + minutes;
//                     } else {
//                         minutesBlock.innerHTML = minutes;
//                     }

//                     setValue(minutes, minutesBlock);
//                     seconds = 0;
//                     setValue(seconds, secondsBlock);
//                 }

//                 if (minutes == 60) {
//                     clearInterval(timer);
//                     removedBtnControl = main.removeChild(btnControl);
//                     btnSave.remove();
//                 }

//             } else if (watch.dataset.state == 'initial' || watch.dataset.state == 'stopped') {
//                 // console.log('stop timer');
//                 clearInterval(timer);
//             }
//         }, 10);
//     }

//     if (watch.dataset.state == 'initial') {
//         var btnReset = createBtn('Reset');
//         var btnSave = createBtn('Save');
//     }

//     function createBtn(type) {
//         var btn = document.createElement('button');

//         btn.setAttribute('type', 'button');
//         btn.innerHTML = type;
//         btn.classList.add('btn', 'btn' + type);

//         return btn;
//     }

//     btnReset.addEventListener('click', resetWatch);

//     function resetWatch() {
//         for (var i = 0; i < watch.children.length; i++) {
//             watch.children[i].innerHTML = '00';
//         }

//         if (main.firstElementChild != btnControl) {
//             main.insertBefore(removedBtnControl, main.children[0]);
//         }

//         workingBlock.innerHTML = '';
//         resultsBlock.innerHTML = '';
//         resultsBlock.remove();
//         workingBlock.remove();
//         watch.dataset.state = 'initial';
//         btnControl.innerHTML = 'Start';
//         miliseconds = 0;
//         seconds = 0;
//         minutes = 0;
//     }

//     btnSave.addEventListener('click', function() {
//         workingBlock.appendChild(resultsBlock);
//     });

//     btnSave.addEventListener('click', addResult);

//     function addResult() {
//         var newResult = result.cloneNode(false);

//         if (!resultsBlock.firstElementChild) {
//             newResult.innerHTML = '1) ' + minutesBlock.innerHTML + ' : ' + secondsBlock.innerHTML + ' : ' + milisecondsBlock.innerHTML;
//         } else {
//             newResult.innerHTML = +resultsBlock.lastElementChild.innerHTML.match(/\d+(?=\))/) + 1 + ') ' + minutesBlock.innerHTML + ' : ' + secondsBlock.innerHTML + ' : ' + milisecondsBlock.innerHTML;
//         }

//         resultsBlock.appendChild(newResult);
//     }
// }