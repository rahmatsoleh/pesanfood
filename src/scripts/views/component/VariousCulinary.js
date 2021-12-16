import '../../../styles/component/culinary.scss';

class VariousCulinary extends HTMLElement {
  constructor() {
    super();
    this.data = [
      {
        img: 'images/culinary/minuman.jpg',
        title: 'Jus',
      },
      {
        img: 'images/culinary/bebek.jpg',
        title: 'Bebek',
      },
      {
        img: 'images/culinary/sosis.jpg',
        title: 'Sosis',
      },
      {
        img: 'images/culinary/salad.jpg',
        title: 'Salad',
      },
      {
        img: 'images/culinary/daging.jpg',
        title: 'Daging',
      },
      {
        img: 'images/culinary/tumis.jpg',
        title: 'Tumis',
      },
      {
        img: 'images/culinary/kari.jpg',
        title: 'Kari',
      },
      {
        img: 'images/culinary/roti.jpg',
        title: 'Roti',
      },
    ];
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <article class="culinary">
                <h2 tabindex="0">Aneka Kuliner</h2>
                <div class="various">
                    ${this._categories(this.data)}
                </div>
                <a href="/#/list" class="btn-view-all" tabindex="0">Lihat Semua</a>
            </article>
        `;
  }

  _categories(data) {
    let card = '';
    for (let item of data) {
      card += `
            <section>
                <a href="#/culinary/${item.title.toLowerCase()}">
                    <div class="zoom-image">
                        <img src="${item.img}" alt="${item.title}"/>
                    </div>
                    <h3 tabindex="0">${item.title}</h3>
                </a>
            </section>
            `;
    }

    return card;
  }
}

customElements.define('various-culinary', VariousCulinary);