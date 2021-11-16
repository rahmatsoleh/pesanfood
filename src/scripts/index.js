import '@fortawesome/fontawesome-free/js/all.js';
import 'regenerator-runtime'; /* for async await transpile */
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

