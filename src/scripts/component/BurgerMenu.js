import '../../styles/burger-menu.scss';

class BurgerMenu extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
        <div class="menu-btn">
            <div class="menu-btn__burger"></div>
        </div>
        `;

        document.querySelector('.menu-btn').addEventListener('click', this.menuOpen);
    }

    menuClose(){
        const menuBtn = document.querySelector('.menu-btn');
        const nav = document.querySelector('nav');

        menuBtn.classList.remove('open');
        nav.classList.remove('open');
    }

    menuOpen(event){
        const menuBtn = document.querySelector('.menu-btn');
        const nav =document.querySelector('nav');

        menuBtn.classList.toggle('open');
        nav.classList.toggle('open');
        event.stopPropagation();

        document.body.addEventListener('click', event => {
            menuBtn.classList.remove('open');
            nav.classList.remove('open');
            event.stopPropagation();
        })
    }
}

customElements.define('burger-menu', BurgerMenu);