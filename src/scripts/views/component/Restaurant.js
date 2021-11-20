import '../../../styles/Restaurant.scss';
import RestaurantApi from '../../data/restaurant-api';
import API_ENDPOINT from '../../globals/api-endpoint';

class Restaurant extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    async dataCard(){
        const data = await RestaurantApi.list();

        let card = '';
        for(let item of data){
            let fullDescription = item.description.split('');
            let arrayDesc = [];
            for(let i = 0; i < 44; i++){
                arrayDesc.push(fullDescription[i]);
            }
            arrayDesc.push('...');
            let simpleDesc = arrayDesc.join('');

            card += `
            <div class="card">
                <div class="image">
                    <img src="${API_ENDPOINT.PICTURE_MD(item.pictureId)}" alt="${item.name}">
                </div>
                <h3 tabindex="0">${item.name}</h3>
                <div class="describe">
                    <p class="location"><span><i class="fas fa-map-marker-alt"></i></span> ${item.city}</p>
                    <p class="rating"><span><i class="fas fa-star"></i></span> ${item.rating}</p>
                </div>
                <p class="description">${simpleDesc}</p>
                <a href="#/detail/${item.id}" tabindex="0">Lihat Restoran</a>
            </div>
            `;
        }

        return card;
    }

    async render(){
        this.innerHTML = `
            <article class="restaurant">
                <h2 tabindex="0">Temukan Restoran</h2>
                <div class="explore">
                    ${await this.dataCard()}
                </div>
            </article>
        `
    };
}

customElements.define('explore-resto', Restaurant);