const { Builder } = require('selenium-webdriver');
const assert = require('assert');

// BrowserStack SDK local test — verifies the BrowserStack Local tunnel is connected.
// browserstackLocal: true in browserstack.yml makes the SDK start the tunnel automatically.
// Run with:  npx browserstack-node-sdk node ./sdk-tests/local-test.js
async function run() {
  const driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://bs-local.com:45454');
    const title = await driver.getTitle();
    assert.strictEqual(title, 'BrowserStack Local');
    console.log('Local test passed: BrowserStack Local tunnel is reachable.');
  } finally {
    await driver.quit();
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
