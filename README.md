# Fusion Energy Progress Dashboard

A static dashboard tracking global fusion energy development with honest assessment of progress, uncertainties, and viability. No hype, no cynicism — just the evidence.

**Live site:** [joelfirenze.github.io/fusion-sg-dashboard](https://joelfirenze.github.io/fusion-sg-dashboard/)

## What's Inside

- **Overview** — Current state of fusion energy with progress comparison across all tracked projects
- **16 Major Projects** — Public and private efforts worldwide (ITER, SPARC, JET, STEP, and more) with milestones, uncertainties, and progress meters
- **Key Assumptions** — Critical assumptions fusion rests on (physics, engineering, resources, policy, economics) and their validation status
- **Viability Signals** — Evidence for and against near-term fusion viability, each paired with a caveat
- **Waste & Safety** — How fusion compares to fission on waste, safety, and environmental impact
- **Timeline Scenarios** — Four scenarios from optimistic to skeptical with reasoning
- **Funding Landscape** — Private investment and government funding trends

## Running Locally

```bash
open index.html          # open directly in browser
npx serve .              # local dev server
```

No build step, no dependencies, no frameworks — pure HTML + CSS + vanilla JS.

## Updating Data

```bash
node update.js           # interactive menu for all update types
node update.js --list    # list all project IDs
```

The updater creates a timestamped backup before saving.

## Data Sources

ITER Organization, DOE Office of Science, UKAEA, FIA Global Fusion Industry Report, Nuclear Fusion journal, Nature/Science publications, and company press releases. All projected dates are aspirational targets, not predictions. Confidence assessments are subjective estimates.
