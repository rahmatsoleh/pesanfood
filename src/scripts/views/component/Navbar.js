import '../../../styles/navbar.scss';

class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
                <ul>
                    <li><a href="#/home">Home</a></li>
                    <li><a href="#/favorite">Favorite</a></li>
                    <li><a href="https://github.com/rahmatsoleh/pesanfood" target="_blank" rel="noreferrer">About</a></li>
                </ul>
        `;
  }
}

customElements.define('nav-list', Navbar);