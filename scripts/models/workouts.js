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
                // numExercises: 6,
                // rest: 2,
                // id: generateID(),
                days: [
                    {
                        day: 'Day 1',
                        exercises: [
                            {
                                exName: 'd1ex1',
                                exRest: 2,
                                exResults: [1, 2, 3, 4, 5, 6, 7, 8],
                            },
                            {
                                exName: 'd1ex2',
                                exRest: 2,
                                exResults: [1, 2, 3, 4, 5, 6, 7, 8],
                            },
                            {
                                exName: 'd1ex3',
                                exRest: 1,
                                exResults: [1, 2, 3, 4, 5, 6, 7, 8],
                            },
                            {
                                exName: 'd1ex4',
                                exRest: 2,
                                exResults: [1, 2, 3, 4, 5, 6, 7, 8],
                            },
                            {
                                exName: 'd1ex5',
                                exRest: 1,
                                exResults: [1, 2, 3, 4, 5, 6, 7, 8],
                            },
                            {
                                exName: 'd1ex6',
                                exRest: 1,
                                exResults: [1, 2, 3, 4, 5, 6, 7, 8],
                            },
                        ]
                    },
                    {
                        day: 'Day 2',
                        exercises: [
                            {
                                exName: 'd2ex1',
                                exRest: 2,
                                exResults: [1, 2, 3, 4, 5, 6, 7, 8],
                            },
                            {
                                exName: 'd2ex2',
                                exRest: 2,
                                exResults: [1, 2, 3, 4, 5, 6, 7, 8],
                            },
                            {
                                exName: 'd2ex3',
                                exRest: 1,
                                exResults: [1, 2, 3, 4, 5, 6, 7, 8],
                            },
                            {
                                exName: 'd2ex4',
                                exRest: 2,
                                exResults: [1, 2, 3, 4, 5, 6, 7, 8],
                            },
                            {
                                exName: 'd2ex5',
                                exRest: 1,
                                exResults: [1, 2, 3, 4, 5, 6, 7, 8],
                            },
                            {
                                exName: 'd2ex6',
                                exRest: 1,
                                exResults: [1, 2, 3, 4, 5, 6, 7, 8],
                            },
                        ]
                    },
                    {
                        day: 'Day 3',
                        exercises: [
                            {
                                exName: 'd3ex1',
                                exRest: 2,
                                exResults: [1, 2, 3, 4, 5, 6, 7, 8],
                            },
                            {
                                exName: 'd3ex2',
                                exRest: 2,
                                exResults: [1, 2, 3, 4, 5, 6, 7, 8],
                            },
                            {
                                exName: 'd3ex3',
                                exRest: 1,
                                exResults: [1, 2, 3, 4, 5, 6, 7, 8],
                            },
                            {
                                exName: 'd3ex4',
                                exRest: 2,
                                exResults: [1, 2, 3, 4, 5, 6, 7, 8],
                            },
                            {
                                exName: 'd3ex5',
                                exRest: 1,
                                exResults: [1, 2, 3, 4, 5, 6, 7, 8],
                            },
                            {
                                exName: 'd3ex6',
                                exRest: 1,
                                exResults: [1, 2, 3, 4, 5, 6, 7, 8],
                            },
                        ]
                    },
                ],
            },
            {
                id: 'Force',
                // id: generateID(),
                // numExercises: 5,
                // rest: 3,
                days: [
                    {
                        day: 'Day 1',
                        exercises: [
                            {
                                exName: 'd1ex1',
                                exRest: 2,
                                exResults: [70, 2, 3, 4, 5, 6, 7, 8],
                            },
                            {
                                exName: 'd1ex2',
                                exRest: 2,
                                exResults: [1, 2, 3, 4, 5, 6, 7, 8],
                            },
                            {
                                exName: 'd1ex3',
                                exRest: 1,
                                exResults: [1, 2, 3, 4, 5, 6, 7, 8],
                            },
                            {
                                exName: 'd1ex4',
                                exRest: 2,
                                exResults: [1, 2, 3, 4, 5, 6, 7, 8],
                            },
                            {
                                exName: 'd1ex5',
                                exRest: 1,
                                exResults: [1, 2, 3, 4, 5, 6, 7, 8],
                            },
                        ]
                    },
                    {
                        day: 'Day 2',
                        exercises: [
                            {
                                exName: 'd2ex1',
                                exRest: 2,
                                exResults: [1, 2, 3, 4, 5, 6, 7, 8],
                            },
                            {
                                exName: 'd2ex2',
                                exRest: 2,
                                exResults: [1, 2, 3, 4, 5, 6, 7, 8],
                            },
                            {
                                exName: 'd2ex3',
                                exRest: 1,
                                exResults: [1, 2, 3, 4, 5, 6, 7, 8],
                            },
                            {
                                exName: 'd2ex4',
                                exRest: 2,
                                exResults: [1, 2, 3, 4, 5, 6, 7, 8],
                            },
                            {
                                exName: 'd2ex5',
                                exRest: 1,
                                exResults: [1, 2, 3, 4, 5, 6, 7, 8],
                            },
                        ]
                    },
                    {
                        day: 'Day 3',
                        exercises: [
                            {
                                exName: 'd3ex1',
                                exRest: 2,
                                exResults: [1, 2, 3, 4, 5, 6, 7, 8],
                            },
                            {
                                exName: 'd3ex2',
                                exRest: 2,
                                exResults: [1, 2, 3, 4, 5, 6, 7, 8],
                            },
                            {
                                exName: 'd3ex3',
                                exRest: 1,
                                exResults: [1, 2, 3, 4, 5, 6, 7, 8],
                            },
                            {
                                exName: 'd3ex4',
                                exRest: 2,
                                exResults: [1, 2, 3, 4, 5, 6, 7, 8],
                            },
                            {
                                exName: 'd3ex5',
                                exRest: 1,
                                exResults: [1, 2, 3, 4, 5, 6, 7, 8],
                            },
                        ]
                    },
                ],
            },
            {
                id: 'Burning',
                // id: generateID(),
                // numExercises: 7,
                // rest: 1,
                days: [
                    {
                        day: 'Day 1',
                        exercises: [
                            {
                                exName: 'd1ex1',
                                exRest: 2,
                                exResults: [1, 2, 3, 4, 5, 6, 7, 8],
                            },
                            {
                                exName: 'd1ex2',
                                exRest: 2,
                                exResults: [1, 2, 3, 4, 5, 6, 7, 8],
                            },
                            {
                                exName: 'd1ex3',
                                exRest: 1,
                                exResults: [1, 2, 3, 4, 5, 6, 7, 8],
                            },
                            {
                                exName: 'd1ex4',
                                exRest: 2,
                                exResults: [1, 2, 3, 4, 5, 6, 7, 8],
                            },
                            {
                                exName: 'd1ex5',
                                exRest: 1,
                                exResults: [1, 2, 3, 4, 5, 6, 7, 8],
                            },
                            {
                                exName: 'd1ex6',
                                exRest: 1,
                                exResults: [1, 2, 3, 4, 5, 6, 7, 8],
                            },
                            {
                                exName: 'd1ex7',
                                exRest: 1,
                                exResults: [1, 2, 3, 4, 5, 6, 7, 8],
                            },
                        ]
                    },
                    {
                        day: 'Day 2',
                        exercises: [
                            {
                                exName: 'd2ex1',
                                exRest: 2,
                                exResults: [1, 2, 3, 4, 5, 6, 7, 8],
                            },
                            {
                                exName: 'd2ex2',
                                exRest: 2,
                                exResults: [1, 2, 3, 4, 5, 6, 7, 8],
                            },
                            {
                                exName: 'd2ex3',
                                exRest: 1,
                                exResults: [1, 2, 3, 4, 5, 6, 7, 8],
                            },
                            {
                                exName: 'd2ex4',
                                exRest: 2,
                                exResults: [1, 2, 3, 4, 5, 6, 7, 8],
                            },
                            {
                                exName: 'd2ex5',
                                exRest: 1,
                                exResults: [1, 2, 3, 4, 5, 6, 7, 8],
                            },
                            {
                                exName: 'd2ex6',
                                exRest: 1,
                                exResults: [1, 2, 3, 4, 5, 6, 7, 8],
                            },
                            {
                                exName: 'd1ex7',
                                exRest: 1,
                                exResults: [1, 2, 3, 4, 5, 6, 7, 8],
                            },
                        ]
                    },
                    {
                        day: 'Day 3',
                        exercises: [
                            {
                                exName: 'd3ex1',
                                exRest: 2,
                                exResults: [1, 2, 3, 4, 5, 6, 7, 8],
                            },
                            {
                                exName: 'd3ex2',
                                exRest: 2,
                                exResults: [1, 2, 3, 4, 5, 6, 7, 8],
                            },
                            {
                                exName: 'd3ex3',
                                exRest: 1,
                                exResults: [1, 2, 3, 4, 5, 6, 7, 8],
                            },
                            {
                                exName: 'd3ex4',
                                exRest: 2,
                                exResults: [1, 2, 3, 4, 5, 6, 7, 8],
                            },
                            {
                                exName: 'd3ex5',
                                exRest: 1,
                                exResults: [1, 2, 3, 4, 5, 6, 7, 8],
                            },
                            {
                                exName: 'd3ex6',
                                exRest: 1,
                                exResults: [1, 2, 3, 4, 5, 6, 7, 8],
                            },
                            {
                                exName: 'd1ex7',
                                exRest: 1,
                                exResults: [1, 2, 3, 4, 5, 6, 7, 8],
                            },
                        ]
                    },
                ],
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