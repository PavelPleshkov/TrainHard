import Component from '../component.js';

class StartPage extends Component {
    render() {
        return new Promise(resolve => {
            resolve(`
            <main class="main">
                <div class="main-wrapper">
                    <h1 class="main-title">Train hard</h1>
                    <section class="main-content">
                        <p>Choose your way</p>
                    </section>
                    <nav class="main-btns">
                        <button class="main-btn main-btn_weight" type="button">Weight</button>
                        <button class="main-btn main-btn_force" type="button">Force</button>
                        <button class="main-btn main-btn_burn" type="button">Burning</button>
                    </nav>
                </div>
            </main>
            `);
        });
    }

    afterRender() {
        this.setActions();
    }

    setActions() {
        const main = document.getElementsByClassName('main')[0];
        const mainBtns = document.getElementsByClassName('main-btns')[0];
        const infoBlock = document.createElement('p');
        infoBlock.classList.add('main-info');
        let activeBtn;
        let way;

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
            if (e.target.tagName == 'BUTTON') {
                localStorage.setItem('way', JSON.stringify(e.target.innerHTML));
                way = JSON.parse(localStorage.getItem('way'));
            } else {
                return;
            }

            infoBlock.innerHTML = createInfoText(way);
            const btnGo = document.createElement('button');
            btnGo.classList.add('main-info-btn');
            btnGo.setAttribute('type', 'button');
            btnGo.innerHTML = 'Go';
            infoBlock.insertAdjacentElement('beforeend', btnGo);
            btnGo.addEventListener('click', showPageWorkouts);
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
            let info = `<p class="main-info-text">${way}</p>`;

            return info;
        }
    }
}

export default StartPage;