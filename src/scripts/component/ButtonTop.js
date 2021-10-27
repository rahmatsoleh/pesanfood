import '../../styles/buttontop.scss';

class ButtonTop extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
            <button class="btn-top"><i class="fas fa-angle-double-up"></i></button>
        `;

        window.addEventListener('scroll', this.scrollFunction);
        document.querySelector('.btn-top').addEventListener('click', this.scrollToTop);
    }

    scrollFunction(){
        if(document.documentElement.scrollTop > 400){
            document.querySelector('.btn-top').style.display = 'block';
        } else {
            document.querySelector('.btn-top').style.display = 'none';
        }
    }

    scrollToTop(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
}

customElements.define("button-top", ButtonTop);