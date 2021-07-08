import Component from '../../views/component.js';

import changeTheme from './colorTheme.js';

class Header extends Component {
    render() {
        const resource = this.request.resource;
        const action = this.request.action;

        return new Promise(resolve => {
            // resolve(`
            //      <header class="header">                    
            //          <a class="header__link ${!resource ? 'active' : ''}" href="/#/">
            //              About
            //          </a>
            //          <a class="header__link ${resource === 'tasks' ? 'active' : ''}" href="/#/tasks">
            //              Tasks List
            //          </a>                                            
            //     </header>
            // `);
            resolve(`
            <header class="header">
                <div class="theme">
                    <span class="smile fa fa-smile-o fa-spin"></span>
                    <button id="btnColorTheme" type="button">Change theme</button>
                </div>
                <a class="linkRefresh" href="">Refresh app</a>
                <nav class="headerNav">
                    <a href="/#/" class="headerNavLink linkStartPage ${!resource ? 'headerNavLink__active' : ''}">Start Page</a>
                    <a href="/#/workout" class="headerNavLink linkWorkouts ${(resource === 'workout' && action !== 'timer') ? 'headerNavLink__active' : ''}">Workouts</a>
                    <a href="/#/workout/timer" class="headerNavLink linkWorkouts ${action === 'timer' ? 'headerNavLink__active' : ''}">Timer</a>
                </nav>
            </header>
            `
        )});
    }

    afterRender() {
        this.setActions();
    }

    setActions() {
        const btnColorTheme = document.getElementById('btnColorTheme');
        const linkRefresh = document.getElementsByClassName('linkRefresh')[0];
        
        btnColorTheme.addEventListener('click', changeTheme);
        linkRefresh.addEventListener('click', refreshApp);
        function refreshApp(e) {
            // e.preventDefault();
            // location.hash = '';
            
            localStorage.clear();
        }
    }
}

export default Header;