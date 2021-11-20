import UrlParser from "../../routes/url-parser";
import RestaurantApi from "../../data/restaurant-api";

const Detail = {
    async render(){
        return `
            <h2>Detail Page</h2>
        `;
    },

    async afterRender(){
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const restaurant = await RestaurantApi.detail(url.id);
        console.log(restaurant);
    }
}

export default Detail;
