# sample-app

Minimal Node.js sample app for practicing GitHub Actions and running tests.

## Quick start

```bash
# from repository root
cd sample-app
npm install
npm test
```

## Run the web app

```bash
cd sample-app
npm start
```

Then open `http://localhost:3000`.

## What to try

- Visit the homepage and confirm the static welcome image loads.
- Check the health endpoint at `http://localhost:3000/health`.
- Add more static pages under `public/`.
- Extend `src/math.js` with more utility functions and test them.
- Add more tests in `sample-app/test/`.
- Update `.github/workflows/sample-app-ci.yml` to run the web tests as part of CI.
