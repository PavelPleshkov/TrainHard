import Component from '../../views/component.js';

class Footer extends Component {
    render() {
        return new Promise(resolve => {
            resolve(`
                <footer class="footer">
                    <p class="copyrights">
                        Copyrights &copy; 2021
                    </p>
                    <p class="owner">
                        PP
                    </p>
                </footer>
            `);
        });
    }
}

export default Footer;