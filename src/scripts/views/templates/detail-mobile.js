import CONFIG from '../../globals/config';
import { foodMenu, drinkMenu, formReview, cardReview, tableDetail } from './element-detail';

// const Menu = () => `${foodMenu(data)}${drinkMenu(data)}`;
const Menu = data => {
    const restaurant = data;
    return `${foodMenu(restaurant)}${drinkMenu()}`;
}

const Review = () => `
    ${formReview()}
    <hr>
    ${cardReview()}
`;

const Description = () => `
    <h3>Detail Restoran</h3>
    ${tableDetail()}
`;

export { Menu, Review, Description };