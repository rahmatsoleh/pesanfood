import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator';
import FavoriteDB from '../../src/scripts/data/favorite-idb';

const createLikeButtonPresenterWithResto = async (resto) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#like-button'),
    favoriteResto: FavoriteDB,
    resto,
  });
};

export { createLikeButtonPresenterWithResto };