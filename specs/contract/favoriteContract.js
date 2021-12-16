const itActsAsFavoriteModel = (favorite) => {
  it('Should return restaurant that has been added', async () => {
    favorite.putResto({ id: 'rqdv5juczeskfw1e867' });
    favorite.putResto({ id: 's1knt6za9kkfw1e867' });

    expect(await favorite.getResto('rqdv5juczeskfw1e867')).toEqual({ id: 'rqdv5juczeskfw1e867' });
    expect(await favorite.getResto('s1knt6za9kkfw1e867')).toEqual({ id: 's1knt6za9kkfw1e867' });
    expect(await favorite.getResto('abcdefghijklmnopq')).toEqual(undefined);
  });

  it('Should refuse restaurant from being added if it does not have correct property', async () => {
    favorite.putResto({ aProperty: 'property' });

    expect(await favorite.getAllResto()).toEqual([]);
  });

  it('can return all of the restaurants that have been added', async () => {
    favorite.putResto({ id: 'rqdv5juczeskfw1e867' });
    favorite.putResto({ id: 's1knt6za9kkfw1e867' });
     
    expect(await favorite.getAllResto())
      .toEqual([
        { id: 'rqdv5juczeskfw1e867' },
        { id: 's1knt6za9kkfw1e867' },
      ]);
  });

  it('should remove favorite restaurant', async () => {
    favorite.putResto({ id: 'rqdv5juczeskfw1e867' });
    favorite.putResto({ id: 's1knt6za9kkfw1e867' });
    favorite.putResto({ id: 'abcdefghijklmnopq' });
 
    await favorite.deleteResto('rqdv5juczeskfw1e867');
 
    expect(await favorite.getAllResto())
      .toEqual([
        { id: 'abcdefghijklmnopq' },
        { id: 's1knt6za9kkfw1e867' },
      ]);
  });

  it('should handle request to remove a restaurant even though the resto has not been added', async () => {
    favorite.putResto({ id: 'rqdv5juczeskfw1e867' });
    favorite.putResto({ id: 's1knt6za9kkfw1e867' });
    favorite.putResto({ id: 'abcdefghijklmnopq' });
 
    await favorite.deleteResto('abcdefghijklmnopq123');
 
    expect(await favorite.getAllResto())
      .toEqual([
        { id: 'abcdefghijklmnopq' },
        { id: 'rqdv5juczeskfw1e867' },
        { id: 's1knt6za9kkfw1e867' },
      ]);
  });
};

export { itActsAsFavoriteModel };