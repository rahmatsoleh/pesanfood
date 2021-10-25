import '../../styles/header.scss';

class AppBar extends HTMLElement {

    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
            <div>
                <h1>R'Food</h1>
                <burger-menu></burger-menu>
            </div>
        `;
    }
}

customElements.define('app-bar', AppBar);