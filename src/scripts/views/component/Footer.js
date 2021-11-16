import '../../../styles/footer.scss';

class Footer extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
            <p>PesanFood &copy; Copyright 2021<p> 
            <p>Rahmat Soleh | Front End Web Developer</p>
        `
    }
}

customElements.define('footer-text', Footer);