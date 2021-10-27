import '../../styles/Restaurant.scss';
import { restaurants } from '../../DATA.json';

class Restaurant extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    dataCard(data){
        let card = '';
        for(let item of data){
            card += `
            <div class="card">
                <div class="image">
                    <img src="${item.pictureId}" alt="${item.name}">
                </div>
                <h3>${item.name}</h3>
                <p class="location"><span><i class="fas fa-map-marker-alt"></i></span> ${item.city}</p>
                <p class="describe">${item.description}</p>
                <p class="rating"><span><i class="fas fa-star"></i></span> ${item.rating}</p>
                <a href="#">Lihat Restoran</a>
            </div>
            `;
        }

        return card;
    }

    render(){
        this.innerHTML = `
            <article class="restaurant">
                <h2>Temukan Restoran</h2>
                <div class="explore">
                    ${this.dataCard(restaurants)}
                </div>
            </article>
        `
    }
}

customElements.define('explore-resto', Restaurant);