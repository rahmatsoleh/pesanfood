import UrlParser from '../../routes/url-parser';
import RestaurantApi from '../../data/restaurant-api';
import ArticleDetail from '../templates/template-detail';
import viewDesktop from '../templates/detail-desktop';
import sendReview from '../../utils/send-review';
import { Menu, Review, Description } from '../templates/detail-mobile';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import FavoriteDB from '../../data/favorite-idb';

const Detail = {
  async render() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantApi.detail(url.id);
    const detailContent = ArticleDetail(restaurant);
    const contentDesktop = viewDesktop(restaurant);
    document.documentElement.scrollTop = 0;

    return `
            <article class="article-detail">
                ${detailContent}
            </article>
            <article class="content-desktop">
                ${contentDesktop}
            </article>
            <div id="like-button"></div>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantApi.detail(url.id);
    document.querySelector('.content-detail').innerHTML = Menu(restaurant);

    // Event Navigasi
    const navMenu = document.querySelector('.nav-menu');
    const navRating = document.querySelector('.nav-rating');
    const navDesc = document.querySelector('.nav-desc');

    navMenu.addEventListener('click', function () {
      this.classList.add('active');
      navRating.classList.remove('active');
      navDesc.classList.remove('active');

      document.querySelector('.content-detail').innerHTML = Menu(restaurant);
    });

    navRating.addEventListener('click', function () {
      this.classList.add('active');
      const contentDetail = document.querySelector('.content-detail');
      navMenu.classList.remove('active');
      navDesc.classList.remove('active');
      contentDetail.innerHTML = Review(restaurant);

      const submitMobile = contentDetail.querySelector('form');
      submitMobile.addEventListener('submit', function (event) {
        event.preventDefault();
        sendReview(this, url.id);
      });
    });

    navDesc.addEventListener('click', function () {
      this.classList.add('active');
      navRating.classList.remove('active');
      navMenu.classList.remove('active');
      document.querySelector('.content-detail').innerHTML = Description(restaurant);
    });

    // Submit Review
    const btnReview = document.querySelector('.desktop-review form');
    btnReview.addEventListener('submit', function (event) {
      const contentDesktop = document.querySelector('.content-desktop');
      event.preventDefault();
      sendReview(this, url.id);

      contentDesktop.innerHTML = viewDesktop(restaurant);
    });

    // Like Button

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#like-button'),
      favoriteResto: FavoriteDB,
      resto: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        rating: restaurant.rating,
        pictureId: restaurant.pictureId,
        city: restaurant.city,
      },
    });
  },
};

export default Detail;
