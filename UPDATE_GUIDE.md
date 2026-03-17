# Fusion Energy Dashboard - Update Guide

## How to Update the Data

All dashboard data lives in a single file: `data/fusion-data.js`

### To update:

1. Open `data/fusion-data.js` in any text editor
2. Find the relevant section (projects, assumptions, signals, etc.)
3. Modify the data following the existing structure
4. Update the `lastUpdated` field at the top of the file
5. Refresh the browser

### Data Sections

| Section | What to update | When |
|---------|---------------|------|
| `projects` | Milestones, status, funding | When a project announces progress |
| `assumptions` | Confidence levels, validation status | When new experimental results are published |
| `viabilitySignals` | Add new positive/negative signals | When significant developments occur |
| `wasteSafety` | Safety data, material choices | When new safety studies are published |
| `timelineScenarios` | Probability estimates, dates | Annually or after major shifts |
| `funding` | Investment amounts | When new funding rounds are announced |

### Adding a New Project

Copy an existing project entry and modify:

```javascript
{
  id: "unique_id",
  name: "Project Name",
  country: "Country",
  type: "Tokamak/Stellarator/FRC/ICF/etc.",
  sector: "private" or "government",
  approach: "Technical description",
  description: "Overview",
  founded: 2020,
  funding: "$100M+",
  status: "Current status",
  milestones: [
    { year: 2023, event: "Description", achieved: true },
    { year: 2026, event: "Future target", achieved: false, confidence: "medium" }
  ],
  keyMetrics: { /* key-value pairs */ },
  uncertainties: ["List of uncertainties"],
  sources: ["source1", "source2"]
}
```

### Adding a New Viability Signal

```javascript
{
  signal: "Short title",
  date: "Month Year",
  significance: "high" | "medium" | "low",
  detail: "Detailed description",
  caveat: "What counterbalances this signal"
}
```

## Running the Dashboard

Simply open `index.html` in any web browser. No build process or server required.

For local development with live reload:
```bash
npx serve .
```

## Key Sources to Monitor for Updates

- **Fusion Industry Association**: fusionindustryassociation.org (annual industry report)
- **ITER Organization**: iter.org
- **DOE Office of Science**: science.energy.gov/fes
- **UKAEA**: ukaea.uk
- **Nuclear Fusion journal**: iopscience.iop.org/journal/0029-5515
- **Company press releases**: Individual company websites
- **FEC proceedings**: IAEA Fusion Energy Conference papers
