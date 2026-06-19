# GH-200 GitHub Actions Certification Roadmap

## Overview
This roadmap is designed to help you prepare for the GH-200 GitHub Actions certification and become proficient in designing, implementing, securing, and troubleshooting GitHub Actions workflows in production.

It covers:
- GitHub Actions fundamentals
- Workflow syntax and event triggers
- CI/CD pipeline design and implementation
- Workflow commands, variables, secrets, and environments
- Reusable workflows and composite actions
- Self-hosted runners and runner management
- Security best practices for GitHub Actions
- Artifact management and dependency caching
- Container-based workflows and Docker integration
- Deployment automation for cloud platforms and Kubernetes
- GitHub Packages and release automation
- Monitoring, troubleshooting, and workflow optimization

---

## 1. Certification Objectives
The GH-200 exam typically tests your ability to:
- Understand GitHub Actions architecture and features
- Author and maintain YAML workflow definitions
- Use event triggers and conditional execution
- Implement CI/CD pipelines with jobs and steps
- Manage secrets, variables, environments, and approvals
- Reuse workflows, actions, and composite actions
- Configure self-hosted and container-based runners
- Apply security best practices and access controls
- Manage artifacts, caches, and dependency workflows
- Deploy applications to cloud platforms and Kubernetes
- Implement release automation and GitHub Packages integration
- Monitor, troubleshoot, and optimize workflow performance

---

## 2. Beginner-to-Advanced Learning Path
### Stage 1: Fundamentals
- Learn GitHub Actions basics and workflow anatomy
- Understand repositories, branches, and workflow files
- Explore triggers: `push`, `pull_request`, `schedule`, `workflow_dispatch`
- Learn job structure, steps, actions, and runners
- Practice with simple CI jobs for build and test

### Stage 2: Workflow Syntax and Events
- Master YAML syntax for GitHub Actions workflows
- Learn event triggers and filters: `paths`, `branches`, `types`
- Use conditional execution with `if`
- Understand workflow execution order and job dependencies
- Build multi-job workflows with `needs`

### Stage 3: CI/CD Pipeline Design
- Design CI pipelines for build, test, lint, and package stages
- Add deployment stages with approvals or environment gates
- Understand matrix builds for parallel testing
- Implement reusable workflows and modular job design

### Stage 4: Variables, Secrets, Environments
- Learn `env`, `secrets`, and `defaults`
- Use `GitHub` context, `github`, `env`, `secrets`, `runner`, and `needs`
- Configure environments, protection rules, and required reviewers
- Practice secrets management and avoid leaking sensitive values

### Stage 5: Reusable Workflows and Composite Actions
- Create reusable workflow templates with `workflow_call`
- Share workflows across repositories
- Build composite actions for reusable step groups
- Learn action metadata and inputs/outputs

### Stage 6: Runners and Self-Hosted Management
- Explore GitHub-hosted runners vs self-hosted runners
- Install and configure self-hosted runners on Linux, Windows, or macOS
- Manage runner labels, scalability, and updates
- Understand runner security, isolation, and maintenance

### Stage 7: Security Best Practices
- Apply least privilege for secrets and access tokens
- Use repository and environment access controls
- Audit workflows and review action sources
- Use Dependabot and security scanning for actions
- Avoid unsafe `run` commands and untrusted action inputs

### Stage 8: Artifacts and Caching
- Use `actions/upload-artifact` and `actions/download-artifact`
- Store build outputs, test reports, and release assets
- Implement dependency caching with `actions/cache`
- Cache package managers, Docker layers, and build artifacts
- Learn caching strategies and cache key design

### Stage 9: Container-Based Workflows
- Use Docker containers as job runners with `container`
- Run steps inside custom container images
- Build and push container images from workflows
- Integrate Docker Hub, GitHub Container Registry, or other registries

### Stage 10: Deployment Automation
- Deploy to cloud providers: AWS, Azure, Google Cloud
- Use official provider actions and CLI tools
- Deploy to Kubernetes and GitHub-managed environments
- Automate release creation and environment promotion

