import '../component/Hero';
// import '../../../styles/favorite.scss';
import FavoriteDB from '../../data/favorite-idb';
import { cardResto } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
            <hero-element></hero-element>
            <article class="favorite">
              <h2>Restaurant Favorit</h2>
              <div class="list-favorite"></div>
            </article>
        `;
  },

  async afterRender() {
    const favorites = await FavoriteDB.getAllResto();
    const listFavorite = document.querySelector('.list-favorite');

    // favorites.forEach((data) => console.log(data));

    if (favorites.length > 0) {
      favorites.forEach((data) => {
        listFavorite.innerHTML += cardResto(data);
      });
    } else {
      listFavorite.innerHTML = '<p class="nothing">Daftar Restorant Favorit Masih Kosong</p>';
    }
  },
};

export default Favorite;