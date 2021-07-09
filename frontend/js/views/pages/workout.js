import Component from '../component';

import WorkoutTemplate from '../../../templates/pages/workout';

import Workouts from '../../models/workouts';

class Workout extends Component {
    constructor() {
        super();

        this.workout = this.workouts.find(workout => workout.id === JSON.parse(localStorage.getItem('way')));
    }

    getDayHTML(day) {
        return `
            <tr class="main-table-row">
                <td class="main-table-cell main-table-cell-day" colspan="10">${day.day}</td>
            </tr>
            ${day.exercises.map(exercise => this.getTrExerciseHTML(exercise)).join('\n')}
        `;
    }

    getTrExerciseHTML(exercise) {
        return `
            <tr class="main-table-row main-table-row-exercise">
                <td class="main-table-cell main-table-cell-exercise">${exercise.exName}</td>
                <td class="main-table-cell main-table-cell-rest">${exercise.exRest}</td>
                ${exercise.exResults.map(result => this.getTdResultHTML(result)).join('\n')}
            </tr>
        `;
    }

    getTdResultHTML(result) {
        return `
            <td class="main-table-cell main-table-cell-result">${result}</td>
        `;
    }

    render() {
        const dayTemplate = this.workout.days.map(day => this.getDayHTML(day)).join('\n');
        const id = this.workout.id;

        return new Promise(resolve => {
            resolve(WorkoutTemplate({
                workoutIdValue: id,
                dayTemplate: dayTemplate
            }));
            // resolve(`
            //     <main class="main">
            //         <h1 class="main-title">${this.workout.id}</h1>
            //         <table class="main-table">
            //             <tbody>
            //                 <tr class="main-table-row">
            //                     <th class="main-table-cell">Workout exercises</th>
            //                     <th class="main-table-cell">Rest</th>
            //                     <th class="main-table-cell">1</th>
            //                     <th class="main-table-cell">2</th>
            //                     <th class="main-table-cell">3</th>
            //                     <th class="main-table-cell">4</th>
            //                     <th class="main-table-cell">5</th>
            //                     <th class="main-table-cell">6</th>
            //                     <th class="main-table-cell">7</th>
            //                     <th class="main-table-cell">8</th>
            //                 </tr>
            //                 ${this.workout.days.map(day => this.getDayHTML(day)).join('\n')
            //                 }
            //             </tbody>
            //         </table>
            //         <button type="button" class="main-btn main-btn-save">Save workout</button>
            //     </main>
            // `);
        });
    }

    afterRender() {
        this.setActions();
    }

    setActions() {
        const mainTable = document.getElementsByClassName('main-table')[0];
        const btnSave = document.getElementsByClassName('main-btn-save')[0];
        const self = this;

        mainTable.addEventListener('click', activateTd);
        btnSave.addEventListener('click', () => this.saveWorkout());

        function activateTd(e) {
            if (e.target.tagName == 'TD' && !e.target.classList.contains('main-table-cell-rest') && !e.target.classList.contains('main-table-cell-exercise')) {
                let input = document.createElement('input');

                input.type = 'text';
                input.addEventListener('blur', () => {
                    diactivateTd(e, input);
                    self.saveWorkout();
                });

                input.addEventListener('keydown', () => {
                    diactivateTdByEnter(input);
                });

                if (!e.target.innerHTML) {
                    e.target.insertAdjacentElement('afterbegin', input);
                    input.focus();
                } else if (!e.target.firstElementChild) {
                    e.target.innerHTML = '<input type="text" value ="' + e.target.innerHTML + '">';
                    input = e.target.firstElementChild;
                    input.focus();
                    input.selectionStart = input.value.length;
                    input.setSelectionRange(0, input.value.length);
                    input.addEventListener('blur', () => {
                        diactivateTd(e, input);
                        self.saveWorkout();
                    });
                    input.addEventListener('keydown', () => {
                        diactivateTdByEnter(input);
                    });
                } else if (e.target.firstElementChild.tagName == 'INPUT') {
                    e.target.firstElementChild.focus();
                }
            }
        }

        function diactivateTd(e, input) {
            e.target.innerHTML = input.value;
        }

        function diactivateTdByEnter(input) {
            if (event.keyCode == 13) {
                input.blur();
            }
        }
    }

    saveWorkout() {
        const workoutId = document.getElementsByClassName('main-title')[0].innerHTML.trim();
        const workoutDays = document.getElementsByClassName('main-table-cell-day');
        const weeksNum = document.getElementsByTagName('th').length - 2;
        const exercises = document.getElementsByClassName('main-table-row-exercise');
        const exercisesNames = document.getElementsByClassName('main-table-cell-exercise');
        const exercisesRests = document.getElementsByClassName('main-table-cell-rest');
        const exercisesResults = document.getElementsByClassName('main-table-cell-result');
        const allExercises = [];
        const arrResults = [];

        this.workout.id = workoutId;
        this.workout.days = [];

        for (let day = 0; day < workoutDays.length; day++) {
            const dayName = workoutDays[day].innerHTML;
            const newDay = {
                day: dayName,
                exercises: []
            };

            for (let exercise = 0; exercise < exercises.length/workoutDays.length; exercise++) {
                const newExercise = {
                    exDay: day + 1,
                    exName: '',
                    exRest: 0,
                    exResults: []
                };

                allExercises.push(newExercise);
                newDay.exercises.push(newExercise);
            }

            this.workout.days.push(newDay);
        }

        for (let result of exercisesResults) {
            arrResults.push(result.innerHTML);
        }

        let last = weeksNum - 1;
        for (let exercise = 0; exercise < exercises.length; exercise++) {
            allExercises[exercise].exName = exercisesNames[exercise].innerHTML;
            allExercises[exercise].exRest = exercisesRests[exercise].innerHTML;

            for (let result = 0; result < weeksNum; result++) {
                allExercises[exercise].exResults.push(arrResults[result]);

                if (arrResults.length && result == last) {
                    arrResults.splice(0, 8);
                }
            }
        }

        Workouts.setWorkoutsToLS(this.workouts);
    }
}

export default Workout;