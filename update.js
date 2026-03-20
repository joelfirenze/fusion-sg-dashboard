#!/usr/bin/env node
/**
 * Fusion Energy Dashboard — Interactive Data Updater
 *
 * Usage:
 *   node update.js                    Interactive menu
 *   node update.js --list             List all project IDs
 *   node update.js --project iter     Jump straight to updating a project
 *   node update.js --signal           Add a viability signal
 *   node update.js --milestone iter   Add a milestone to a project
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const DATA_FILE = path.join(__dirname, 'data', 'fusion-data.js');
const BACKUP_DIR = path.join(__dirname, 'data', 'backups');

// ── Load data ──────────────────────────────────────────────
function loadData() {
  const src = fs.readFileSync(DATA_FILE, 'utf-8');
  // Extract the object between "const FUSION_DATA = " and the trailing export block
  const match = src.match(/const FUSION_DATA = (\{[\s\S]*\});/);
  if (!match) throw new Error('Could not parse FUSION_DATA from ' + DATA_FILE);
  // eval is acceptable here — this is a local dev tool operating on a trusted file
  const data = eval('(' + match[1] + ')');
  return data;
}

function saveData(data) {
  // Create backup
  if (!fs.existsSync(BACKUP_DIR)) fs.mkdirSync(BACKUP_DIR, { recursive: true });
  const ts = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
  fs.copyFileSync(DATA_FILE, path.join(BACKUP_DIR, `fusion-data.${ts}.js`));

  // Update the lastUpdated field
  data.lastUpdated = new Date().toISOString().slice(0, 10);
  data.dataDisclaimer = data.dataDisclaimer.replace(
    /Last comprehensive update:.*?\./,
    `Last comprehensive update: ${formatDate(data.lastUpdated)}.`
  );

  // Serialize
  const json = JSON.stringify(data, null, 2);
  // Convert JSON to JS module format
  const header = `/**
 * Fusion Energy Dashboard - Structured Data
 *
 * DATA PROVENANCE: This dataset is compiled from publicly available information
 * including peer-reviewed publications, official project announcements, government
 * reports, and industry disclosures. All figures are best-available as of the
 * last update date shown below.
 *
 * IMPORTANT: Fusion energy is a rapidly evolving field. Timelines, funding figures,
 * and technical claims should be independently verified. Many projected dates are
 * aspirational and subject to change.
 *
 * To update: Edit the relevant sections below and change lastUpdated.
 *            Or run: node update.js
 */

`;
  const footer = `

