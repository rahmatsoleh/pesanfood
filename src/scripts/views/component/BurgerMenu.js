import '../../../styles/component/burger-menu.scss';

class BurgerMenu extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <button class="menu-btn" aria-label="Tombol Navigasi">
            <div class="menu-btn__burger"></div>
        </button>
        `;

    document.querySelector('.menu-btn').addEventListener('click', this.menuOpen);
  }

  menuClose() {
    const menuBtn = document.querySelector('.menu-btn');
    const nav = document.querySelector('nav');

    menuBtn.classList.remove('open');
    nav.classList.remove('open');
  }

  menuOpen(event) {
    const menuBtn = document.querySelector('.menu-btn');
    const nav = document.querySelector('nav');

    menuBtn.classList.toggle('open');
    nav.classList.toggle('open');
    event.stopPropagation();

    document.body.addEventListener('click', (event) => {
      menuBtn.classList.remove('open');
      nav.classList.remove('open');
      event.stopPropagation();
    });
  }
}

customElements.define('burger-menu', BurgerMenu);