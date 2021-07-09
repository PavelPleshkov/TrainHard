import Component from '../component.js';

class StartPage extends Component {
    render() {
        return new Promise(resolve => {
            resolve(`
            <main class="main">
                <div class="mainWrapper">
                    <h1 class="mainTitle">Train hard</h1>
                    <section class="mainContent">
                        <p>Choose your way</p>
                    </section>
                    <nav class="mainBtns">
                        <button class="mainBtn mainBtn_weight" type="button">Weight</button>
                        <button class="mainBtn mainBtn_force" type="button">Force</button>
                        <button class="mainBtn mainBtn_burn" type="button">Burning</button>
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
        const mainBtns = document.getElementsByClassName('mainBtns')[0];
        const infoBlock = document.createElement('p');
        infoBlock.classList.add('mainInfo');
        let activeBtn;
        let way;

        mainBtns.addEventListener('click', addInfoBlock);
        mainBtns.addEventListener('click', fillInfoBlock);
        mainBtns.addEventListener('click', activateBtn);

        function addInfoBlock(e) {
            if (e.target.tagName == 'BUTTON') {
                if (main.lastElementChild.classList.contains('mainInfo')) {
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
            btnGo.classList.add('mainInfoBtn');
            btnGo.setAttribute('type', 'button');
            btnGo.innerHTML = 'Go';
            infoBlock.insertAdjacentElement('beforeend', btnGo);
            btnGo.addEventListener('click', showPageWorkouts);
        }

        function showPageWorkouts() {
            location.hash = '/workout';
        }

        function activateBtn(e) {
            if (e.target.classList.contains('mainBtn')) {
                if (activeBtn) {
                    activeBtn.classList.remove('mainBtnActive');
                }

                activeBtn = e.target;
                activeBtn.classList.add('mainBtnActive');
            }
        }

        function createInfoText(way) {
            let info = `<p class="mainInfoText">${way}</p>`;

            return info;
        }
    }
}

export default StartPage;