import food from '../../../public/images/culinary/food.png';
import drink from '../../../public/images/culinary/drink.jpg';
import userDefault from '../../../public/images/user.png';
import { formReview } from './element-detail';

const Menu = (data) => `${foodMenu(data)}${drinkMenu(data)}`;

const Review = (data) => `
    ${formReview()}
    <hr>
    ${cardReview(data.customerReviews)}
`;

const Description = (data) => `
    <h3>Detail Restoran</h3>
    ${tableDetail(data)}
`;

const foodMenu = (data) => `
    <h3>Menu Makanan</h3>
    <ul class="card-menu">${_cardFood(data.menus.foods , food)}</ul>
`;

const drinkMenu = (data) => `
    <h3>Menu Minuman</h3>
    <ul class="card-menu">${_cardFood(data.menus.drinks , drink)}</ul>
`;

const cardReview = (data) => `
    <h3>Review Pelanggan</h3>
    <ul class="card-review">${_cardReview(data)}</ul>
`;

const tableDetail = data => {
    let category = [];
    for(let item of data.categories){
        category.push(item.name);
    }

    return `
        <table>
            <tr>
                <td>Kategori</td>
                <td>:</td>
                <td>${category.join(', ')}</td>
            </tr>
            <tr>
                <td>Alamat</td>
                <td>:</td>
                <td>${data.address}</td>
            </tr>
            <tr>
                <td>Deskripsi</td>
                <td>:</td>
                <td>${data.description}</td>
            </tr>
        </table>
    `;
}

const _cardFood = (data, image) => {
    let card = '';

    for(let item of data){
        card+= `
        <li>
            <img src="${image}">
            <div>
                <h4>${item.name}</h4>
                <p>Lorem ipsum sit amet dolor ...</p>
                <p>Rp 20.000,-</p>
            </div>
            <button aria-label="Tambah Keranjang"><i class="fas fa-plus"></i><span>Tambahkan</span></button>
        </li>
        `
    }
    return card;
};

const _cardReview = (data) => {
    let card = '';

    for(let item of data){
        card+= `
        <li>
            <img src="${userDefault}">
            <div>
                <p>${item.date}</p>
                <h4>${item.name}</h4>
                <p>${item.review}</p>
            </div>
        </li>
        `
    }
    return card;
}

export { Menu, Review, Description };