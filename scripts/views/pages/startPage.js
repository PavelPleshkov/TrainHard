import Component from '../../views/component.js';

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
                        <button class="mainBtn mainBtn_weight" type="button">Weigth</button>
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
        // const btnGo = document.createElement('button');
        // btnGo.classList.add('mainInfoBtn');
        // btnGo.setAttribute('type', 'button');
        // btnGo.innerHTML = 'Go';
        // btnGo.addEventListener('click', showPageWorkouts);

        addListenersToMainBtns();
        function addListenersToMainBtns() {
            // const mainBtns = document.getElementsByClassName('mainBtns')[0];

            mainBtns.addEventListener('click', addInfoBlock);
            mainBtns.addEventListener('click', fillInfoBlock);
            mainBtns.addEventListener('click', activateBtn);
        }
        
        function addInfoBlock(e) {
            if (e.target.tagName == 'BUTTON') {
            // if (e.target.tagName == 'BUTTON' || e.target.tagName == 'SPAN') {
                if (main.lastElementChild.classList.contains('mainInfo')) {
                    main.replaceChild(infoBlock, main.lastElementChild)
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
            // console.log('show page 2');
            // location.hash = `/${way}`;
            location.hash = `/workout`;

            // main.innerHTML = `<h2 class="mainWay">${way}</h2>`;
            // main.innerHTML += `${createTableContent()}`;
            // createTableContent();
            // main.appendChild(newTable);
            // window.location.hash += `${way}`;
            
            // if (!main.children[1]) {
            //     main.appendChild(createTableContent());
            // }

            // if (main.children[1] && main.children[1].classList.contains('mainTable')) {
            //     main.replaceChild(createTableContent(), main.children[1]);
            // } else {
            //     main.appendChild(createTableContent());
            // }
            // main.appendChild(createTableContent());
            // main.appendChild(tableFilled);
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
            // let info = `<p class="mainInfoText">${way}</p>
            //     <button class="mainInfoBtn" type="button">Go</button>`;
            let info = `<p class="mainInfoText">${way}</p>`;

            return info;
        }
    }
}

export default StartPage;