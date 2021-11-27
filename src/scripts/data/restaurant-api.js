import swal from 'sweetalert';
import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantApi {
  static async list() {
    const data = await this._sendRequest(API_ENDPOINT.LIST);
    return data.restaurants;
  }
    
  static async detail(id) {
    const data = await this._sendRequest(API_ENDPOINT.DETAIL(id));
    return data.restaurant;
  }

  static async search(query) {
    const data = await this._sendRequest(API_ENDPOINT.SEARCH(query));
    return data.restaurants;
  }

  static async review(body) {
    const loader = document.querySelector('.loader');
    loader.classList.toggle('d-none');

    try {
      const response = await fetch(API_ENDPOINT.REVIEW, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      const responseJson = await response.json();        
      loader.classList.toggle('d-none');

      return responseJson;
    } catch (error) {
      loader.classList.toggle('d-none');
      swal('Upps...', 'Anda terhubung secara offline, Memungkinkan beberapa fitur tidak berfungsi dengan semestinya', 'error');
    }
  }

  static async _sendRequest(url) {
    const loader = document.querySelector('.loader');
    loader.classList.toggle('d-none');
    try {
      const response = await fetch(url);
      const responseJson = await response.json();
      loader.classList.toggle('d-none');
      return responseJson;
    } catch (error) {
      loader.classList.toggle('d-none');
      swal('Upps...', 'Anda terhubung secara offline, Memungkinkan beberapa fitur tidak berfungsi dengan semestinya', 'error');
    }
  }
}

export default RestaurantApi;