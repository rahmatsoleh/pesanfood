import '../../../styles/banner.scss';
import hero1 from '../../../public/images/heros/hero-image_1.jpg';
import hero2 from '../../../public/images/heros/hero-image_2.jpg';
import hero3 from '../../../public/images/heros/hero-image_3.jpg';
import hero4 from '../../../public/images/heros/hero-image_4.jpg';

class Banner extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <article class="banner">
                <section class="slider">
                    <div class="slide">
                        <img src="${hero1}" alt="">
                    </div>
                    <div class="slide">
                        <img src="${hero2}" alt="">
                    </div>
                    <div class="slide">
                        <img src="${hero3}" alt="">
                    </div>
                    <div class="slide">
                        <img src="${hero4}" alt="">
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