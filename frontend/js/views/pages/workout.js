import Component from '../component.js';
import Workouts from '../../models/workouts.js';

class Workout extends Component {
    constructor() {
        super();

        this.workout = this.workouts.find(workout => workout.id === JSON.parse(localStorage.getItem('way')));
    }

    getDayHTML(day) {
        return `
            <tr class="mainTableRow">
                <td class="mainTableCell mainTableCellDay" colspan="10">${day.day}</td>
            </tr>
            ${day.exercises.map(exercise => this.getTrExerciseHTML(exercise)).join('\n')}
        `;
    }

    getTrExerciseHTML(exercise) {
        return `
            <tr class="mainTableRow mainTableRowExercise">
                <td class="mainTableCell mainTableCellExercise">${exercise.exName}</td>
                <td class="mainTableCell mainTableCellRest">${exercise.exRest}</td>
                ${exercise.exResults.map(result => this.getTdResultHTML(result)).join('\n')}
            </tr>
        `;
    }

    getTdResultHTML(result) {
        return `
            <td class="mainTableCell mainTableCellResult">${result}</td>
        `;
    }

    render() {
        return new Promise(resolve => {
            resolve(`
                <main class="main">
                    <h1 class="mainTitle">${this.workout.id}</h1>
                    <table class="mainTable">
                        <tbody>
                            <tr class="mainTableRow">
                                <th class="mainTableCell">Workout exercises</th>
                                <th class="mainTableCell">Rest</th>
                                <th class="mainTableCell">1</th>
                                <th class="mainTableCell">2</th>
                                <th class="mainTableCell">3</th>
                                <th class="mainTableCell">4</th>
                                <th class="mainTableCell">5</th>
                                <th class="mainTableCell">6</th>
                                <th class="mainTableCell">7</th>
                                <th class="mainTableCell">8</th>
                            </tr>
                            ${this.workout.days.map(day => this.getDayHTML(day)).join('\n')
                            }
                        </tbody>
                    </table>
                    <button type="button" class="mainBtn mainBtnSave">Save workout</button>
                </main>
            `);
        });
    }

    afterRender() {
        this.setActions();
    }

    setActions() {
        const mainTable = document.getElementsByClassName('mainTable')[0];
        const btnSave = document.getElementsByClassName('mainBtnSave')[0];
        const self = this;

        mainTable.addEventListener('click', activateTd);
        btnSave.addEventListener('click', () => this.saveWorkout());

        function activateTd(e) {
            if (e.target.tagName == 'TD' && !e.target.classList.contains('mainTableCellRest') && !e.target.classList.contains('mainTableCellExercise')) {
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
        const workoutId = document.getElementsByClassName('mainTitle')[0].innerHTML.trim();
        const workoutDays = document.getElementsByClassName('mainTableCellDay');
        const weeksNum = document.getElementsByTagName('th').length - 2;
        const exercises = document.getElementsByClassName('mainTableRowExercise');
        const exercisesNames = document.getElementsByClassName('mainTableCellExercise');
        const exercisesRests = document.getElementsByClassName('mainTableCellRest');
        const exercisesResults = document.getElementsByClassName('mainTableCellResult');
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