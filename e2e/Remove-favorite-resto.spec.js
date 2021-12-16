Feature('Remove Favorite Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Remove a favorite restaurant', ({ I }) => {
  I.wait(5);
  I.seeElement('.card');
  I.click(locate('.card a').first());
  I.wait(5);
  I.seeElement('#like-button');
  I.wait(5);
  I.waitForClickable('#like-button');
  I.seeElement('.swal-button-container button');
  I.click('.swal-button-container button');

  I.amOnPage('/#/favorite');

  I.seeElement('.list-favorite');
  I.click(locate('.list-favorite .card').first());
  I.wait(5);
  I.seeElement('#like-button');
  I.wait(5);
  I.waitForClickable('#like-button');

  I.seeElement('.swal-button-container button');
  I.click('.swal-button-container button');

  I.amOnPage('/#/favorite');
  I.see('Daftar Restorant Favorit Masih Kosong', '.nothing');
});