### Stage 11: GitHub Packages and Releases
- Publish packages to GitHub Packages
- Integrate package versioning into workflows
- Automate release notes, tags, and GitHub Releases
- Use `actions/create-release` and release asset upload

### Stage 12: Monitoring and Optimization
- Inspect workflow runs and logs
- Use workflow summaries, annotations, and debug mode
- Optimize job execution time and concurrency
- Use replay, rerun failed jobs, and artifact retention

---

## 3. 4–6 Week Study Plan
### Week 1: GitHub Actions Fundamentals
- Day 1: Read GitHub Actions overview and architecture
- Day 2: Create first workflow for build/test on `push`
- Day 3: Explore workflow file structure and runner types
- Day 4: Practice branch and path filtering triggers
- Day 5: Learn contexts, expressions, and `if`
- Day 6: Study basic actions from marketplace
- Day 7: Review and document what you learned

### Week 2: Workflow Syntax, Events, and CI/CD Basics
- Day 1: Deep dive YAML syntax and workflow events
- Day 2: Build a CI workflow with multiple jobs
- Day 3: Add matrix builds for version testing
- Day 4: Implement artifacts and test result upload
- Day 5: Study job dependencies with `needs`
- Day 6: Practice workflow debugging and log analysis
- Day 7: Review the week and refine workflows

### Week 3: Variables, Reusable Workflows, and Actions
- Day 1: Learn `env`, `secrets`, and workflow inputs
- Day 2: Implement reusable workflows and shared templates
- Day 3: Build a composite action for common steps
- Day 4: Practice using `workflow_call` in a separate repo
- Day 5: Study advanced contexts and outputs
- Day 6: Learn about action metadata and `action.yml`
- Day 7: Review reusable workflows and refactor examples

### Week 4: Runners, Security, and Caching
- Day 1: Study GitHub-hosted vs self-hosted runners
- Day 2: Set up a local self-hosted runner and run jobs
- Day 3: Build workflow security best practices checklist
- Day 4: Implement secrets, environment protection, and approvals
- Day 5: Learn artifact upload/download and caching strategies
- Day 6: Practice cache key design and restore behaviors
- Day 7: Review and document security findings

### Week 5: Containers, Deployments, and Releases
- Day 1: Create container-based workflows and custom images
- Day 2: Build a Docker image and push it with a workflow
- Day 3: Automate deployment to a cloud platform (AWS/Azure/GCP)
- Day 4: Deploy to Kubernetes with a sample manifest
- Day 5: Create release automation and package publishing
- Day 6: Practice GitHub Packages and release asset uploads
- Day 7: Review deployment workflows and identify improvements

### Week 6: Monitoring, Optimization, and Exam Prep
- Day 1: Study workflow monitoring, logs, and annotations
- Day 2: Practice troubleshooting failed workflows
- Day 3: Optimize sample pipelines for speed and reliability
- Day 4: Take mock exams or practice questions
- Day 5: Review weak topics and revisit complex workflows
- Day 6: Create a consolidated study summary
- Day 7: Relax and do a final review of key concepts

> If you prefer a shorter 4-week plan, compress the weeks by combining related topics and increasing daily practice intensity.

---

## 4. Hands-on Exercises
- Create a workflow to automatically build and test a Node.js or Python app on `push`
- Add matrix testing for multiple versions of Node.js/Python
- Publish a package or Docker image on successful merge to `main`
- Build a reusable workflow used by two repositories
- Create a composite action for linting and testing steps
- Set up a self-hosted runner in a VM or cloud instance
- Secure repositories using environment protection and secrets
- Cache dependencies for npm, pip, Maven, or Gradle builds
- Deploy an app to AWS ECS, Azure App Service, or Google Cloud Run
- Deploy a sample app to Kubernetes from a workflow
- Automate release notes and asset upload with `actions/create-release`

---

