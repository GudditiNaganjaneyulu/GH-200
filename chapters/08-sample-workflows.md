# Chapter 8: Sample Workflows

## Basic CI workflow
```yaml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [18, 20]

    steps:
      - uses: actions/checkout@v4
      - name: Use Node.js
        uses: actions/setup-node@v5
        with:
          node-version: ${{ matrix.node-version }}
      - name: Install dependencies
        run: npm install
      - name: Run tests
        run: npm test
      - name: Upload artifacts
        uses: actions/upload-artifact@v4
        with:
          name: test-results
          path: test-results/**
```

## Reusable workflow example
```yaml
# .github/workflows/reusable-ci.yml
name: Reusable CI

on:
  workflow_call:
    inputs:
      node-version:
        required: true
        type: string
    secrets:
      GITHUB_TOKEN:
        required: true

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v5
        with:
          node-version: ${{ inputs.node-version }}
      - run: npm install
      - run: npm test
```

```yaml
# .github/workflows/use-reusable-ci.yml
name: Call Reusable CI

on:
  push:
    branches: [main]

jobs:
  call-reusable:
    uses: ./.github/workflows/reusable-ci.yml
    with:
      node-version: 20
    secrets:
      GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

## Composite action example
```yaml
# .github/actions/lint-test/action.yml
name: Lint and Test
runs:
  using: composite
  steps:
    - name: Checkout code
      uses: actions/checkout@v4
    - name: Setup Node
      uses: actions/setup-node@v5
      with:
        node-version: 20
    - name: Install dependencies
      run: npm install
    - name: Lint code
      run: npm run lint
    - name: Run tests
      run: npm test
```

## Self-hosted runner job example
```yaml
name: Self-Hosted Deployment

on:
  workflow_dispatch:

jobs:
  deploy:
    runs-on: [self-hosted, linux, x64]
    steps:
      - uses: actions/checkout@v4
      - name: Deploy app
        run: ./deploy.sh
```
```

## Deployment automation example
```yaml
name: Deploy to Kubernetes

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: azure/setup-kubectl@v4
      - name: Set up kubectl context
        run: |
          az aks get-credentials --resource-group myRG --name myCluster
      - name: Deploy manifest
        run: kubectl apply -f k8s/deployment.yaml
```

## Sample workflow cheat sheet
| Workflow type | Key elements | Example pattern | Notes |
|---|---|---|---|
| Basic CI | checkout, setup, install, test | `actions/checkout@v4`, `npm test` | Core starting workflow |
| Matrix build | `strategy.matrix` | Node versions, OS combinations | Cross-environment coverage |
| Reusable workflow | `workflow_call`, `uses:` | `.github/workflows/reusable-ci.yml` | Share workflow logic across repos |
| Composite action | `runs: using: composite` | `.github/actions/lint-test/action.yml` | Encapsulate multi-step actions |
| Self-hosted runner | `runs-on: [self-hosted, linux]` | `runs-on: [self-hosted]` | Use custom hardware or tools |
| Deployment | cloud CLI, kubectl, helm | `az aks get-credentials` | Automate production deployments |

### Workflow notes
- Use `id` on steps that set outputs so later steps can reference them.
- Keep action versions pinned to at least major version, e.g. `actions/checkout@v4`.
- Use context values like `${{ github.ref }}` and `${{ github.sha }}` when naming artifacts or images.
```
