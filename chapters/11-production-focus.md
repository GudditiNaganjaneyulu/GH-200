# Chapter 11: Production Readiness

## Production workflow focus
- Write modular, reusable workflows that can be maintained over time.
- Keep workflows readable with clear names and step descriptions.
- Use secrets and environment protection for all sensitive operations.
- Avoid hard-coding secrets, tokens, or environment-specific values.

## Optimization best practices
- Use caching to reduce build time and improve reliability.
- Run jobs in parallel where possible, while keeping dependencies clear.
- Use `timeout-minutes` to prevent stuck jobs.
- Keep artifact retention limits in mind to reduce storage costs.

## Monitoring and troubleshooting
- Review workflow logs and annotations carefully.
- Use `ACTIONS_STEP_DEBUG` for deeper troubleshooting when needed.
- Add summary outputs for important results.
- Use replay and rerun tools to validate fixes.

## Security in production
- Use least privilege for `GITHUB_TOKEN` and personal access tokens.
- Limit workflow permissions in repository settings.
- Restrict `workflow_run` and `workflow_dispatch` where appropriate.
- Monitor third-party action usage and audit action sources.

## Ongoing maintenance
- Keep action versions pinned to major or minor versions where appropriate.
- Update self-hosted runner software and OS regularly.
- Review workflows after repository or architecture changes.
- Maintain documentation for workflow design and environment dependencies.

## Production readiness cheat sheet
| Domain | Guideline | Example |
|---|---|---|
| Workflow hygiene | Clear names, descriptions, and comments | `name: CI` with meaningful step names |
| Security | Least privilege and secret masking | `permissions: contents: read` |
| Reliability | `timeout-minutes`, retries, stable actions | `timeout-minutes: 30` |
| Observability | Artifacts, logs, summaries | Upload test results and build logs |
| Deployment | Use environments and approvals | `environment: production` |
| Maintenance | Keep action versions updated | `actions/setup-node@v5` |

### Production checklist
- Use environments and approvals for sensitive deployments.
- Keep secrets and tokens out of logs.
- Review workflow permissions and restrict what is needed.
- Add health checks and deploy validation steps.
- Document workflow behavior and update after changes.
