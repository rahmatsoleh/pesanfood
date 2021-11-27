import UrlParser from '../../routes/url-parser';
import RestaurantApi from '../../data/restaurant-api';
import { cardResto } from '../templates/template-creator';

const Category = {

  async render() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    document.documentElement.scrollTop = 0;
        
    return `
            <hero-element></hero-element>
            <article class="search-culinary">
                <h2>Aneka masakan ${url.id}</h2>
                <div class="main-culinary"></div>
            </article>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantApi.search(url.id);
    const mainCulinar = document.querySelector('.main-culinary');
        
    restaurant.forEach((data) => {
      mainCulinar.innerHTML += cardResto(data);
    });
  },
};

export default Category;
