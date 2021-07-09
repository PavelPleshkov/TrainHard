import {parseRequestURL} from './helpers/utils.js';

import Header from './views/partials/header.js';
import Footer from './views/partials/footer.js';

import StartPage from './views/pages/startPage.js';
import Workout from './views/pages/workout.js';
import Timer from './views/pages/timer.js';

const Routes = {
    '/': StartPage,
    '/workout': Workout,
    '/workout/timer': Timer
};

function router() {
    const headerContainer = document.getElementsByClassName('header-container')[0],
          mainContainer = document.getElementsByClassName('main-container')[0],
          footerContainer = document.getElementsByClassName('footer-container')[0],
          header = new Header(),
          footer = new Footer();

    header.render().then(html => {
        headerContainer.innerHTML = html;
        header.afterRender();
    });

    const request = parseRequestURL(),
        parsedURL = `/${request.resource || ''}${request.action ? `/${request.action}` : ''}`,
        page = new Routes[parsedURL]();

    page.render().then(html => {
        mainContainer.innerHTML = html;
        page.afterRender();
    });

    footer.render().then(html => footerContainer.innerHTML = html);
}

window.addEventListener('load', router);
window.addEventListener('load', () => localStorage.setItem('way', JSON.stringify('Weight')));
window.addEventListener('hashchange', router);