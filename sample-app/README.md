# sample-app

Minimal Node.js sample app for practicing GitHub Actions and running tests.

Quick start

```bash
# from repository root
cd sample-app
npm install
npm test
```

What to try

- Modify `src/math.js` and run `npm test` to see tests fail/pass.
- Open `.github/workflows/sample-app-ci.yml` to see the CI workflow.
- Add more tests and experiment with matrix builds and caching.



actions 

```
name: sample-app CI

on:
  push:
    paths:
      - 'sample-app/**'
  pull_request:
    paths:
      - 'sample-app/**'

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Use Node.js
        uses: actions/setup-node@v5
        with:
          node-version: '18'
      - name: Cache node modules
        uses: actions/cache@v4
        with:
          path: ~/.npm
          key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
          restore-keys: |
            ${{ runner.os }}-node-
      - name: Install dependencies
        working-directory: sample-app
        run: npm ci
      - name: Run tests
        working-directory: sample-app
        run: npm test


```