import '../../../styles/culinary.scss';
import jus from '../../../public/images/culinary/minuman.jpg';
import bebek from '../../../public/images/culinary/bebek.jpg';
import sosis from '../../../public/images/culinary/sosis.jpg';
import salad from '../../../public/images/culinary/salad.jpg';
import daging from '../../../public/images/culinary/daging.jpg';
import tumis from '../../../public/images/culinary/tumis.jpg';
import kari from '../../../public/images/culinary/kari.jpg';
import roti from '../../../public/images/culinary/roti.jpg';

class VariousCulinary extends HTMLElement {
  constructor() {
    super();
    this.data = [
      {
        img: jus,
        title: 'Jus',
      },
      {
        img: bebek,
        title: 'Bebek',
      },
      {
        img: sosis,
        title: 'Sosis',
      },
      {
        img: salad,
        title: 'Salad',
      },
      {
        img: daging,
        title: 'Daging',
      },
      {
        img: tumis,
        title: 'Tumis',
      },
      {
        img: kari,
        title: 'Kari',
      },
      {
        img: roti,
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