import '@fortawesome/fontawesome-free/js/all.js';
import 'regenerator-runtime'; /* for async await transpile */
import pageHome from './views/pages/home';

window.addEventListener('load', () => {
    const main = document.getElementById('main');
    main.innerHTML = pageHome;
})

