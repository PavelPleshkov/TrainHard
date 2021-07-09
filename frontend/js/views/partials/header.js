import Component from '../component.js';

import changeTheme from './colorTheme.js';

class Header extends Component {
    render() {
        const resource = this.request.resource;
        const action = this.request.action;

        return new Promise(resolve => {
            resolve(`
                <header class="header">
                    <div class="theme">
                        <span class="smile fa fa-smile-o fa-spin"></span>
                        <button id="btn-color-theme" type="button">Change theme</button>
                    </div>
                    <a class="link-refresh" href="">Refresh app</a>
                    <nav class="header-nav">
                        <a href="/#/" class="header-nav-link ${!resource ? 'header-nav-link__active' : ''}">Start Page</a>
                        <a href="/#/workout" class="header-nav-link ${(resource === 'workout' && action !== 'timer') ? 'header-nav-link__active' : ''}">Workouts</a>
                        <a href="/#/workout/timer" class="header-nav-link ${action === 'timer' ? 'header-nav-link__active' : ''}">Timer</a>
                    </nav>
                </header>
            `);
        });
    }

    afterRender() {
        this.setActions();
    }

    setActions() {
        const btnColorTheme = document.getElementById('btn-color-theme');
        const linkRefresh = document.getElementsByClassName('link-refresh')[0];

        btnColorTheme.addEventListener('click', changeTheme);
        linkRefresh.addEventListener('click', refreshApp);

        function refreshApp() {
            localStorage.clear();
        }
    }
}

export default Header;