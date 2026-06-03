# Node.js (Vanilla) with BrowserStack SDK

Run plain Node.js + Selenium tests on BrowserStack using the [BrowserStack Node SDK](https://www.npmjs.com/package/browserstack-node-sdk).
The SDK reads `browserstack.yml`, patches `selenium-webdriver` at import time, and runs your tests across
the configured platforms — no capabilities or hub URL in your test code.

> This is the SDK sample. The original capability-based sample (`conf.js`, `tests/single.js`,
> `tests/parallel.js`, `tests/local.js`) is preserved unchanged for reference.

## Prerequisites

- A [BrowserStack](https://www.browserstack.com/) account (username + access key)
- Node.js 16+

## Setup

```bash
git clone https://github.com/browserstack/node-js-selenium-browserstack.git
cd node-js-selenium-browserstack
npm install
```

Configure credentials — either edit `userName` / `accessKey` in `browserstack.yml`, or set env vars:

```bash
export BROWSERSTACK_USERNAME="YOUR_USERNAME"
export BROWSERSTACK_ACCESS_KEY="YOUR_ACCESS_KEY"
```

## Run Sample Test

The e-commerce add-to-cart flow on bstackdemo.com, across all platforms in `browserstack.yml`:

```bash
npm run sample-test
# or directly:
npx browserstack-node-sdk node ./sdk-tests/sample-test.js
```

## Run Local Test

Verifies the BrowserStack Local tunnel (`browserstackLocal: true` starts it automatically):

```bash
npm run sample-local-test
# or directly:
npx browserstack-node-sdk node ./sdk-tests/local-test.js
```

## Notes

- View results on the [BrowserStack Automate dashboard](https://automate.browserstack.com/).
- Product features (Accessibility, Percy, Observability) are toggled via `browserstack.yml` keys —
  `testObservability: true` is enabled by default.
