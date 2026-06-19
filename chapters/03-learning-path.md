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

## Recommended progression
- Start with simple CI builds and test jobs.
- Add release automation and artifact publishing.
- Introduce reusable workflows and composite actions.
- Extend workflows with deployment automation and monitoring.
- Apply hardening and security practices before final review.
