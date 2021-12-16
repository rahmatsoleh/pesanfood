import swal from 'sweetalert';
import API_ENDPOINT from '../globals/api-endpoint';
import NotificationHelper from './notification-helper';
import { createLikeButton, createLikedButton } from '../views/templates/template-creator';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, favoriteResto, resto }) {
    this._likeButtonContainer = likeButtonContainer;
    this._resto = resto;
    this._favoriteResto = favoriteResto;

    await this._renderButton();
  },
   
  async _renderButton() {
    const { id } = this._resto;
   
    if (await this._isRestoExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },
   
  async _isRestoExist(id) {
    const resto = await this._favoriteResto.getResto(id);
    return !!resto;
  },
   
  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButton();
   
    const likeButton = document.querySelector('#like-button');

    likeButton.addEventListener('click', async () => {
      await this._favoriteResto.putResto(this._resto);
      swal('Success', `${this._resto.name} berhasil ditambahkan ke halaman favorite`, 'success');
      this._renderButton();
      NotificationHelper.sendNotification({
        title: `${this._resto.name} ditambahkan ke halaman favorite`,
        options: {
          body: this._resto.description,
          image: API_ENDPOINT.PICTURE_SM(this._resto.pictureId),
        },
      });
    });
  },
   
  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButton();
   
    const likeButton = document.querySelector('#like-button');
    
    likeButton.addEventListener('click', async () => {
      await this._favoriteResto.deleteResto(this._resto.id);
      swal('Success', `${this._resto.name} telah dihapus dihalaman favorite`);
      this._renderButton();
    });
  },
};
   
export default LikeButtonInitiator;