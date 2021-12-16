import '../../../styles/component/category.scss';

class Category extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  async render() {        
    this.innerHTML = `
            <article class="category">
                <h2 tabindex="0">Kategori Makanan</h2>
                <div class="data-category">
                    <section>
                        <a href="#/category/italia">
                            <div class="picture">
                                <img src="images/categori/italia.jpg" alt="Italia"/>
                            </div>
                            <div class="desc-category">
                                <h3 tabindex="0">Italia</h3>
                                <p>Makanan citra rasa khas Italia</p>
                            </div>
                        <a/>
                    </section>
                    <section>
                        <a href="#/category/sunda">
                            <div class="picture">
                                <img src="images/categori/sunda.jpg" alt="Sunda"/>
                            </div>
                            <div class="desc-category">
                                <h3 tabindex="0">Sunda</h3>
                                <p>Makanan citra rasa khas dari Sunda</p>
                            </div>
                        <a/>
                    </section>
                    <section>
                        <a href="#/category/modern">
                            <div class="picture">
                                <img src="images/categori/modern.jpg" alt="Modern"/>
                            </div>
                            <div class="desc-category">
                                <h3 tabindex="0">Modern</h3>
                                <p>Makanan modern masa kini</p>
                            </div>
                        <a/>
                    </section>
                    <section>
                        <a href="#/category/jawa">
                            <div class="picture">
                                <img src="images/categori/jawa.jpg" alt="Jawa"/>
                            </div>
                            <div class="desc-category">
                                <h3 tabindex="0">Jawa</h3>
                                <p>Makanan citra rasa khas dari Jawa</p>
                            </div>
                        <a/>
                    </section>
                    <section>
                        <a href="#/category/sop">
                            <div class="picture">
                                <img src="images/categori/sop.jpg" alt="Sop"/>
                            </div>
                            <div class="desc-category">
                                <h3 tabindex="0">Soup</h3>
                                <p>Makanan Soup yang lezat</p>
                            </div>
                        <a/>
                    </section>
                    <section>
                        <a href="#/category/bali">
                            <div class="picture">
                                <img src="images/categori/bali.jpg" alt="Bali"/>
                            </div>
                            <div class="desc-category">
                                <h3 tabindex="0">Bali</h3>
                                <p>Makanan citra rasa khas dari Bali</p>
                            </div>
                        <a/>
                    </section>
                    <section>
                        <a href="#/category/spanyol">
                            <div class="picture">
                                <img src="images/categori/spanyol.jpg" alt="Spanyol"/>
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