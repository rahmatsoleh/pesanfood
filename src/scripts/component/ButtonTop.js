import '../../styles/buttontop.scss';

class ButtonTop extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
            <button class="btn-top" aria-label="Scroll Top"><i class="fas fa-angle-double-up"></i></button>
        `;

        window.addEventListener('scroll', this.scrollFunction);
        document.querySelector('.btn-top').addEventListener('click', this.scrollToTop);
    }

    scrollFunction(){
        const btn = document.querySelector('.btn-top');

        if(document.documentElement.scrollTop > 400){
            btn.style.display = 'block';
        } else {
            btn.style.display = 'none';
        }
    }

    scrollToTop(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        document.querySelector('.skip').focus();
    }
}

customElements.define("button-top", ButtonTop);