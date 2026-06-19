# Chapter 1: Introduction

## Purpose
This chapter introduces the GH-200 GitHub Actions certification roadmap. It explains what the certification covers and how to use the chapter-based guide.

## What you will learn
- GitHub Actions fundamentals
- Workflow architecture and components
- The difference between repositories, workflows, jobs, and actions
- Why GitHub Actions is important for CI/CD and DevOps

## How to use this guide
- Read each chapter sequentially to build knowledge progressively
- Apply the exercises in the later chapters while you study
- Use the project ideas to build real workflows and validate your understanding
- Refer back to the resources chapter for documentation and labs

## Quick GitHub Actions Cheat Sheet
| Context | Syntax | Example Value | Common Use |
|---|---|---|---|
| `github.event_name` | `${{ github.event_name }}` | `push` | Determine which event triggered the workflow |
| `github.repository` | `${{ github.repository }}` | `octocat/demo-app` | Identify the current repository |
| `github.ref` | `${{ github.ref }}` | `refs/heads/main` | Detect branch or tag in current run |
| `github.sha` | `${{ github.sha }}` | `a1b2c3d...` | Use commit SHA for tagging or caching |
| `github.actor` | `${{ github.actor }}` | `johnsmith` | Reference the triggering user |
| `env` | `${{ env.APP_NAME }}` | `demo` | Access workflow/job environment variables |
| `secrets` | `${{ secrets.TOKEN }}` | `***` | Securely access secret values |
| `runner.os` | `${{ runner.os }}` | `Linux` | Run OS-specific steps or commands |
| `matrix` | `${{ matrix.node }}` | `22` | Use matrix values for build variants |
| `steps` outputs | `${{ steps.build.outputs.tag }}` | `v1.0.0` | Share step-level data within the same job |
| `needs` outputs | `${{ needs.build.outputs.tag }}` | `v1.0.0` | Share outputs between jobs |

### Common workflow building blocks
- `on`: trigger events and filters such as `push`, `pull_request`, `workflow_dispatch`, `schedule`
- `jobs`: `runs-on`, `needs`, `strategy`, `outputs`
- `steps`: `uses`, `run`, `with`, `env`, `id`
- `if`: conditional expressions for jobs and steps
