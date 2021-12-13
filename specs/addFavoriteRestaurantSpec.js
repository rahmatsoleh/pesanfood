import FavoriteDB from "../src/scripts/data/favorite-idb";
import * as TestFactories from './helpers/testFactories';

describe('Add favorite restaurant', () => {
    const addLikeButton = () => {
        document.body.innerHTML = '<div id="like-button"></div>';
    }

    const idRestaurant = { id : 'rqdv5juczeskfw1e867'};

    beforeEach(() => {
        addLikeButton();
    })

    it('should show the like favorite button when the restaurant has not been add before', async () => {
        await TestFactories.createLikeButtonPresenterWithResto(idRestaurant);

        expect(document.querySelector('[aria-label="Add to Favorite"]'))
        .toBeTruthy();
    });

    it('should not show the unlike favorite button when the restaurant has not been added before', async () => {
        await TestFactories.createLikeButtonPresenterWithResto(idRestaurant);

        expect(document.querySelector('[aria-label="Unlike to Favorite"]'))
        .toBeFalsy();
    });

    it('should be able to add favorite restaurant', async () => {
        await TestFactories.createLikeButtonPresenterWithResto(idRestaurant);

        document.querySelector('#like-button').dispatchEvent(new Event('click'));
        const favoriteResto = await FavoriteDB.getResto('rqdv5juczeskfw1e867');

        expect(favoriteResto).toEqual({ id: 'rqdv5juczeskfw1e867' });
        
        FavoriteDB.deleteResto('rqdv5juczeskfw1e867');
    });

    it('should not add a restaurant again when its already liked', async () => {
        await TestFactories.createLikeButtonPresenterWithResto(idRestaurant);
       
        // Tambahkan film dengan ID 1 ke daftar film yang disukai
        await FavoriteDB.putResto({ id: 'rqdv5juczeskfw1e867'});
        // Simulasikan pengguna menekan tombol suka film
        document.querySelector('#like-button').dispatchEvent(new Event('click'));
        // tidak ada film yang ganda
        expect(await FavoriteDB.getAllResto()).toEqual([{ id: 'rqdv5juczeskfw1e867' }]);
       
        FavoriteDB.deleteResto('rqdv5juczeskfw1e867');
    });

    it('should not add a restaurant when it has no id', async () => {
        await TestFactories.createLikeButtonPresenterWithResto({});
       
        document.querySelector('#like-button').dispatchEvent(new Event('click'));
       
        expect(await FavoriteDB.getAllResto()).toEqual([]);
    });
});