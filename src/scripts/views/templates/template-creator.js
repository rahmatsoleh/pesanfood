import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import API_ENDPOINT from '../../globals/api-endpoint';

const cardResto = (data) => `
    <section>
    <a href="#/detail/${data.id}" class="card">
        <div class="image skeleton-img">
            <img class="lazyload" data-src="${API_ENDPOINT.PICTURE_LG(data.pictureId)}" alt="${data.name}">
        </div>
        <div class="description">
            <div class="title">
                <h3 tabindex="0">${data.name}</h3>
                <p>
                    <i class="fas fa-map-marker-alt"></i> <span>${data.city}</span>
                    <i class="fas fa-star"></i> <span>${data.rating}</span>
                </p>
            </div>
            <div class="info">
                <p>${data.description}</p>
            </div>
        </div>
    </a>
    </section>
`;

const createLikeButton = () => `
    <button aria-label="Add to Favorite"><i class="far fa-heart"></i></button>
`;

const createLikedButton = () => `
    <button aria-label="Unlike to Favorite"><i class="fas fa-heart"></i></button>
`;

export { cardResto, createLikeButton, createLikedButton };

