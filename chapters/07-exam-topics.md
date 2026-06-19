# Chapter 7: Exam Topics

## High-priority exam topics
- Workflow triggers: `push`, `pull_request`, `workflow_dispatch`, `schedule`
- Event filters: `branches`, `paths`, `types`, `tags`
- Job structure: `runs-on`, `steps`, `needs`, `timeout-minutes`
- Contexts and expressions: `github`, `env`, `secrets`, `runner`, `needs`
- Reusable workflows: `workflow_call`, inputs, secrets, and outputs
- Composite actions: `action.yml`, inputs, outputs, and step reuse
- Caching: `actions/cache`, cache keys, restore behavior
- Artifacts: `actions/upload-artifact`, `actions/download-artifact`
- Self-hosted runners and runner labels
- Environment protection and required reviewers
- Security best practices for secrets and third-party actions
- Deployment workflows for cloud and Kubernetes
- Release automation and GitHub Packages
- Troubleshooting and workflow optimization

## Areas to review closely
- Conditional workflow syntax and `if` expressions
- Cross-job communication and outputs
- Secrets scoping and environment-specific secrets
- Runner selection and self-hosted runner maintenance
- Artifact retention and cache invalidation
- Workflow debugging techniques and log analysis

## Common exam focus
- Scenario-based questions about pipeline design
- Security review and risk mitigation
- Correct use of reusable workflows and actions
- Performance improvements like caching and parallel jobs
- Deployment and release automation best practices

## Exam topic cheat sheet
| Topic | Key concepts | Example | Study goal |
|---|---|---|---|
| Triggers | `push`, `pull_request`, `workflow_dispatch`, `schedule` | `on: pull_request` | Know how workflows start |
| Filters | `branches`, `paths`, `types`, `tags` | `paths: [src/**]` | Run only relevant workflows |
| Contexts | `github`, `env`, `secrets`, `needs`, `runner` | `${{ github.ref }}` | Access runtime metadata |
| Conditionals | `if` expressions | `if: ${{ github.event_name == 'push' }}` | Control execution paths |
| Reuse | `workflow_call`, composite actions | `uses: ./.github/actions/lint-test` | Reuse workflows and logic |
| Security | `permissions`, `environments`, secret masking | `permissions: contents: read` | Harden workflow permissions |
| Artifacts | upload/download | `actions/upload-artifact@v4` | Preserve outputs across jobs |
| Caching | cache keys, restore behavior | `key: ${{ runner.os }}-npm-${{ hashFiles('**/package-lock.json') }}` | Optimize build times |

## Exam preparation tip
Use the topics above to create a checklist and test yourself by writing a small workflow for each concept.
