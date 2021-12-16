const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('Show nothing restaurant favorite', ({ I }) => {
  I.see('Daftar Restorant Favorit Masih Kosong', '.nothing');
});

Scenario('Liking One Restaurant', async ({ I }) => {
  I.see('Daftar Restorant Favorit Masih Kosong', '.nothing');
  I.amOnPage('/');
  I.wait(5);
  I.seeElement('.card');

  const firstRestoName = await I.grabTextFrom(locate('.card h3').first());  
  I.click(locate('.card a').first());
  
  I.wait(5);
  I.seeElement('#like-button');
  I.wait(5);
  I.waitForClickable('#like-button');

  I.seeElement('.swal-button-container button');
  I.click('.swal-button-container button');

  I.amOnPage('/#/favorite');

  I.seeElement('.list-favorite .card');
  const likedRestoName = await I.grabTextFrom('.list-favorite .card h3');

  assert.strictEqual(firstRestoName, likedRestoName);
});