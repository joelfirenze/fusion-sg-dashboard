# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

A static (no-build) dashboard tracking global fusion energy progress. Pure HTML + CSS + vanilla JS. No frameworks, no bundlers, no dependencies.

## Running

```bash
open index.html          # open directly in browser
npx serve .              # local dev server with live reload
```

There is no build step, no linter, no test suite. Validate JS syntax with `node -c <file>`.

## Updating Data

```bash
node update.js                    # interactive menu — walks through all update types
node update.js --list             # list all project IDs
```

The updater auto-creates a timestamped backup in `data/backups/` before saving, bumps `lastUpdated`, and writes the modified data back to `data/fusion-data.js`.

## Architecture

**Data-driven rendering**: All content comes from a single data object (`FUSION_DATA`) in `data/fusion-data.js`. The JS app reads this object and renders all 7 dashboard sections into placeholder `<div>` elements defined in `index.html`.

- `data/fusion-data.js` — Single source of truth. Exports `window.FUSION_DATA`. Contains: projects (16), assumptions (9), viability signals, waste/safety data, timeline scenarios, funding landscape, feasibility scores with sub-parameters, critical path items, and progress stage definitions.
- `js/app.js` — Renders all sections by reading `FUSION_DATA`. Uses an IIFE. Section renderers: `renderOverview`, `renderProjects`, `renderAssumptions`, `renderSignals`, `renderWasteSafety`, `renderTimeline`, `renderFunding`. Also contains shared helpers: `renderProgressMeter`, `renderOverviewComparison`.
- `css/styles.css` — All styles. Dark theme using CSS custom properties (`:root` vars). Responsive with `@media (max-width: 768px)`.
- `index.html` — Shell with nav, section containers (`<div id="overview" class="section">`), loads data then app scripts in order.

**Navigation**: Hash-based SPA nav. `nav a` links toggle `.section.active` visibility. Sticky nav bar.

**Expandable UI pattern**: Three toggle functions exposed globally — `toggleExpand` (milestones/uncertainties in project cards), `toggleFeasibility` (feasibility score sub-parameters), `toggleAssumption` (assumption detail drop-downs). All use `max-height` animation on a dropdown div.

**Progress meter**: Each project has a `progress: { stage, pct, note }` field mapped to 8 universal stages (`progressStages` array in data). `renderProgressMeter()` renders a segmented bar; `renderOverviewComparison()` renders a sorted comparison chart of all projects.

## Key Data Structures

When adding a new project, required fields: `id, name, country, type, sector, approach, description, founded, funding, status, progress: {stage, pct, note}, milestones: [{year, event, achieved, ?confidence, ?note}], keyMetrics: {}, uncertainties: [], sources: []`.

`type` determines badge color: tokamak=blue, stellarator=purple, frc/field-reversed=pink, inertial/icf/laser=orange, other=green. `sector` must be `"private"` or `"government"`.

`feasibilityScores[].subParameters[]` each need: `name, score, maxScore, status, detail, evidence, gap`.

## Conventions

- All data updates should bump `lastUpdated` at the top of `fusion-data.js`.
- Every positive claim in the data should have a paired caveat or uncertainty.
- Projected dates should always be flagged as targets, not predictions.
- Progress stage assignments (0-7) are editorial assessments, not self-reported by companies.
