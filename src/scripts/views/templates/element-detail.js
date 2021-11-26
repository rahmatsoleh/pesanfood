import { createAvatar } from '@dicebear/avatars';
import * as avatarStyle from '@dicebear/avatars-initials-sprites';

const foodMenu = (data, image) => `
    <h3>Menu Makanan</h3>
    <ul class="card-menu">${_cardFood(data, image)}</ul>
`;

const drinkMenu = (data, image) => `
    <h3>Menu Minuman</h3>
    <ul class="card-menu">${_cardFood(data, image)}</ul>
`;

const formReview = () => `
    <h3>Kirim Masukan</h3>
    ${_form()}
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

const generateAvatar = name => {
    return createAvatar(avatarStyle, {
        seed: name,
        size : 70,
        radius : 70,
    });
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

const _form = () => `
    <form method="post">
        <label for="name">Nama</label>
        <input type="text" name="name" id="name-mobile" required>
        <label for="review">Komentar</label>
        <textarea required></textarea>
        <button type="submit" aria-label="Kirim Pesan Sekarang" class="submit">Kirim <i class="fas fa-paper-plane"></i></button>
    </form>
`;

const _cardReview = (data) => {
    let card = '';

    for(let item of data){
        card+= `
        <li>
            <div>${generateAvatar(item.name)}</div>
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

export { 
    foodMenu, 
    drinkMenu, 
    formReview, 
    cardReview,
    tableDetail
};