import swal from 'sweetalert';
import FavoriteDB from '../data/favorite-idb';
import { createLikeButton, createLikedButton } from '../views/templates/template-creator';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, resto }) {
    this._likeButtonContainer = likeButtonContainer;
    this._resto = resto;

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
    const resto = await FavoriteDB.getResto(id);
    return !!resto;
  },
   
  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButton();
   
    const likeButton = document.querySelector('#like-button');

    likeButton.addEventListener('click', async () => {
      await FavoriteDB.putResto(this._resto);
      swal('Success', `${this._resto.name} berhasil ditambahkan ke halaman favorite`, 'success');
      this._renderButton();
    });
  },
   
  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButton();
   
    const likeButton = document.querySelector('#like-button');
    
    likeButton.addEventListener('click', async () => {
      await FavoriteDB.deleteResto(this._resto.id);
      swal('Success', `${this._resto.name} telah dihapus dihalaman favorite`);
      this._renderButton();
    });
  },
};
   
export default LikeButtonInitiator;