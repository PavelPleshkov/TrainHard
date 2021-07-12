
class Workouts {
    constructor() {

        this.defaultWorkouts = [
            {
                id: 'Weight',
                days: [
                    {
                        day: 'Monday',
                        exercises: [
                            {
                                exName: 'Bench press, lying',
                                exRest: 2,
                                exResults: ['3х10', '4х10', '', '', '5х10', '', '', '']
                            },
                            {
                                exName: 'Incline bench press, <30',
                                exRest: 2,
                                exResults: ['3х10', '4х10', '', '', '', '', '', '']
                            },
                            {
                                exName: 'Chest in a block',
                                exRest: 1,
                                exResults: ['3х12', '', '', '', '', '4х12', '', '']
                            },
                            {
                                exName: 'Lifting the bar for biceps, standing',
                                exRest: 2,
                                exResults: ['3х10', '4х10', '', '', '', '', '', '']
                            },
                            {
                                exName: 'Lifting dumbbells on the biceps, hammer, sitting',
                                exRest: 1,
                                exResults: ['3х10', '4х10', '', '', '', '', '', '']
                            },
                            {
                                exName: 'Lifting the block on the biceps',
                                exRest: 1,
                                exResults: ['3х12', '', '', '', '', '4х12', '', '']
                            }
                        ]
                    },
                    {
                        day: 'Wednesday',
                        exercises: [
                            {
                                exName: 'Deadlifts',
                                exRest: 2,
                                exResults: ['3х10', '4х10', '', '', '5х10', '', '', '']
                            },
                            {
                                exName: 'Pull-ups',
                                exRest: 2,
                                exResults: ['5x5', '', '', '', '6x6', '', '7x7', '']
                            },
                            {
                                exName: 'Hyperextension',
                                exRest: 1,
                                exResults: ['3х12', '4х12', '', '', '3x10', '', '', '']
                            },
                            {
                                exName: 'Bench press on the triceps',
                                exRest: 2,
                                exResults: ['3х10', '4х10', '', '', '', '', '', '']
                            },
                            {
                                exName: 'Dips',
                                exRest: 1,
                                exResults: ['4х10', '', '', '', '5х10', '', '', '']
                            },
                            {
                                exName: 'Skull crushers',
                                exRest: 1,
                                exResults: ['4х12', '', '', '', '4x10', '', '', '']
                            }
                        ]
                    },
                    {
                        day: 'Friday',
                        exercises: [
                            {
                                exName: 'Back squats',
                                exRest: 2,
                                exResults: ['4x10', '', '', '5x10', '', '', '6x10', '']
                            },
                            {
                                exName: 'Lunges with dumbbells',
                                exRest: 2,
                                exResults: ['3x10', '4x10', '', '', '', '', '3x10', '']
                            },
                            {
                                exName: 'Legs extensions in block',
                                exRest: 1,
                                exResults: ['3x10', '4x10', '', '', '', '', '', '']
                            },
                            {
                                exName: 'Overhead press',
                                exRest: 2,
                                exResults: ['3x10', '4x10', '', '', '5x10', '', '', '']
                            },
                            {
                                exName: 'Barbell pull to the chin',
                                exRest: 1,
                                exResults: ['3x10', '', '', '', '4x10', '', '', '']
                            },
                            {
                                exName: 'Breeding dumbbells, standing',
                                exRest: 1,
                                exResults: ['3x10', '4x12', '', '', '', '', '', '']
                            }
                        ]
                    },
                    {
                        day: 'Tuesday, Thursday, Saturday',
                        exercises: [
                            {
                                exName: 'Press',
                                exRest: 2,
                                exResults: ['3x25', '', '', '', '4x25', '', '', '']
                            },
                            {
                                exName: 'Plank',
                                exRest: 'tmsXmin',
                                exResults: ['3x2', '', '', '', '', '', '', '']
                            },
                            {
                                exName: 'Walking',
                                exRest: 'h',
                                exResults: ['1', '', '', '', '', '', '', '']
                            },
                            {
                                exName: 'Sleeping',
                                exRest: 'h',
                                exResults: ['8', '8', '8', '8', '9', '9', '9', '9']
                            },
                            {
                                exName: 'Eating',
                                exRest: 'Tms',
                                exResults: ['4', '', '', '', '5', '', '', '']
                            }
                        ]
                    },
                    {
                        day: 'Sunday',
                        exercises: [
                            {
                                exName: 'Relax',
                                exRest: '24h',
                                exResults: ['', '', '', '', '', '', '', '']
                            }
                        ]
                    }
                ]
            },
            {
                id: 'Force',
                days: [
                    {
                        day: 'Day 1',
                        exercises: [
                            {
                                exName: 'Bench press, lying',
                                exRest: 2,
                                exResults: ['', '', '', '', '', '', '', '']
                            },
                            {
                                exName: 'Breeding dumbbells, lying',
                                exRest: 2,
                                exResults: ['', '', '', '', '', '', '', '']
                            },
                            {
                                exName: 'd1ex3',
                                exRest: 1,
                                exResults: ['', '', '', '', '', '', '', '']
                            },
                            {
                                exName: 'd1ex4',
                                exRest: 2,
                                exResults: ['', '', '', '', '', '', '', '']
                            },
                            {
                                exName: 'Lifting dumbbells on the biceps, emphasis on the knee',
                                exRest: 1,
                                exResults: ['', '', '', '', '', '', '', '']
                            }
                        ]
                    },
                    {
                        day: 'Day 2',
                        exercises: [
                            {
                                exName: 'd2ex1',
                                exRest: 2,
                                exResults: ['', '', '', '', '', '', '', '']
                            },
                            {
                                exName: 'd2ex2',
                                exRest: 2,
                                exResults: ['', '', '', '', '', '', '', '']
                            },
                            {
                                exName: 'd2ex3',
                                exRest: 1,
                                exResults: ['', '', '', '', '', '', '', '']
                            },
                            {
                                exName: 'd2ex4',
                                exRest: 2,
                                exResults: ['', '', '', '', '', '', '', '']
                            },
                            {
                                exName: 'd2ex5',
                                exRest: 1,
                                exResults: ['', '', '', '', '', '', '', '']
                            }
                        ]
                    },
                    {
                        day: 'Day 3',
                        exercises: [
                            {
                                exName: 'd3ex1',
                                exRest: 2,
                                exResults: ['', '', '', '', '', '', '', '']
                            },
                            {
                                exName: 'd3ex2',
                                exRest: 2,
                                exResults: ['', '', '', '', '', '', '', '']
                            },
                            {
                                exName: 'd3ex3',
                                exRest: 1,
                                exResults: ['', '', '', '', '', '', '', '']
                            },
                            {
                                exName: 'd3ex4',
                                exRest: 2,
                                exResults: ['', '', '', '', '', '', '', '']
                            },
                            {
                                exName: 'd3ex5',
                                exRest: 1,
                                exResults: ['', '', '', '', '', '', '', '']
                            }
                        ]
                    }
                ]
            },
            {
                id: 'Burning',
                days: [
                    {
                        day: 'Day 1',
                        exercises: [
                            {
                                exName: 'd1ex1',
                                exRest: 2,
                                exResults: ['', '', '', '', '', '', '', '']
                            },
                            {
                                exName: 'd1ex2',
                                exRest: 2,
                                exResults: ['', '', '', '', '', '', '', '']
                            },
                            {
                                exName: 'd1ex3',
                                exRest: 1,
                                exResults: ['', '', '', '', '', '', '', '']
                            },
                            {
                                exName: 'd1ex4',
                                exRest: 2,
                                exResults: ['', '', '', '', '', '', '', '']
                            },
                            {
                                exName: 'd1ex5',
                                exRest: 1,
                                exResults: ['', '', '', '', '', '', '', '']
                            },
                            {
                                exName: 'd1ex6',
                                exRest: 1,
                                exResults: ['', '', '', '', '', '', '', '']
                            },
                            {
                                exName: 'd1ex7',
                                exRest: 1,
                                exResults: ['', '', '', '', '', '', '', '']
                            }
                        ]
                    },
                    {
                        day: 'Day 2',
                        exercises: [
                            {
                                exName: 'd2ex1',
                                exRest: 2,
                                exResults: ['', '', '', '', '', '', '', '']
                            },
                            {
                                exName: 'd2ex2',
                                exRest: 2,
                                exResults: ['', '', '', '', '', '', '', '']
                            },
                            {
                                exName: 'd2ex3',
                                exRest: 1,
                                exResults: ['', '', '', '', '', '', '', '']
                            },
                            {
                                exName: 'd2ex4',
                                exRest: 2,
                                exResults: ['', '', '', '', '', '', '', '']
                            },
                            {
                                exName: 'd2ex5',
                                exRest: 1,
                                exResults: ['', '', '', '', '', '', '', '']
                            },
                            {
                                exName: 'd2ex6',
                                exRest: 1,
                                exResults: ['', '', '', '', '', '', '', '']
                            },
                            {
                                exName: 'd1ex7',
                                exRest: 1,
                                exResults: ['', '', '', '', '', '', '', '']
                            }
                        ]
                    },
                    {
                        day: 'Day 3',
                        exercises: [
                            {
                                exName: 'd3ex1',
                                exRest: 2,
                                exResults: ['', '', '', '', '', '', '', '']
                            },
                            {
                                exName: 'd3ex2',
                                exRest: 2,
                                exResults: ['', '', '', '', '', '', '', '']
                            },
                            {
                                exName: 'd3ex3',
                                exRest: 1,
                                exResults: ['', '', '', '', '', '', '', '']
                            },
                            {
                                exName: 'd3ex4',
                                exRest: 2,
                                exResults: ['', '', '', '', '', '', '', '']
                            },
                            {
                                exName: 'd3ex5',
                                exRest: 1,
                                exResults: ['', '', '', '', '', '', '', '']
                            },
                            {
                                exName: 'd3ex6',
                                exRest: 1,
                                exResults: ['', '', '', '', '', '', '', '']
                            },
                            {
                                exName: 'd1ex7',
                                exRest: 1,
                                exResults: ['', '', '', '', '', '', '', '']
                            }
                        ]
                    }
                ]
            }
        ];
    }

    getWorkoutsFromLS() {
        return JSON.parse(localStorage.getItem('workouts')) || this.defaultWorkouts && Workouts.setWorkoutsToLS(this.defaultWorkouts);
    }

    static setWorkoutsToLS(workouts) {
        localStorage.setItem('workouts', JSON.stringify(workouts));
    }
}

export default Workouts;