import API_ENDPOINT from "../../globals/api-endpoint";

const ArticleDetail = (data) => `
    ${_header(data)}
    ${_navigasi(data)}
    ${_content(data)}
`;

const _header = (data) => `
    <img src="${API_ENDPOINT.PICTURE_MD(data.pictureId)}" alt="${data.name}">
    <div class="header-detail">
        <div class="title-detail">
            <h2>${data.name}</h2>
            <p><i class="fas fa-map-marker-alt"></i><span> ${data.city}</span></p>
        </div>
        <button aria-label="Add to Favorite"><i class="far fa-heart"></i></button>
    </div>
`;

const _navigasi = (data) => `
    <div class="nav-detail">
        <button class="nav-menu active" aria-label="menu">
            <p><i class="fas fa-clipboard-list"></i></p>
            <p>Menu</p>
        </button>
        <button class="nav-rating" aria-label="rating">
            <p><i class="fas fa-star"></i></p>
            <p>Rating ${data.rating}</p
        </button>
        <button class="nav-desc" aria-label="detail">
            <p><i class="fas fa-info-circle"></i></p>
            <p>Detail</p>
        </button>
    </div>
`;

const _content = () => `
    <div class="content-detail"></div>
`;


export default ArticleDetail;