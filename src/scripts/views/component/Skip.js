import '../../../styles/skip.scss';

class Skip extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
            <a href="#main" class="skip">Skip to content</a>
        `;
    }
}

customElements.define('skip-content', Skip);