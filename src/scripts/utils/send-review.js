import swal from 'sweetalert';
import RestaurantApi from '../data/restaurant-api';
import viewDesktop from '../views/templates/detail-desktop';
import { Review } from '../views/templates/detail-mobile';

const sendReview = async (element, id) => {
  const name = element.querySelector('input').value;
  const review = element.querySelector('textarea').value;
  const body = { id, name, review };
  const result = await RestaurantApi.review(body);
    
  if (result.error) {
    swal('Error !', `${result.message}`, 'error');
    element.reset();
    return;
  } else {
    swal('Terima Kasih', 'Kritik dan Komentar dapat meningkatkan kualitas pelayanan kami', 'success');
    element.reset();
    _afterSend(id);
    return;
  }
};

const _afterSend = async (id) => {
  const restaurant = await RestaurantApi.detail(id);
  const contentDetail = document.querySelector('.content-detail');
  const contentDesktop = document.querySelector('.content-desktop');

  contentDetail.innerHTML = Review(restaurant);
  contentDesktop.innerHTML = viewDesktop(restaurant);
};

export default sendReview;