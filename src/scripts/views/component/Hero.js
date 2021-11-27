import '../../../styles/hero.scss';

class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <div class="hero">
                <div class="hero-text">
                    <span class="top-slogan"><p>Butuh makan diantar cepat ?</p></span>
                    <span class="main-slogan"><p>Pengiriman Makanan Dari Resto Terdekat</p></span>
                    <span class="bottom-slogan"><p>makan jadi nikmat dengan pengiriman yang cepat</p></span>
                    <button aria-label="Pesan Sekarang" class="btn-order">Pesan Sekarang</button>
                </div>
            </div>
        `;

    document.querySelector('.btn-order').onclick = this._order;
  }

  _order() {
    const hero = document.querySelector('.hero');
    window.scrollTo(0, hero.clientHeight);
  }
}

customElements.define('hero-element', Hero);