# Chapter 10: Mock Exam Preparation

## Mock exam strategy
- Create practice questions for each certification objective.
- Build actual workflows in a sandbox repository and test your reasoning.
- Use scenario-based questions to simulate real exam tasks.
- Time yourself when reviewing workflow examples.

## Revision approach
- Review YAML syntax and workflow event triggers daily.
- Revisit reusable workflows, composite actions, and contexts.
- Practice secrets and environment protection scenarios.
- Study caching and artifact patterns to avoid common mistakes.

## Troubleshooting drills
- Purposefully break a workflow and troubleshoot the error.
- Identify the source of a failed job from logs.
- Validate that secret values are not exposed in logs.
- Practice rerunning a failed workflow with corrected configuration.

## Final review checklist
- Workflow triggers and event filters
- Job design and dependencies
- Reusable workflows and composite actions
- Secrets, environments, and security
- Caching, artifacts, and deployment automation
- Monitoring, debugging, and optimization

## Mock exam cheat sheet
| Practice area | What to cover | Example task |
|---|---|---|
| Triggers | `push`, `pull_request`, manual dispatch, schedule | Write a workflow that runs only on tag creation |
| Conditionals | `if`, context comparisons | Add an `if` condition for PRs to `main` branch only |
| Outputs | step and job outputs | Pass a version string from build to deploy job |
| Secrets | `secrets`, environment protection | Use `secrets` safely in deployment steps |
| Reuse | `workflow_call`, composite actions | Convert repeated steps into reusable logic |
| Debugging | logs, annotations, reruns | Simulate a failed job and fix it |

### Mock exam strategy
- Write small workflows for each exam topic.
- Review log output and error messages from failed runs.
- Time yourself while solving scenario-based tasks.
- Confirm you can explain why each workflow element is used.