## 5. Real-World Project Ideas
- Multi-service monorepo pipeline with build, test, and deploy stages
- Release automation for a library with package publishing and semantic versioning
- Kubernetes deployment pipeline with image build, scan, and rollout
- Self-hosted runner setup for internal tooling and custom hardware
- Hybrid CI/CD workflow using both GitHub-hosted and self-hosted runners
- Security validation pipeline with secret scanning and policy enforcement
- Artifact retention workflow for build reports and release assets

---

## 6. Common Exam Topics and Focus Areas
- Workflow triggers and event filtering
- `jobs`, `steps`, `runs-on`, and `needs`
- Contexts and expressions (`github`, `env`, `secrets`, `needs`)
- `workflow_call`, reusable workflows, and composite actions
- `actions/cache`, cache keys, and restore strategies
- Self-hosted runner setup and runner labels
- Environment protection rules and required reviewers
- Secrets usage, safe handling, and scoping
- Deployment workflows and cloud provider actions
- Artifact upload/download, retention, and storage
- Docker container jobs and GitHub Container Registry integration
- Troubleshooting failed jobs and optimizing workflow runtime

> Pay special attention to workflow security, reusable workflows, caching, and deployment automation, as these are high-value exam and production topics.

---

## 7. Sample Workflow Examples
### Basic CI workflow
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
      - name: Upload test artifact
        uses: actions/upload-artifact@v4
        with:
          name: test-results
          path: test-results/**
```

### Reusable workflow example
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

### Composite action example
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

### Self-hosted runner job example
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

### Deployment automation example
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

---

## 8. Recommended Resources
### Official documentation
- GitHub Actions docs: https://docs.github.com/actions
- Workflow syntax: https://docs.github.com/actions/using-workflows/workflow-syntax-for-github-actions
- Security hardening guide: https://docs.github.com/actions/security-guides
- Reusable workflows: https://docs.github.com/actions/using-workflows/reusing-workflows
- Self-hosted runners: https://docs.github.com/actions/hosting-your-own-runners

### Labs and practice
- GitHub Actions quickstarts in official docs
- GitHub Actions labs on GitHub Learning Lab
- Code repositories with example workflows (GitHub Actions examples)
- Practice with `actions/cache`, `upload-artifact`, and cloud provider actions

### Video and courses
- GitHub Actions video tutorials on GitHub Learning Lab and YouTube
- Official GitHub universe session recordings for Actions
- Training courses on modern CI/CD and DevOps platforms

### Practice resources
- GitHub Actions marketplace examples
- Community blogs and GitHub repos with CI/CD workflows
- Sample projects by GitHub and DevOps communities
- Mock exam question banks and quiz platforms for GitHub Actions

---

## 9. Mock Exam Preparation Strategies
- Build a personal checklist of exam objectives and map each one to a hands-on exercise
- Take practice quizzes once a week for the first 3 weeks
- Time yourself while reading workflow examples and identifying issues
- Review official docs and practise YAML syntax for workflow definitions
- Recreate failing workflows and troubleshoot root causes
- Practice answering scenario-based questions for deployment and security
- Use a study log to document what you learned and which topics need reinforcement

### Revision tips
- Review sample workflows daily during the final week
- Revisit workflow events, contexts, and condition expressions
- Practice with reusable workflows and composite actions until they feel natural
- Focus on security, secrets, and environment protection every day
- Keep a list of common YAML pitfalls and GitHub Action gotchas
- Re-run older workflows after small changes to confirm reliability

---

## 10. Production-Ready Focus
To move beyond passing the exam, emphasize:
- Reusable and maintainable workflow design
- Security-first configuration for secrets and environments
- Efficient caching and artifact storage
- Clear logging, annotations, and failure recovery
- Deployment automation with rollback and staging promotion
- Monitoring workflows and using metrics to improve runtime

By following this roadmap, you should gain the confidence needed for the GH-200 certification and strong practical skills in GitHub Actions production workflows.
