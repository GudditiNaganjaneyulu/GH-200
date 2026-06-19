# Chapter 6: Project Ideas

## Real-world project ideas
- Multi-service monorepo pipeline with build, test, and deploy stages.
- Release pipeline for a library that publishes packages and release notes.
- Kubernetes deployment pipeline with image build, security scanning, and rollout.
- Self-hosted runner management setup for internal CI/CD or custom hardware.
- Hybrid workflow using GitHub-hosted and self-hosted runners.
- Secure CI pipeline with secrets gating, environment approval, and branch protections.
- Artifact and dependency caching workflow for faster builds.

## Project structure suggestions
- Create separate workflows for build, test, and deploy.
- Use reusable workflows for shared steps across microservices.
- Include a `docs/` folder for workflow design and decisions.
- Add sample environment files for staging and production.

## Success criteria
- The project builds without manual intervention.
- Tests run automatically on every PR.
- Deployments to staging or production are automated.
- Secrets and environments are managed securely.
- Workflow execution is observable, and failures are easy to troubleshoot.

## Project idea cheat sheet
| Area | Focus | Example | Why it matters |
|---|---|---|---|
| Multi-service pipelines | Modular workflows | Separate build/test/deploy workflows | Easier maintenance and clearer responsibility |
| Reusable workflows | Shared logic | `uses: ./.github/workflows/reusable.yml` | Reduce duplication across projects |
| Security | Secrets and approvals | Use `secrets`, `environments`, `required_reviewers` | Protect deployments and credentials |
| Caching | Dependencies | `actions/cache@v4` with `hashFiles()` | Speed up CI runs and reduce cost |
| Observability | Logs and artifacts | Upload build/test artifacts | Make failures diagnosable and reproducible |
| Runner strategy | GitHub-hosted/self-hosted | `runs-on: [self-hosted, linux]` | Optimize cost and custom hardware use |
