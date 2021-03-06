import Component from '../component';

import StartPageTemplate from '../../../templates/pages/startPage';

class StartPage extends Component {
    render() {
        return new Promise(resolve => {
            resolve(StartPageTemplate());
        });
    }

    afterRender() {
        this.setActions();
    }

    setActions() {
        const main = document.getElementsByClassName('main')[0];
        const mainBtns = document.getElementsByClassName('main-btns')[0];
        const infoBlock = document.createElement('p');
        let activeBtn;
        let way = localStorage.getItem('way');

        infoBlock.classList.add('main-info');

        mainBtns.addEventListener('click', addInfoBlock);
        mainBtns.addEventListener('click', fillInfoBlock);
        mainBtns.addEventListener('click', activateBtn);

        function addInfoBlock(e) {
            if (e.target.tagName == 'BUTTON') {
                if (main.lastElementChild.classList.contains('main-info')) {
                    main.replaceChild(infoBlock, main.lastElementChild);
                } else {
                    main.appendChild(infoBlock);
                }
            }
        }

        function fillInfoBlock(e) {
            const btnGo = document.createElement('button');

            if (e.target.tagName == 'BUTTON') {
                localStorage.setItem('way', JSON.stringify(e.target.innerHTML));
                way = JSON.parse(localStorage.getItem('way'));
                infoBlock.innerHTML = createInfoText(way);
                btnGo.classList.add('main-info-btn');
                btnGo.setAttribute('type', 'button');
                btnGo.innerHTML = 'Go';
                infoBlock.insertAdjacentElement('beforeend', btnGo);
                btnGo.addEventListener('click', showPageWorkouts);
            }
        }

        function showPageWorkouts() {
            location.hash = '/workout';
        }

        function activateBtn(e) {
            if (e.target.classList.contains('main-btn')) {
                if (activeBtn) {
                    activeBtn.classList.remove('main-btn-active');
                }

                activeBtn = e.target;
                activeBtn.classList.add('main-btn-active');
            }
        }

        function createInfoText(way) {
            return `
            <article>
                <p class="main-info-text">${way} is your choise.</p>
                <p class="main-info-text">You need to see workout.</p>
                <p class="main-info-text">Let's go!</p>
            </article>
            `;
        }
    }
}

export default StartPage;