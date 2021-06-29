import {parseRequestURL} from '../helpers/utils.js';

import Workouts from '../models/workouts.js';

class Component {
    constructor() {
        this.request = parseRequestURL();
        this.workouts = new Workouts().getWorkoutsFromLS();
    }

    afterRender() {}
}

export default Component;