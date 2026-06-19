# Chapter 5: Hands-On Exercises

## Core exercises
- Build a simple GitHub Actions workflow to run unit tests on `push`.
- Add a `pull_request` trigger and validate PR changes.
- Create a matrix job for multiple runtime versions.
- Upload build artifacts and download them in a later job.
- Use `actions/cache` to cache dependencies.

## Intermediate exercises
- Create a reusable workflow and call it from another workflow.
- Build a composite action for linting and testing.
- Use `workflow_call` inputs and secrets.
- Set up a self-hosted runner and execute a workflow on it.
- Store secrets and environment variables securely.

## Advanced exercises
- Build a container-based workflow using a custom Docker image.
- Deploy an application to AWS, Azure, or GCP.
- Deploy a sample app to Kubernetes from a workflow.
- Automate versioned releases and GitHub Packages publishing.
- Add monitoring, logging, and workflow summary outputs.

## Practical validation
- Share your workflows with a peer or mentor for review.
- Simulate a failure and fix a workflow run.
- Document each workflow’s purpose and design.

## Exercise cheat sheet and snippets
| Pattern | Syntax | Example | Notes |
|---|---|---|---|
| Basic push workflow | `on: push` | `on: push` | Start with simple CI coverage |
| Matrix build | `strategy.matrix` | `node-version: [18, 20]` | Test multiple versions concurrently |
| Artifact upload | `actions/upload-artifact@v4` | `name: test-results` | Preserve build/test outputs |
| Reusable workflow call | `uses: ./.github/workflows/reusable-ci.yml` | `with:
  node-version: 20` | Share common workflow patterns |
| Step output | `id`, `echo "... >> $GITHUB_OUTPUT"` | `steps.set-version.outputs.version` | Pass values to later steps |
| Cross-job output | `needs.build.outputs.tag` | `${{ needs.build.outputs.tag }}` | Share job results across workflow |

### Example snippets
- Simple push workflow:
  ```yaml
  on: push
  jobs:
    test:
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v4
        - run: npm install
        - run: npm test
  ```
- Matrix job pattern:
  ```yaml
  strategy:
    matrix:
      node-version: [18, 20]
  ```
- Upload artifact snippet:
  ```yaml
  - uses: actions/upload-artifact@v4
    with:
      name: test-results
      path: test-results/**
  ```
- Reusable workflow call pattern:
  ```yaml
  jobs:
    call-reusable:
      uses: ./.github/workflows/reusable-ci.yml
      with:
        node-version: 20
  ```
- Set output snippet:
  ```yaml
  - name: Set output
    id: set-version
    run: echo "version=1.2.3" >> $GITHUB_OUTPUT
  ```
