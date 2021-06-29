// const btnColorTheme = document.getElementById('btnColorTheme');
let styleYellow = document.getElementById('yellowStyle');
// const styleRed = document.getElementById('redStyle');
let styleRed;
const head = document.getElementsByTagName('head')[0];
const title = head.getElementsByTagName('title')[0];

// btnColorTheme.addEventListener('click', changeTheme);

function changeTheme(e) {
    if (styleYellow) {
        styleYellow.remove();
        styleYellow = null;
        // head.innerHTML += `<link id="redStyle" rel="stylesheet" href="styles/styleRed.css">`;
        title.insertAdjacentHTML('beforebegin', '<link id="redStyle" rel="stylesheet" href="styles/styleRed.css">');
        styleRed = document.getElementById('redStyle');
    } else if (styleRed) {
        styleRed.remove();
        styleRed = null;
        // head.innerHTML += `<link id="yellowStyle" rel="stylesheet" href="styles/style.css">`;
        title.insertAdjacentHTML('beforebegin', '<link id="yellowStyle" rel="stylesheet" href="styles/style.css">');
        styleYellow = document.getElementById('yellowStyle');
    }
}

// export {changeTheme};
export default changeTheme;