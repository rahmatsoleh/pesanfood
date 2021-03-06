import '../../../styles/component/about.scss';

class About extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  
  render() {
    this.innerHTML = `
              <article class="about">
                <h2>Developer</h2>
                <img src="images/rahmsol.png" alt="">
                <p class="name">Rahmat Soleh</p>
                <p class="email">solehr619@gmail.com</p>
                <a href="https://github.com/rahmatsoleh/pesanfood" target="_blank" rel="noreferrer">Source Code</a>
              </article>
          `;
  }
}

customElements.define('about-page', About);