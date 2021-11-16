import '../component/Skip';
import '../component/App-bar';
import '../component/BurgerMenu';
import '../component/Navbar';
import '../component/Hero';
import '../component/VariousCulinary';
import '../component/Category';
import '../component/Banner';
import '../component/Restaurant';
import '../component/ButtonTop';
import '../component/Footer';
import { render } from 'node-sass';

// const Home = `
//     <hero-element></hero-element>
//     <various-culinary></various-culinary>
//     <category-food></category-food>
//     <banner-hero></banner-hero>
//     <explore-resto></explore-resto>
// `;
const Home = {
    async render(){
        return `
            <hero-element></hero-element>
            <various-culinary></various-culinary>
            <category-food></category-food>
            <banner-hero></banner-hero>
            <explore-resto></explore-resto>
        `;
    },

    async afterRender(){

    }
}

export default Home;