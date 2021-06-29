// import {generateID} from '../../../helpers/utils.js';

import Component from '../../views/component.js';

import Workouts from '../../models/workouts.js';

class Workout extends Component {
    constructor() {
        super();

        this.workout = this.workouts.find(workout => workout.id === JSON.parse(localStorage.getItem('way')));
        console.log(this.workout);
    }
    render() {
        const numOfExercises = this.workout.numExercises;
        const rest = `${this.workout.rest}'`;

        return new Promise(resolve => {
            const mainContainer = document.getElementsByClassName('mainContainer')[0];
            mainContainer.innerHTML = `<main class="main"></main>`;
            const main = document.getElementsByClassName('main')[0];
            const mainTable = document.createElement('table');
            mainTable.classList.add('mainTable');
            const mainTableRow = document.createElement('tr');
            mainTableRow.classList.add('mainTableRow');
            const mainTableCellFirst = document.createElement('th');
            const mainTableCell = document.createElement('td');
            mainTableCellFirst.classList.add('mainTableCell');
            mainTableCell.classList.add('mainTableCell');
            const newTable = mainTable.cloneNode(true);

            function createTable() {
                for (let i = 1; i <= numOfExercises * 3 + 4; i++) {
                    const newTableRow = mainTableRow.cloneNode(true);
                
                    for (let j = 1; j <= 10; j++) {
                        let newTableCell;
            
                        if (i == 1) {
                            newTableCell = mainTableCellFirst.cloneNode(true);
                        } else {
                            newTableCell = mainTableCell.cloneNode(true);
                        }
                        if (i == 1 && j == 1) {
                            newTableCell.innerHTML = 'Workout exercises';
                        } else if (i == 1 && j == 2) {
                            newTableCell.innerHTML = 'Rest';
                        } else if (i == 1) {
                            newTableCell.innerHTML = `${j - 2}`;
                        } else if (i != 2 && i != 2 + numOfExercises + 1 && i != 2 + (numOfExercises + 1) * 2 && j == 2) {
                            newTableCell.innerHTML = rest;
                            newTableCell.classList.add('mainTableCellRest');
                        } else {
                            // newTableCell.innerHTML = '<input type="text">';
                            // newTable.addEventListener('click', activateTd);
                        }

                        fillFirstColumn();

                        function fillFirstColumn() {
                            let day = 1;
                            if (j == 1 && i >= 2) {
            
                                if (i == 2) {
                                    newTableCell.classList.add('mainTableCellDay');
                                    newTableCell.innerHTML = `Day ${day}`;
                                } else if (i == 2 + (numOfExercises + 1)) {
                                    newTableCell.classList.add('mainTableCellDay');
                                    newTableCell.innerHTML = `Day ${++day}`;
                                } else if (i == 2 + (numOfExercises + 1) * 2) {
                                    newTableCell.classList.add('mainTableCellDay');
                                    newTableCell.innerHTML = `Day ${day + 2}`;
                                } else {
                                    newTableCell.classList.add('mainTableCellExercise');
                                    fillFirstColumnExercises();
                                }
                            }
                        }

                        function fillFirstColumnExercises() {
                            const exerciseCells = document.getElementsByClassName('mainTableCellExercise');
                            for (let n = 1; n <= exerciseCells.length/3; n++) {
                                exerciseCells[n].innerHTML = `${n}.`;
                            }
                        }
                        
                        newTableRow.appendChild(newTableCell);
                    }
            
                    newTable.appendChild(newTableRow);
                }
            
                return newTable;
            }
            
            const tableFilled = createTable();
            // main.innerHTML = `<h2 class="mainWay">${!localStorage.getItem('way') ? 'My workout' : JSON.parse(localStorage.getItem('way'))}</h2>`;
            main.innerHTML = `<h2 class="mainWay">${!this.workout ? 'My workout' : this.workout.id}</h2>`;
            main.appendChild(tableFilled);

            resolve(mainContainer.innerHTML);
            // resolve(`
            //     <h1 class="page-title">Tasks List</h1>
                
            //     <div class="task-add">
            //         <input class="task-add__title" type="text" placeholder="Task title">
                    
            //         <button class="task-add__btn-add button" disabled>Add Task</button>
            //     </div>
                  
            //     <div class="tasks">
            //         <div class="tasks__list">
            //             ${this.tasks.map(task => this.getTaskHTML(task)).join('\n ')}
            //         </div>
            //     </div>
            // `);
            // resolve(`

            // `);
        });
    }

    afterRender() {
        this.setActions();
    }

    setActions() {
        const mainTable = document.getElementsByClassName('mainTable')[0];
        mainTable.addEventListener('click', activateTd);
        function activateTd(e) {
            if (e.target.tagName == 'TD' && !e.target.classList.contains('mainTableCellRest') && !e.target.classList.contains('mainTableCellExercise')) {
                let input = document.createElement('input');
                input.type = 'text';
                input.addEventListener('blur', diactivateTd);
                input.addEventListener('keydown', diactivateTdByEnter);

                function diactivateTd() {
                    e.target.innerHTML = input.value;
                }

                function diactivateTdByEnter(e) {
                    if (e.keyCode == 13) {
                        input.blur();
                    }
                }

                if (!e.target.innerHTML) {
                    e.target.insertAdjacentElement('afterbegin', input);
                    input.focus();
                } else if (!e.target.firstElementChild) {
                    e.target.innerHTML = '<input type="text" value ="' + e.target.innerHTML + '">';
                    input = e.target.firstElementChild;
                    input.focus();
                    input.selectionStart = input.value.length;
                    input.setSelectionRange(0, input.value.length);
                    input.addEventListener('blur', diactivateTd);
                    input.addEventListener('keydown', diactivateTdByEnter);
                } else if (e.target.firstElementChild.tagName == 'INPUT') {
                    e.target.firstElementChild.focus();
                }
            }
        }
    }

    saveWorkout() {

    }

    // addTask(addTaskTitle, addTaskBtn, tasksList) {
	// 	const newTask = {
	// 		id: generateID(),
	// 		title: addTaskTitle.value.trim(),
	// 		status: 'In Progress'
	// 	};

    //     this.tasks.push(newTask);
    //     Tasks.setTasksToLS(this.tasks);

	// 	this.clearAddTask(addTaskTitle, addTaskBtn);

    //     tasksList.insertAdjacentHTML('beforeEnd', this.getTaskHTML(newTask));
    // }

    // getTaskHTML(task) {
    //     return `
    //         <div class="task" data-id="${task.id}">
    //             <a class="task__title" data-id="${task.id}">${task.title}</a>
                
    //             <div class="task__buttons">
    //                 <a class="task__btn-edit button" href="#/task/${task.id}/edit">Edit</a> 
    //                 <a class="task__btn-done button">Done</a> 
    //                 <a class="task__btn-remove button">Remove</a>   
    //             </div>                            
    //         </div>
    //     `;
    // }

    // clearAddTask(addTaskTitle, addTaskBtn) {
	// 	addTaskTitle.value = '';
    //     addTaskBtn.disabled = true;
    // }

    // redirectToTaskInfo(id) {
    //     location.hash = `#/task/${id}`;
    // }

    // removeTask(taskContainer) {
    //     if (confirm('Are you sure?')) {
    //         this.tasks = this.tasks.filter(task => task.id !== taskContainer.dataset.id);
    //         Tasks.setTasksToLS(this.tasks);

    //         taskContainer.remove();
    //     }
    // }
}

export default Workout;