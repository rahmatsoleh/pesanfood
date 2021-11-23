import '../../../styles/detail.scss';
import { tableDetail,foodMenu, drinkMenu, formReview, cardReview } from './element-detail';

const viewDesktop = () => `
    ${_header()}
    ${_foodMenu()}
    ${_review()}
`;

const _header = () => `
    <section class="header-desktop">
        <div class="image">
            <img src="https://restaurant-api.dicoding.dev/images/medium/25" alt="">
        </div>
        <div class="info">
            <div class="title-info">
                <div>
                    <h2 tabindex="0">Rahmsol Restoku</h2>
                    <div class="rate">
                        <p><i class="fas fa-map-marker-alt"></i></i> <span>Jombang</span></p>
                        <p><i class="fas fa-star"></i><span>5.0</span></p>
                    </div>
                </div>
                <button aria-label="Add to Favorite"><i class="far fa-heart"></i></button>
            </div>
            <hr>
            ${tableDetail()}
        </div>
    </section>
`;

const _foodMenu = () => `
    <section class="food-menu">
        ${foodMenu()}
    </section>
    <section class="food-menu">
        ${drinkMenu()}
    </section>
`;

const _review = () => `
    <section class="desktop-review">
        <div class="customer-review">
            ${cardReview()}
        </div>
        <div class="form-review">
            ${formReview()}
        </div>
    </section>
`;

export default viewDesktop;