import {parseRequestURL} from './helpers/utils';

import Header from './views/partials/header';
import Footer from './views/partials/footer';

import StartPage from './views/pages/startPage';
import Workout from './views/pages/workout';
import Timer from './views/pages/timer';

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

window.addEventListener('load', () => localStorage.setItem('way', JSON.stringify('Weight')));
module.hot ? module.hot.accept(router()) : window.addEventListener('load', router);
window.addEventListener('hashchange', router);