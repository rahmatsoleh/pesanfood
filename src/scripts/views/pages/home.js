import RestaurantApi from '../../data/restaurant-api';

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