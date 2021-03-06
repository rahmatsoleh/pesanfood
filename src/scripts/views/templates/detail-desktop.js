import API_ENDPOINT from '../../globals/api-endpoint';
import { tableDetail, foodMenu, drinkMenu, formReview, cardReview } from './element-detail';

const viewDesktop = (data) => `
    ${_header(data)}
    ${_foodMenu(data)}
    ${_review(data.customerReviews)}
`;

const _header = (data) => `
    <section class="header-desktop">
        <div class="image">
            <picture>
                <source media="(max-width: 720px)" srcset="${API_ENDPOINT.PICTURE_SM(data.pictureId)}">
                <source media="(max-width: 1024px)" srcset="${API_ENDPOINT.PICTURE_MD(data.pictureId)}">
                <source media="(max-width: 1200px)" srcset="${API_ENDPOINT.PICTURE_LG(data.pictureId)}">
                <img src="${API_ENDPOINT.PICTURE_LG(data.pictureId)}" alt="${data.name}">
            </picture>
        </div>
        <div class="info">
            <div class="title-info">
                <div>
                    <h2 tabindex="0">${data.name}</h2>
                    <div class="rate">
                        <p><i class="fas fa-map-marker-alt"></i></i> <span>${data.city}</span></p>
                        <p><i class="fas fa-star"></i><span>${data.rating}</span></p>
                    </div>
                </div>
            </div>
            <hr>
            ${tableDetail(data)}
        </div>
    </section>
`;

const _foodMenu = (data) => `
    <section class="food-menu">
        ${foodMenu(data.menus.foods)}
    </section>
    <section class="food-menu">
        ${drinkMenu(data.menus.drinks)}
    </section>
`;

const _review = (data) => `
    <section class="desktop-review">
        <div class="customer-review">
            ${cardReview(data)}
        </div>
        <div class="form-review">
            ${formReview()}
        </div>
    </section>
`;

export default viewDesktop;