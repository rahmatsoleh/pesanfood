import FavoriteDB from "../src/scripts/data/favorite-idb";
import * as TestFactories from './helpers/testFactories';

const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="like-button"></div>';
}

const idRestaurant = { id : 'rqdv5juczeskfw1e867'};

describe('Remove A Favorite Restaurant', () => {
    beforeEach( async () => {
        addLikeButtonContainer();
        await FavoriteDB.putResto({ id: 'rqdv5juczeskfw1e867'});
    });

    afterEach( async () => {
        await FavoriteDB.deleteResto('rqdv5juczeskfw1e867');
    });

    it('Should display unlike widget when the restaurant has been liked', async () => {
        await TestFactories.createLikeButtonPresenterWithResto(idRestaurant);

        expect(document.querySelector('[aria-label="Unlike to Favorite"]'))
        .toBeTruthy();
    });

    it('Should not display like widget when the restaurant has been liked', async () => {
        await TestFactories.createLikeButtonPresenterWithResto(idRestaurant);

        expect(document.querySelector('[aria-label="Add to Favorite"]'))
        .toBeFalsy();
    });

    it('Should be able to remove liked restaurant from the list', async () => {
        await TestFactories.createLikeButtonPresenterWithResto(idRestaurant);

        // document.querySelector('[aria-label="Unlike to Favorite"]').dispatchEvent(new Event('click'));
        document.querySelector('#like-button').dispatchEvent(new Event('click'));
        expect(await FavoriteDB.getAllResto()).toEqual([]);
    });

    it('Should not throw error if the unliked restaurant is not in the list', async () => {
        await TestFactories.createLikeButtonPresenterWithResto(idRestaurant);

        // Hapus Dulu Favorite restaurant yang di sukai
        await FavoriteDB.deleteResto('rqdv5juczeskfw1e867');

        // Simulasi pengguna menekan widget
        document.querySelector('#like-button').dispatchEvent(new Event('click'));
        expect(await FavoriteDB.getAllResto()).toEqual([]);
    })
})