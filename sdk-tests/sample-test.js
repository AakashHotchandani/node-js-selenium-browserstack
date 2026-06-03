const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

// BrowserStack SDK sample test — e-commerce add-to-cart flow on bstackdemo.com.
// The BrowserStack SDK patches selenium-webdriver's Builder.build() at import time and injects
// capabilities + the hub URL from browserstack.yml, so NO caps and NO hub URL are set here.
// Run with:  npx browserstack-node-sdk node ./sdk-tests/sample-test.js
async function run() {
  const driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://bstackdemo.com/');

    // name of the first product on the page
    const productText = await driver
      .findElement(By.xpath('//*[@id="1"]/p'))
      .getText();

    // click that product's "Add to cart"
    await driver.findElement(By.xpath('//*[@id="1"]/div[4]')).click();

    // wait for the cart pane to render
    await driver.wait(until.elementLocated(By.className('float-cart__content')), 10000);

    // name of the product shown in the cart
    const productCartText = await driver
      .findElement(By.xpath('//*[@id="__next"]/div/div/div[2]/div[2]/div[2]/div/div[3]/p[1]'))
      .getText();

    assert.strictEqual(productCartText, productText);
    console.log('Sample test passed: cart product matches the added product.');
  } finally {
    await driver.quit();
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
