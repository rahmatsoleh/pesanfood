import '../../../styles/detail.scss';
import UrlParser from "../../routes/url-parser";
import RestaurantApi from "../../data/restaurant-api";
import ArticleDetail from "../templates/template-detail";
import viewDesktop from '../templates/detail-desktop';
import { Menu, Review, Description } from '../templates/detail-mobile';

const Detail = {
    async render(){
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const restaurant = await RestaurantApi.detail(url.id);
        const detailContent = ArticleDetail(restaurant);
        const contentDesktop = viewDesktop();
        document.documentElement.scrollTop = 0;

        return `
            <article class="article-detail">
                ${detailContent}
            </article>
            <article class="content-desktop">
                ${contentDesktop}
            </article>
        `;
    },

    async afterRender(){
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const restaurant = await RestaurantApi.detail(url.id);
        document.querySelector('.content-detail').innerHTML = Menu(restaurant);

        // Event Navigasi
        const navMenu = document.querySelector('.nav-menu');
        const navRating = document.querySelector('.nav-rating');
        const navDesc = document.querySelector('.nav-desc');

        navMenu.addEventListener('click', function(){
            this.classList.add('active');
            navRating.classList.remove('active');
            navDesc.classList.remove('active');

            document.querySelector('.content-detail').innerHTML = Menu();
        })

        navRating.addEventListener('click', function(){
            this.classList.add('active');
            navMenu.classList.remove('active');
            navDesc.classList.remove('active');
            document.querySelector('.content-detail').innerHTML = Review();
        })

        navDesc.addEventListener('click', function(){
            this.classList.add('active');
            navRating.classList.remove('active');
            navMenu.classList.remove('active');
            document.querySelector('.content-detail').innerHTML = Description();
        })
    }
}

export default Detail;
