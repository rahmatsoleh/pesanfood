import '@fortawesome/fontawesome-free/js/all.js';
import 'regenerator-runtime'; /* for async await transpile */
import './views/component/Skip';
import './views/component/App-bar';
import './views/component/BurgerMenu';
import './views/component/Navbar';
import './views/component/Hero';
import './views/component/VariousCulinary';
import './views/component/Category';
import './views/component/Banner';
import './views/component/Restaurant';
import './views/component/ButtonTop';
import './views/component/Footer';
import App from './views/app';

const app = new App({
    content : document.getElementById('main'),
})

window.addEventListener('hashchange', () => {
    app.renderPage();
});

window.addEventListener('load', () => {
    app.renderPage();
});

