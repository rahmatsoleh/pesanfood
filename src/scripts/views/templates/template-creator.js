import '../../../styles/find-resto.scss';
import CONFIG from '../../globals/config';

const cardResto = (data) => `
    <section>
    <a href="#/detail/${data.id}" class="card">
        <div class="image">
            <img src="${CONFIG.BASE_URL}/images/medium/${data.pictureId}" alt="${data.name}">
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

const coba = (data) => {
    console.log(data.name);
}

export {cardResto, coba};

