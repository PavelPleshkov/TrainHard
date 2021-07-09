let styleYellow = document.getElementById('yellow-style');
let styleRed;
const head = document.getElementsByTagName('head')[0];
const title = head.getElementsByTagName('title')[0];

function changeTheme() {
    if (styleYellow) {
        styleYellow.remove();
        styleYellow = null;
        title.insertAdjacentHTML('beforebegin', '<link id="red-style" rel="stylesheet" href="styles/styleRed.css">');
        styleRed = document.getElementById('red-style');
    } else if (styleRed) {
        styleRed.remove();
        styleRed = null;
        title.insertAdjacentHTML('beforebegin', '<link id="yellow-style" rel="stylesheet" href="styles/style.css">');
        styleYellow = document.getElementById('yellow-style');
    }
}

export default changeTheme;