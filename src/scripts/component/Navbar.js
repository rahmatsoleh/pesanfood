import '../../styles/navbar.scss';

class Navbar extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="#">Favorite</a></li>
                    <li><a href="">About</a></li>
                </ul>
        `;
    }
}

customElements.define('nav-list', Navbar);