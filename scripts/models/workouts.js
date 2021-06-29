import {generateID} from '../helpers/utils.js';

// class Tasks {
class Workouts {
    constructor() {
        // this.defaultTasks = [
        this.defaultWorkouts = [
            // {
            //     id: generateID(),
            //     title: 'Task 1',
            //     status: 'In Progress'
            // },
            
            {
                id: 'Weight',
                numExercises: 6,
                rest: 2,
                // id: generateID(),
                days: [
                    {
                        day: 'day1',
                        exercises: [
                            'd1ex1',
                            'd1ex2',
                            'd1ex3',
                            'd1ex4',
                            'd1ex5',
                            'd1ex6',
                            'd1ex7',
                            'd1ex8',
                        ]
                    },
                    {
                        day: 'day2',
                        exercises: [
                            'd2ex1',
                            'd2ex2',
                            'd2ex3',
                            'd2ex4',
                            'd2ex5',
                            'd2ex6',
                            'd2ex7',
                            'd2ex8',
                        ]
                    },
                    {
                        day: 'day3',
                        exercises: [
                            'd3ex1',
                            'd3ex2',
                            'd3ex3',
                            'd3ex4',
                            'd3ex5',
                            'd3ex6',
                            'd3ex7',
                            'd3ex8',
                        ]
                    },
                ],
            },
            {
                id: 'Force',
                // id: generateID(),
                numExercises: 8,
                rest: 3,
                // id: generateID(),
                days: [
                    {
                        day: 'day1',
                        exercises: [
                            'd1ex1',
                            'd1ex2',
                            'd1ex3',
                            'd1ex4',
                            'd1ex5',
                            'd1ex6',
                            'd1ex7',
                            'd1ex8',
                        ]
                    },
                    {
                        day: 'day2',
                        exercises: [
                            'd2ex1',
                            'd2ex2',
                            'd2ex3',
                            'd2ex4',
                            'd2ex5',
                            'd2ex6',
                            'd2ex7',
                            'd2ex8',
                        ]
                    },
                    {
                        day: 'day3',
                        exercises: [
                            'd3ex1',
                            'd3ex2',
                            'd3ex3',
                            'd3ex4',
                            'd3ex5',
                            'd3ex6',
                            'd3ex7',
                            'd3ex8',
                        ]
                    },
                ],
            },
            {
                id: 'Burning',
                // id: generateID(),
                day1: {
                    ex1: 'd1ex1',
                    ex2: 'd1ex2',
                    ex3: 'd1ex3',
                    ex4: 'd1ex4',
                    ex5: 'd1ex5',
                    ex6: 'd1ex6',
                    ex7: 'd1ex7',
                    ex8: 'd1ex8',
                },
                day2: {
                    ex1: 'd2ex1',
                    ex2: 'd2ex2',
                    ex3: 'd2ex3',
                    ex4: 'd2ex4',
                    ex5: 'd2ex5',
                    ex6: 'd2ex6',
                    ex7: 'd2ex7',
                    ex8: 'd2ex8',
                },
                day3: {
                    ex1: 'd3ex1',
                    ex2: 'd3ex2',
                    ex3: 'd3ex3',
                    ex4: 'd3ex4',
                    ex5: 'd3ex5',
                    ex6: 'd3ex6',
                    ex7: 'd3ex7',
                    ex8: 'd3ex8',
                },
            },
        ];
    }

    // getTasksFromLS() {
    //     return JSON.parse(localStorage.getItem('tasks')) || this.defaultTasks && Tasks.setTasksToLS(this.defaultTasks);
    // }
    getWorkoutsFromLS() {
        return JSON.parse(localStorage.getItem('workouts')) || this.defaultWorkouts && Workouts.setWorkoutsToLS(this.defaultWorkouts);
    }

    // static setTasksToLS(tasks) {
    //     localStorage.setItem('tasks', JSON.stringify(tasks));
    // }
    static setWorkoutsToLS(workouts) {
        localStorage.setItem('workouts', JSON.stringify(workouts));
    }
}

export default Workouts;