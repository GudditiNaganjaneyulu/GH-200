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
