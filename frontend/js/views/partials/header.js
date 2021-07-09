import Component from '../component';

import HeaderTemplate from '../../../templates/partials/header';

import changeTheme from './colorTheme';

class Header extends Component {
    render() {
        const resource = this.request.resource;
        const action = this.request.action;

        return new Promise(resolve => {
            resolve(HeaderTemplate({
                isStartPage: !resource,
                isWorkoutPage: (resource === 'workout' && action !== 'timer'),
                isTimerPage: (action === 'timer')
            }));
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