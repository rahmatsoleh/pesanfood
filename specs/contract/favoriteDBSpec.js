import { itActsAsFavoriteModel } from "./favoriteContract";
import FavoriteDB from "../../src/scripts/data/favorite-idb";

describe('Favorite Resto DB Contract Test Implementation', () => {
    afterEach(async () => {
      (await FavoriteDB.getAllResto()).forEach(async (resto) => {
        await FavoriteDB.deleteResto(resto.id);
      });
    });
   
    itActsAsFavoriteModel(FavoriteDB);
});