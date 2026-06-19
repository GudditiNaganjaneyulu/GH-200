# Chapter 3: Learning Path

## Beginner stage
1. Learn the GitHub Actions architecture.
2. Understand workflow anatomy: `name`, `on`, `jobs`, `steps`, `run`, and `uses`.
3. Build a simple workflow triggered by `push` and `pull_request`.
4. Explore GitHub-hosted runners and how jobs execute.

## Intermediate stage
1. Master workflow YAML syntax and event filters.
2. Learn matrix builds and multi-job pipelines.
3. Use contexts and expressions such as `${{ github.event_name }}` and `${{ needs.job.outputs }}`.
4. Practice with secrets, environment variables, and job dependencies.

## Advanced stage
1. Create reusable workflows with `workflow_call`.
2. Build composite actions for shared step sequences.
3. Configure self-hosted runners and manage runner labels.
4. Implement caching, artifact management, and container-based jobs.
5. Deploy to clouds and Kubernetes from GitHub Actions.

## GH-200 GitHub Actions Contexts & Expressions Cheat Sheet
| Context | Syntax | Example Value | Common Use |
|---|---|---|---|
| `github.event_name` | `${{ github.event_name }}` | `push` | Branch logic by trigger type |
| `github.repository` | `${{ github.repository }}` | `octocat/demo-app` | Use repository details in scripts |
| `github.ref` | `${{ github.ref }}` | `refs/heads/main` | Detect branch or tag for deployment |
| `github.sha` | `${{ github.sha }}` | `a1b2c3d...` | Tag images and generate build IDs |
| `github.actor` | `${{ github.actor }}` | `johnsmith` | Identify who triggered the run |
| `inputs` | `${{ inputs.image-name }}` | `my-app` | Pass workflow call inputs into jobs |
| `env` | `${{ env.APP_NAME }}` | `demo` | Reference environment variables |
| `vars` | `${{ vars.AWS_REGION }}` | `eastus` | Use repository or organization variables |
| `secrets` | `${{ secrets.TOKEN }}` | `***` | Access secret values safely |
| `runner.os` | `${{ runner.os }}` | `Linux` | Conditional OS-specific logic |
| `matrix.node` | `${{ matrix.node }}` | `22` | Build multiple variants in matrix jobs |
| `steps` outputs | `${{ steps.build.outputs.tag }}` | `v1.0.0` | Pass values inside same job |
| `needs` outputs | `${{ needs.build.outputs.tag }}` | `v1.0.0` | Share data between jobs |

### Example patterns
- Conditional expression:
  ```yaml
  if: ${{ github.event_name == 'push' && github.ref == 'refs/heads/main' }}
  ```
- Matrix usage:
  ```yaml
  strategy:
    matrix:
      node: [18, 20]
  ```
- Cross-job output example:
  ```yaml
  jobs:
    build:
      runs-on: ubuntu-latest
      outputs:
        build-version: ${{ steps.set-version.outputs.version }}
      steps:
        - id: set-version
          run: echo "version=1.2.3" >> $GITHUB_OUTPUT
    deploy:
      needs: build
      runs-on: ubuntu-latest
      steps:
        - run: echo "Deploying version ${{ needs.build.outputs.build-version }}"
  ```

## Recommended progression
- Start with simple CI builds and test jobs.
- Add release automation and artifact publishing.
- Introduce reusable workflows and composite actions.
- Extend workflows with deployment automation and monitoring.
- Apply hardening and security practices before final review.
