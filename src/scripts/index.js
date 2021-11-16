import '@fortawesome/fontawesome-free/js/all.js';
import 'regenerator-runtime'; /* for async await transpile */
import Home from './views/pages/home';
// import App from './views/app';

window.addEventListener('load', () => {
    const main = document.getElementById('main');
    main.innerHTML = Home;
})

// window.addEventListener('hashchange', () => {
//     App.renderPage();
// });

// window.addEventListener('load', () => {
//     App.renderPage();
// });

