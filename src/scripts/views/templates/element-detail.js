import food from '../../../public/images/culinary/food.png';
import drink from '../../../public/images/culinary/drink.jpg';
import userDefault from '../../../public/images/user.png';

// const foodMenu = (data) => `
//     <h3>Menu Makanan</h3>
//     <ul class="card-menu">${_cardFood(data)}</ul>
// `;
const foodMenu = data => {
    console.log(data);
    return `
        <h3>Menu Makanan</h3>
        <ul class="card-menu">${_cardFood(data)}</ul>
    `;
}

const drinkMenu = () => `
    <h3>Menu Minuman</h3>
    <ul class="card-menu">${_cardFood()}</ul>
`;

const formReview = () => `
    <h3>Kirim Masukan</h3>
    ${_form()}
`;

const cardReview = () => `
    <h3>Review Pelanggan</h3>
    <ul class="card-review">${_cardReview()}</ul>
`;

const tableDetail = () => `
    <table>
        <tr>
            <td>Kategori</td>
            <td>:</td>
            <td>Italia, Modern, Jawa</td>
        </tr>
        <tr>
            <td>Alamat</td>
            <td>:</td>
            <td>Jln. Pandeglang no 19</td>
        </tr>
        <tr>
            <td>Deskripsi</td>
            <td>:</td>
            <td>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. ...</td>
        </tr>
    </table>
`;

const _cardFood = (data) => {
    let card = '';

    for(let i = 0; i < 10; i++){
        card+= `
        <li>
            <img src="${food}">
            <div>
                <h4>Jamur Bandel</h4>
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
        <input type="text" name="name" id="name" required>
        <label for="review">Komentar</label>
        <textarea id="review" required></textarea>
        <button type="submit" aria-label="Kirim Pesan Sekarang">Kirim <i class="fas fa-paper-plane"></i></button>
    </form>
`;

const _cardReview = () => {
    let card = '';

    for(let i = 0; i < 3; i++){
        card+= `
        <li>
            <img src="${userDefault}">
            <div>
                <p>12 Januari 2021</p>
                <h4>Rahmat Soleh</h4>
                <p>Lorem ipsum sit amet dolor ...</p>
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