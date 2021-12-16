import '../../../styles/component/banner.scss';

class Banner extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <article class="banner">
                <section class="slider">
                    <div class="slide">
                        <img src="images/slider/hero-image_1.jpg" alt="">
                    </div>
                    <div class="slide">
                        <img src="images/slider/hero-image_2.jpg" alt="">
                    </div>
                    <div class="slide">
                        <img src="images/slider/hero-image_3.jpg" alt="">
                    </div>
                    <div class="slide">
                        <img src="images/slider/hero-image_4.jpg" alt="">
                    </div>
                </section>
                <section class="banner-post">
                    <p>PesanFood</p>
                    <p>Tersedia Lebih dari 1000 Restoran untuk anda yang ingin cari makan</p>
                </section>
            </article>
        `;
  }
}

customElements.define('banner-hero', Banner);