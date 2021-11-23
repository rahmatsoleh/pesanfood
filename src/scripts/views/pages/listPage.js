import UrlParser from "../../routes/url-parser";
import RestaurantApi from "../../data/restaurant-api";
import { cardResto } from '../templates/template-creator';

const ListPage = {

    async render(){
        document.documentElement.scrollTop = 0;

        return `
            <hero-element></hero-element>
            <article class="search-culinary">
                <h2>Aneka restaurant</h2>
                <div class="main-culinary"></div>
            </article>
        `;
    },

    async afterRender(){
        const restaurant = await RestaurantApi.list();
        const mainCulinar = document.querySelector('.main-culinary');
        
        restaurant.forEach(data => {
            mainCulinar.innerHTML += cardResto(data);
        });
    }
}

export default ListPage;