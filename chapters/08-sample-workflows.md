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
```