// Make available globally
if (typeof window !== 'undefined') {
  window.FUSION_DATA = FUSION_DATA;
}
if (typeof module !== 'undefined') {
  module.exports = FUSION_DATA;
}
`;
  const output = header + 'const FUSION_DATA = ' + json + ';' + footer;
  fs.writeFileSync(DATA_FILE, output, 'utf-8');
}

function formatDate(iso) {
  const d = new Date(iso + 'T00:00:00');
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
}

// ── CLI helpers ────────────────────────────────────────────
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function ask(question, defaultVal) {
  const suffix = defaultVal !== undefined ? ` [${defaultVal}]` : '';
  return new Promise(resolve => {
    rl.question(`  ${question}${suffix}: `, answer => {
      resolve(answer.trim() || (defaultVal !== undefined ? String(defaultVal) : ''));
    });
  });
}

function askRequired(question) {
  return new Promise(resolve => {
    rl.question(`  ${question}: `, answer => {
      if (!answer.trim()) {
        console.log('    (required)');
        resolve(askRequired(question));
      } else {
        resolve(answer.trim());
      }
    });
  });
}

async function choose(question, options) {
  console.log(`\n  ${question}`);
  options.forEach((opt, i) => console.log(`    ${i + 1}. ${opt}`));
  const answer = await ask('Choice', '1');
  const idx = parseInt(answer, 10) - 1;
  if (idx < 0 || idx >= options.length) {
    console.log('    Invalid choice, try again.');
    return choose(question, options);
  }
  return idx;
}

async function confirm(question) {
  const answer = await ask(`${question} (y/n)`, 'y');
  return answer.toLowerCase().startsWith('y');
}

function printDivider(title) {
  console.log(`\n${'─'.repeat(50)}`);
  if (title) console.log(`  ${title}`);
  console.log('─'.repeat(50));
}

// ── Actions ────────────────────────────────────────────────

async function updateProjectStatus(data) {
  const projects = data.projects;
  printDivider('Update Project Status');

  // Pick project
  console.log('\n  Available projects:');
  projects.forEach((p, i) => console.log(`    ${i + 1}. [${p.id}] ${p.name}`));
  const pIdx = parseInt(await ask('Project number'), 10) - 1;
  if (pIdx < 0 || pIdx >= projects.length) { console.log('  Invalid.'); return; }

  const project = projects[pIdx];
  console.log(`\n  Updating: ${project.name}`);
  console.log(`  Current status: ${project.status}`);
  console.log(`  Current funding: ${project.funding}`);
  console.log(`  Current progress: Stage ${project.progress?.stage} (${project.progress?.pct}%)\n`);

  const newStatus = await ask('New status (enter to keep)', project.status);
  project.status = newStatus;

  const newFunding = await ask('New funding (enter to keep)', project.funding);
  project.funding = newFunding;

  if (project.progress) {
    const stages = data.progressStages;
    console.log('\n  Progress stages:');
    stages.forEach(s => console.log(`    ${s.id}. ${s.label} ${s.id === project.progress.stage ? ' <── current' : ''}`));
    const newStage = await ask('New stage number (enter to keep)', project.progress.stage);
    project.progress.stage = parseInt(newStage, 10);

    const newPct = await ask('Progress within stage 0-100 (enter to keep)', project.progress.pct);
    project.progress.pct = parseInt(newPct, 10);

    const newNote = await ask('Progress note (enter to keep)', project.progress.note);
    project.progress.note = newNote;
  }

  console.log(`\n  Updated ${project.name}.`);
}

async function addMilestone(data) {
  const projects = data.projects;
  printDivider('Add Milestone to Project');

  console.log('\n  Available projects:');
  projects.forEach((p, i) => console.log(`    ${i + 1}. [${p.id}] ${p.name}`));
  const pIdx = parseInt(await ask('Project number'), 10) - 1;
  if (pIdx < 0 || pIdx >= projects.length) { console.log('  Invalid.'); return; }

  const project = projects[pIdx];
  console.log(`\n  Adding milestone to: ${project.name}`);
  console.log('  Existing milestones:');
  project.milestones.forEach(m => {
    const icon = m.achieved ? '\u2713' : '\u25cb';
    console.log(`    ${icon} ${m.year} — ${m.event}`);
  });

  const year = await askRequired('Year (e.g., 2026 or "2027-2028")');
  const event = await askRequired('Event description');
  const achieved = await confirm('Already achieved?');

  const milestone = {
    year: /^\d{4}$/.test(year) ? parseInt(year, 10) : year,
    event,
    achieved
  };

  if (!achieved) {
    const confIdx = await choose('Confidence level?', ['high', 'medium', 'low', 'very low']);
    milestone.confidence = ['high', 'medium', 'low', 'very low'][confIdx];
  }

  const noteText = await ask('Optional note (enter to skip)', '');
  if (noteText) milestone.note = noteText;

  project.milestones.push(milestone);
  // Sort: achieved first, then by year
  project.milestones.sort((a, b) => {
    const ya = typeof a.year === 'number' ? a.year : parseInt(String(a.year).slice(0, 4), 10);
    const yb = typeof b.year === 'number' ? b.year : parseInt(String(b.year).slice(0, 4), 10);
    return ya - yb;
  });

  console.log(`\n  Added milestone to ${project.name}.`);
}

async function markMilestoneAchieved(data) {
  const projects = data.projects;
  printDivider('Mark Milestone as Achieved');

  console.log('\n  Available projects:');
  projects.forEach((p, i) => console.log(`    ${i + 1}. [${p.id}] ${p.name}`));
  const pIdx = parseInt(await ask('Project number'), 10) - 1;
  if (pIdx < 0 || pIdx >= projects.length) { console.log('  Invalid.'); return; }

  const project = projects[pIdx];
  const pending = project.milestones.filter(m => !m.achieved);
  if (pending.length === 0) { console.log('  No pending milestones.'); return; }

  console.log(`\n  Pending milestones for ${project.name}:`);
  pending.forEach((m, i) => console.log(`    ${i + 1}. ${m.year} — ${m.event}`));

  const mIdx = parseInt(await ask('Which milestone?'), 10) - 1;
  if (mIdx < 0 || mIdx >= pending.length) { console.log('  Invalid.'); return; }

  pending[mIdx].achieved = true;
  delete pending[mIdx].confidence;
  const noteText = await ask('Add/update note? (enter to skip)', pending[mIdx].note || '');
  if (noteText) pending[mIdx].note = noteText;

  console.log(`\n  Marked as achieved: "${pending[mIdx].event}"`);
}

async function addViabilitySignal(data) {
  printDivider('Add Viability Signal');

  const typeIdx = await choose('Signal type?', ['Positive (evidence for viability)', 'Cautionary (evidence against / uncertainty)']);
  const listKey = typeIdx === 0 ? 'positive' : 'negative';

  const signal = await askRequired('Signal headline');
  const date = await askRequired('Date (e.g., "March 2026" or "Ongoing")');
  const sigIdx = await choose('Significance?', ['high', 'medium', 'low']);
  const significance = ['high', 'medium', 'low'][sigIdx];
  const detail = await askRequired('Detailed description');
  const caveat = await askRequired('Caveat (what counterbalances this signal)');

  data.viabilitySignals[listKey].push({ signal, date, significance, detail, caveat });
  console.log(`\n  Added ${listKey} signal: "${signal}"`);
}

async function updateFunding(data) {
  printDivider('Update Funding');

  const actionIdx = await choose('What to update?', [
    'Total private investment figure',
    'Individual company funding',
    'Government program'
  ]);

  if (actionIdx === 0) {
    console.log(`  Current: ${data.funding.privateSector.total}`);
    data.funding.privateSector.total = await askRequired('New total');
    console.log('  Updated total private investment.');
  } else if (actionIdx === 1) {
    const companies = data.funding.privateSector.topCompanies;
    console.log('\n  Companies:');
    companies.forEach((c, i) => console.log(`    ${i + 1}. ${c.name}: ${c.amount}`));
    console.log(`    ${companies.length + 1}. Add new company`);

    const cIdx = parseInt(await ask('Choice'), 10) - 1;
    if (cIdx === companies.length) {
      const name = await askRequired('Company name');
      const amount = await askRequired('Amount (e.g., "$150M+")');
      companies.push({ name, amount });
      companies.sort((a, b) => {
        const parse = s => { const m = s.match(/([\d.]+)/); const v = m ? parseFloat(m[1]) : 0; return s.includes('B') ? v * 1000 : v; };
        return parse(b.amount) - parse(a.amount);
      });
      console.log(`  Added ${name}.`);
    } else if (cIdx >= 0 && cIdx < companies.length) {
      console.log(`  Current: ${companies[cIdx].name} — ${companies[cIdx].amount}`);
      companies[cIdx].amount = await askRequired('New amount');
      console.log(`  Updated ${companies[cIdx].name}.`);
    }
  } else {
    const govs = data.funding.government;
    console.log('\n  Government programs:');
    govs.forEach((g, i) => console.log(`    ${i + 1}. ${g.country}: ${g.amount}`));
    console.log(`    ${govs.length + 1}. Add new program`);

    const gIdx = parseInt(await ask('Choice'), 10) - 1;
    if (gIdx === govs.length) {
      const country = await askRequired('Country/region');
      const program = await askRequired('Program name');
      const amount = await askRequired('Amount');
      const status = await askRequired('Status');
      govs.push({ country, program, amount, status });
      console.log(`  Added ${country}.`);
    } else if (gIdx >= 0 && gIdx < govs.length) {
      console.log(`  Updating: ${govs[gIdx].country} — ${govs[gIdx].program}`);
      govs[gIdx].amount = await ask('Amount (enter to keep)', govs[gIdx].amount);
      govs[gIdx].status = await ask('Status (enter to keep)', govs[gIdx].status);
      console.log(`  Updated ${govs[gIdx].country}.`);
    }
  }
}

async function updateAssumption(data) {
  printDivider('Update Assumption Confidence');

  const assumptions = data.assumptions;
  console.log('\n  Assumptions:');
  assumptions.forEach((a, i) => {
    const bar = '\u2588'.repeat(Math.round(a.confidence / 5)) + '\u2591'.repeat(20 - Math.round(a.confidence / 5));
    console.log(`    ${i + 1}. [${a.confidence}%] ${bar} ${a.name}`);
  });

  const aIdx = parseInt(await ask('Which assumption?'), 10) - 1;
  if (aIdx < 0 || aIdx >= assumptions.length) { console.log('  Invalid.'); return; }

  const a = assumptions[aIdx];
  console.log(`\n  ${a.name}`);
  console.log(`  Current confidence: ${a.confidence}%`);
  console.log(`  Current status: ${a.status}`);

  const newConf = await ask('New confidence 0-100 (enter to keep)', a.confidence);
  a.confidence = parseInt(newConf, 10);

  const statIdx = await choose('Validation status?', [
    `validated (keep: ${a.status === 'validated' ? 'current' : ''})`,
    `partially_validated (keep: ${a.status === 'partially_validated' ? 'current' : ''})`,
    `not_validated (keep: ${a.status === 'not_validated' ? 'current' : ''})`
  ]);
  a.status = ['validated', 'partially_validated', 'not_validated'][statIdx];

  if (await confirm('Add a new "validated by" entry?')) {
    const entry = await askRequired('What validated it?');
    a.validatedBy.push(entry);
  }

  if (await confirm('Add a new "remaining gap"?')) {
    const gap = await askRequired('What gap remains?');
    a.remainingGaps.push(gap);
  }

  console.log(`\n  Updated: ${a.name} → ${a.confidence}% (${a.status})`);
}

async function updateFeasibilityScore(data) {
  printDivider('Update Feasibility Score');

  const scores = data.feasibilityScores;
  console.log('\n  Feasibility dimensions:');
  scores.forEach((f, i) => console.log(`    ${i + 1}. [${f.score}/${f.maxScore}] ${f.dimension} — ${f.label}`));

  const fIdx = parseInt(await ask('Which dimension?'), 10) - 1;
  if (fIdx < 0 || fIdx >= scores.length) { console.log('  Invalid.'); return; }

  const f = scores[fIdx];
  console.log(`\n  ${f.dimension}`);

  const updateTopLevel = await confirm('Update the top-level score?');
  if (updateTopLevel) {
    f.score = parseInt(await ask('New score (0-10)', f.score), 10);
    f.label = await ask('New label', f.label);
    f.detail = await ask('New detail text', f.detail);
  }

  if (f.subParameters && f.subParameters.length > 0) {
    if (await confirm('Update a sub-parameter?')) {
      console.log('\n  Sub-parameters:');
      f.subParameters.forEach((sp, i) => console.log(`    ${i + 1}. [${sp.score}/${sp.maxScore}] ${sp.name} — ${sp.status}`));

      const spIdx = parseInt(await ask('Which sub-parameter?'), 10) - 1;
      if (spIdx >= 0 && spIdx < f.subParameters.length) {
        const sp = f.subParameters[spIdx];
        sp.score = parseInt(await ask('New score (0-10)', sp.score), 10);
        sp.status = await ask('New status', sp.status);
        sp.detail = await ask('New detail', sp.detail);
        sp.evidence = await ask('New evidence', sp.evidence);
        sp.gap = await ask('New gap', sp.gap);
        console.log(`\n  Updated: ${sp.name} → ${sp.score}/${sp.maxScore}`);
      }
    }
  }
}

async function addProject(data) {
  printDivider('Add New Project');

  const id = await askRequired('Unique ID (lowercase, underscores, e.g., "renaissance_fusion")');
  if (data.projects.find(p => p.id === id)) {
    console.log('  ID already exists!'); return;
  }

  const name = await askRequired('Full name');
  const country = await askRequired('Country');
  const typeIdx = await choose('Type?', ['Tokamak', 'Spherical Tokamak', 'Stellarator', 'Field-Reversed Configuration (FRC)', 'Inertial Confinement (Laser)', 'Inertial Confinement (Projectile)', 'Magnetized Target Fusion', 'Sheared-Flow Z-Pinch', 'Other (specify)']);
  const types = ['Tokamak', 'Spherical Tokamak', 'Stellarator (HTS)', 'Field-Reversed Configuration (FRC)', 'Inertial Confinement (Laser)', 'Inertial Confinement (Projectile)', 'Magnetized Target Fusion', 'Sheared-Flow Z-Pinch'];
  let type = types[typeIdx] || await askRequired('Specify type');

  const sectorIdx = await choose('Sector?', ['private', 'government']);
  const sector = ['private', 'government'][sectorIdx];

  const approach = await askRequired('Technical approach (one line)');
  const description = await askRequired('Description (1-2 sentences)');
  const founded = parseInt(await askRequired('Year founded'), 10);
  const funding = await askRequired('Funding (e.g., "$150M+")');
  const status = await askRequired('Current status');

  const stageIdx = await choose('Current progress stage?', data.progressStages.map(s => `${s.id}. ${s.label}`));
  const pct = parseInt(await ask('% within that stage (0-100)', 50), 10);
  const note = await askRequired('Progress note');

  const project = {
    id, name, country, type, sector, approach, description,
    founded, funding, status,
    progress: { stage: stageIdx, pct, note },
    milestones: [],
    keyMetrics: {},
    uncertainties: [],
    sources: []
  };

  // Add initial milestone
  if (await confirm('Add an initial milestone?')) {
    const mYear = await askRequired('Year');
    const mEvent = await askRequired('Event');
    const mAchieved = await confirm('Achieved?');
    project.milestones.push({
      year: /^\d{4}$/.test(mYear) ? parseInt(mYear, 10) : mYear,
      event: mEvent,
      achieved: mAchieved
    });
  }

  // Add uncertainty
  if (await confirm('Add a key uncertainty?')) {
    const u = await askRequired('Uncertainty');
    project.uncertainties.push(u);
  }

  data.projects.push(project);
  console.log(`\n  Added project: ${name} (${id})`);
}

async function quickMultiUpdate(data) {
  printDivider('Quick Batch: Mark Multiple Milestones Achieved');

  for (const project of data.projects) {
    const pending = project.milestones.filter(m => !m.achieved);
    if (pending.length === 0) continue;

    console.log(`\n  ${project.name}:`);
    for (const m of pending) {
      const achieved = await confirm(`    ${m.year} — ${m.event}  →  Achieved?`);
      if (achieved) {
        m.achieved = true;
        delete m.confidence;
        console.log('      Marked achieved.');
      }
    }
  }
}

// ── Main menu ──────────────────────────────────────────────
async function main() {
  console.log('\n  Fusion Energy Dashboard — Data Updater');
  console.log('  =======================================\n');

  // Handle CLI flags
  const args = process.argv.slice(2);
  if (args.includes('--list')) {
    const data = loadData();
    data.projects.forEach(p => console.log(`  ${p.id.padEnd(20)} ${p.name}`));
    process.exit(0);
  }

  let data;
  try {
    data = loadData();
    console.log(`  Loaded ${data.projects.length} projects, ${data.assumptions.length} assumptions`);
    console.log(`  Last updated: ${data.lastUpdated}\n`);
  } catch (e) {
    console.error('  Error loading data:', e.message);
    process.exit(1);
  }

  let keepGoing = true;
  while (keepGoing) {
    const action = await choose('What would you like to do?', [
      'Update a project (status, funding, progress stage)',
      'Add a milestone to a project',
      'Mark a milestone as achieved',
      'Add a viability signal (positive or cautionary)',
      'Update funding figures',
      'Update an assumption (confidence, validation)',
      'Update a feasibility score / sub-parameter',
      'Add a new project',
      'Quick batch: review all pending milestones',
      'Save & exit',
      'Exit without saving'
    ]);

    switch (action) {
      case 0: await updateProjectStatus(data); break;
      case 1: await addMilestone(data); break;
      case 2: await markMilestoneAchieved(data); break;
      case 3: await addViabilitySignal(data); break;
      case 4: await updateFunding(data); break;
      case 5: await updateAssumption(data); break;
      case 6: await updateFeasibilityScore(data); break;
      case 7: await addProject(data); break;
      case 8: await quickMultiUpdate(data); break;
      case 9:
        saveData(data);
        console.log(`\n  Saved! Backup created in data/backups/`);
        console.log(`  lastUpdated set to ${data.lastUpdated}`);
        console.log('  Refresh your browser to see changes.\n');
        keepGoing = false;
        break;
      case 10:
        console.log('\n  Exited without saving.\n');
        keepGoing = false;
        break;
    }
  }

  rl.close();
}

main().catch(e => { console.error(e); process.exit(1); });
