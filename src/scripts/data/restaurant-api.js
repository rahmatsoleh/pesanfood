import API_ENDPOINT from "../globals/api-endpoint";

class RestaurantApi {
    static async list(){
        const response = await fetch(API_ENDPOINT.LIST);
        const responseJson = await response.json();
        return responseJson.restaurants;
    }

    static async detail(id){
        const response = await fetch(API_ENDPOINT.DETAIL(id))
        const responseJson = await response.json();
        return responseJson.restaurant;
    }

    static async search(query){
        const response = await fetch(API_ENDPOINT.SEARCH(query));
        const responseJson = await response.json();
        return responseJson.restaurants;
    }

    static async review(body){
        const response = await fetch(API_ENDPOINT.REVIEW, {
            method : 'POST',
            headers : {
                'Content-type' : 'application/json'
            },
            body : JSON.stringify(body),
        })

        return response.json();
    }
}

export default RestaurantApi;