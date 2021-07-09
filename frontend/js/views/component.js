import {parseRequestURL} from '../helpers/utils';

import Workouts from '../models/workouts';

class Component {
    constructor() {
        this.request = parseRequestURL();
        this.workouts = new Workouts().getWorkoutsFromLS();
    }

    afterRender() {}
}

export default Component;