# Chapter 2: Certification Objectives

## Core objectives
The GH-200 certification focuses on these core skills:
- Understanding GitHub Actions architecture and workflow lifecycle
- Authoring YAML workflows with events, jobs, and steps
- Using contexts, expressions, and conditionals
- Managing secrets, variables, environments, and approvals
- Designing CI/CD pipelines that are scalable and maintainable
- Reusing workflows and building composite actions
- Configuring self-hosted runners and runner management
- Applying security best practices for workflows and actions
- Managing artifacts, caches, and dependencies
- Building container-based workflows and Docker integration
- Deploying applications to cloud platforms and Kubernetes
- Automating releases, GitHub Packages, and release assets
- Monitoring, troubleshooting, and optimizing workflow performance

## Why these objectives matter
These topics reflect both exam objectives and real-world production requirements. A strong foundation in these areas helps you pass the exam and implement reliable GitHub Actions in a team setting.

## Exam mindset
When preparing:
- Focus on understanding practical usage, not just syntax
- Practice with real workflows and scenario-based tasks
- Review security, deployment, and troubleshooting topics carefully

## Certification cheat sheet
| Concept | Syntax | Example | Why it matters |
|---|---|---|---|
| Workflow triggers | `on: push` / `on: pull_request` | `on: push:
  branches: [main]` | Define when the workflow runs |
| Job dependency | `needs: build` | `needs: test` | Control execution order and share outputs |
| Conditional execution | `if: ${{ github.event_name == 'push' }}` | `if: ${{ github.ref == 'refs/heads/main' }}` | Execute only when conditions are met |
| Environment values | `env.MY_VAR` | `${{ env.MY_VAR }}` | Pass configuration into steps/jobs |
| Secrets | `secrets.MY_SECRET` | `${{ secrets.GITHUB_TOKEN }}` | Secure credentials and tokens |
| Reusable workflows | `workflow_call` | `uses: ./.github/workflows/reusable.yml` | Share workflow logic across repos |
| Composite actions | `runs: using: composite` | `uses: ./.github/actions/lint-test` | Encapsulate repeated step sequences |
| Caching | `actions/cache@vx` | `key: ${{ runner.os }}-npm-${{ hashFiles('**/package-lock.json') }}` | Speed up repeat builds |
| Artifacts | `actions/upload-artifact@v4` | `name: build-output` | Save workflow outputs for later jobs or downloads |
| Security | `permissions: read-all` | `permissions: contents: read` | Minimize exposed rights and reduce risk |

### Expression and context patterns
- Use `${{ github.event_name }}` to branch logic by trigger type.
- Use `${{ secrets.MY_SECRET }}` for secure values and keep them out of logs.
- Common functions: `contains()`, `startsWith()`, `fromJson()`, `hashFiles()`.
- Use `needs.job.outputs` to pass build metadata between jobs.
