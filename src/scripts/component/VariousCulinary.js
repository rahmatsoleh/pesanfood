import '../../styles/culinary.scss';
import drink from '../../public/images/culinary/minuman.jpg';
import ayam from '../../public/images/culinary/ayam.jpg';
import bakaran from '../../public/images/culinary/bakaran.jpg';
import bakso from '../../public/images/culinary/bakso.jpg';
import cepat from '../../public/images/culinary/cepatsaji.jpg';
import gorengan from '../../public/images/culinary/gorengan.jpg';
import jajanan from '../../public/images/culinary/jajanan.jpg';
import nasi from '../../public/images/culinary/nasi.jpg';
import roti from '../../public/images/culinary/roti.jpg';

class VariousCulinary extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
            <article class="culinary">
                <h2 tabindex="0">Aneka Kuliner</h2>
                <div class="various">
                    <section>
                        <a href="">
                            <div class="zoom-image">
                                <img src="${drink}" alt="Minuman"/>
                            </div>
                            <h3 tabindex="0">Minuman</h3>
                        </a>
                    </section>
                    <section>
                        <a href="">
                            <div class="zoom-image">
                                <img src="${ayam}" alt="Ayam dan Bebek"/>
                            </div>
                            <h3 tabindex="0">Ayam Bebek</h3>
                        </a>
                    </section>
                    <section>
                        <a href="">
                            <div class="zoom-image">
                                <img src="${bakaran}" alt="Bakaran"/>
                            </div>
                            <h3 tabindex="0">Bakaran</h3>
                        </a>
                    </section>
                    <section>
                        <a href="">
                            <div class="zoom-image">
                                <img src="${bakso}" alt="Bakso dan Mie"/>
                            </div>
                            <h3 tabindex="0">Bakso Mie</h3>
                        </a>
                    </section>
                    <section>
                        <a href="">
                            <div class="zoom-image">
                                <img src="${cepat}" alt="Cepat Saji"/>
                            </div>
                            <h3 tabindex="0">Cepat Saji</h3>
                        </a>
                    </section>
                    <section>
                        <a href="">
                            <div class="zoom-image">
                                <img src="${gorengan}" alt="Gorengan"/>
                            </div>
                            <h3 tabindex="0">Gorengan</h3>
                        </a>
                    </section>
                    <section>
                        <a href="">
                            <div class="zoom-image">
                                <img src="${jajanan}" alt="Jajanan"/>
                            </div>
                            <h3 tabindex="0">Jajanan</h3>
                        </a>
                    </section>
                    <section>
                        <a href="">
                            <div class="zoom-image">
                                <img src="${nasi}" alt="Aneka Nasi"/>
                            </div>
                            <h3 tabindex="0">Aneka Nasi</h3>
                        </a>
                    </section>
                    <section>
                        <a href="">
                            <div class="zoom-image">
                                <img src="${roti}" alt="Roti"/>
                            </div>
                            <h3 tabindex="0">Roti</h3>
                        </a>
                    </section>
                </div>
                <a href="" class="btn-view-all" tabindex="0">Lihat Semua</a>
            </article>
        `
    }
}

customElements.define('various-culinary', VariousCulinary);