import '../../../styles/category.scss';
import italia from '../../../public/images/categori/italia.jpg';
import sunda from '../../../public/images/categori/sunda.jpg';
import spanyol from '../../../public/images/categori/spanyol.jpg';
import bali from '../../../public/images/categori/bali.jpg';
import jawa from '../../../public/images/categori/jawa.jpg';
import sop from '../../../public/images/categori/sop.jpg';
import modern from '../../../public/images/categori/modern.jpg';

class Category extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    async render(){        
        this.innerHTML = `
            <article class="category">
                <h2 tabindex="0">Kategori Makanan</h2>
                <div class="data-category">
                    <section>
                        <a href="#">
                            <div class="picture">
                                <img src="${italia}" alt="Italia"/>
                            </div>
                            <div class="desc-category">
                                <h3 tabindex="0">Italia</h3>
                                <p>Makanan citra rasa khas Italia</p>
                            </div>
                        <a/>
                    </section>
                    <section>
                        <a href="#">
                            <div class="picture">
                                <img src="${sunda}" alt="Sunda"/>
                            </div>
                            <div class="desc-category">
                                <h3 tabindex="0">Sunda</h3>
                                <p>Makanan citra rasa khas dari Sunda</p>
                            </div>
                        <a/>
                    </section>
                    <section>
                        <a href="#">
                            <div class="picture">
                                <img src="${modern}" alt="Modern"/>
                            </div>
                            <div class="desc-category">
                                <h3 tabindex="0">Modern</h3>
                                <p>Makanan modern masa kini</p>
                            </div>
                        <a/>
                    </section>
                    <section>
                        <a href="#">
                            <div class="picture">
                                <img src="${jawa}" alt="Jawa"/>
                            </div>
                            <div class="desc-category">
                                <h3 tabindex="0">Jawa</h3>
                                <p>Makanan citra rasa khas dari Jawa</p>
                            </div>
                        <a/>
                    </section>
                    <section>
                        <a href="#">
                            <div class="picture">
                                <img src="${sop}" alt="Sop"/>
                            </div>
                            <div class="desc-category">
                                <h3 tabindex="0">Soup</h3>
                                <p>Makanan Soup yang lezat</p>
                            </div>
                        <a/>
                    </section>
                    <section>
                        <a href="#">
                            <div class="picture">
                                <img src="${bali}" alt="Bali"/>
                            </div>
                            <div class="desc-category">
                                <h3 tabindex="0">Bali</h3>
                                <p>Makanan citra rasa khas dari Bali</p>
                            </div>
                        <a/>
                    </section>
                    <section>
                        <a href="#">
                            <div class="picture">
                                <img src="${spanyol}" alt="Spanyol"/>
                            </div>
                            <div class="desc-category">
                                <h3 tabindex="0">Spanyol</h3>
                                <p>Makanan citra rasa khas dari Spanyol</p>
                            </div>
                        <a/>
                    </section>
                <div>
            </article>
        `;
    }
}

customElements.define('category-food', Category);