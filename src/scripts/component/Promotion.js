import '../../styles/promotion.scss';
import { restaurants } from '../../DATA.json';

class Promotion extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render(){
        let dataPromotion = '';
        for(let promo of restaurants){
            dataPromotion += `
            <section>
                <a href="#">
                    <div class="picture">
                        <img src="${promo.pictureId}" alt="${promo.name}"/>
                    </div>
                    <div class="desc-promotion">
                        <h3 tabindex="0">${promo.name}</h3>
                        <p class="location" tabindex="0">${promo.city}</p>
                    </div>
                <a/>
            </section>
            `;
        }

        this.innerHTML = `
            <article class="promotion">
                <h2 tabindex="0">Sedang Promo</h2>
                <div class="data-promotion">
                    ${dataPromotion}
                <div>
            </article>
        `;
    }

}

customElements.define('promo-food', Promotion);