/**
 * Fusion Energy Dashboard - Application Logic
 */
(function() {
  'use strict';

  const data = window.FUSION_DATA;

  // ---- Navigation ----
  function initNav() {
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.getAttribute('href').slice(1);
        showSection(target);
        links.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      });
    });
    // Show first section
    showSection('overview');
    links[0].classList.add('active');
  }

  function showSection(id) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    const el = document.getElementById(id);
    if (el) el.classList.add('active');
  }

  // ---- Render Overview ----
  function renderOverview() {
    const container = document.getElementById('overview-content');

    const totalProjects = data.projects.length;
    const privateProjects = data.projects.filter(p => p.sector === 'private').length;
    const govProjects = data.projects.filter(p => p.sector === 'government').length;
    const typeCounts = {};
    data.projects.forEach(p => {
      const t = p.type.split(' ')[0].split('/')[0];
      typeCounts[t] = (typeCounts[t] || 0) + 1;
    });

    const achievedAssumptions = data.assumptions.filter(a => a.status === 'validated').length;
    const partialAssumptions = data.assumptions.filter(a => a.status === 'partially_validated').length;
    const unvalidated = data.assumptions.filter(a => a.status === 'not_validated').length;

    container.innerHTML = `
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-value">${totalProjects}</div>
          <div class="stat-label">Major Projects Tracked</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${privateProjects}</div>
          <div class="stat-label">Private Companies</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${govProjects}</div>
          <div class="stat-label">Government Programs</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">$7B+</div>
          <div class="stat-label">Private Investment (cumulative)</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${partialAssumptions}/${data.assumptions.length}</div>
          <div class="stat-label">Key Assumptions Partially Validated</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${unvalidated}</div>
          <div class="stat-label">Critical Unvalidated Assumptions</div>
        </div>
      </div>

      <div class="grid-2">
        <div class="card">
          <h3>State of Play: What We Know</h3>
          <p style="color: var(--text-secondary); margin: 12px 0;">Fusion physics is well-established. The challenge has shifted from "can fusion work?" to "can we engineer it affordably?"</p>
          <ul class="uncertainty-list">
            <li>Fusion reactions have been produced in dozens of devices since 1950s</li>
            <li>NIF achieved scientific ignition (December 2022) - first Q>1</li>
            <li>Plasma confinement has improved 10,000x since 1970</li>
            <li>HTS magnets open path to compact, faster-to-build devices</li>
            <li>Multiple credible approaches being pursued in parallel</li>
          </ul>
        </div>
        <div class="card">
          <h3>State of Play: What We Don't Know</h3>
          <p style="color: var(--text-secondary); margin: 12px 0;">Critical engineering challenges remain unresolved. Honest uncertainty is essential.</p>
          <ul class="uncertainty-list">
            <li>No fusion device has produced net electricity</li>
            <li>Tritium self-breeding has never been demonstrated</li>
            <li>Materials haven't been tested under real fusion neutron conditions</li>
            <li>Cost of fusion electricity is genuinely unknown</li>
            <li>Component lifetimes under reactor conditions are uncertain</li>
            <li>The gap between "scientific demo" and "power plant" is enormous</li>
          </ul>
        </div>
      </div>

      <h3 style="margin: 24px 0 16px;">Feasibility Assessment</h3>
      <div class="grid-4">
        ${data.feasibilityScores.map(f => `
          <div class="card" style="text-align: center;">
            <div style="font-size: 2.2rem; font-weight: 800; color: ${f.color};">${f.score}<span style="font-size: 1rem; color: var(--text-muted);">/${f.maxScore}</span></div>
            <div style="font-weight: 700; margin: 4px 0;">${f.dimension}</div>
            <div style="font-size: 0.8rem; color: ${f.color}; font-weight: 600; text-transform: uppercase; margin-bottom: 8px;">${f.label}</div>
            <div class="confidence-track" style="margin-bottom: 8px;">
              <div class="confidence-fill" style="width: ${f.score * 10}%; background: ${f.color};"></div>
            </div>
            <div style="font-size: 0.8rem; color: var(--text-secondary);">${f.detail}</div>
          </div>
        `).join('')}
      </div>

      <h3 style="margin: 24px 0 16px;">Critical Path Items</h3>
      <div class="grid-2">
        ${data.criticalPath.map(cp => `
          <div class="card" style="border-left: 3px solid var(--accent-blue);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; flex-wrap: wrap; gap: 8px;">
              <h4 style="font-size: 0.95rem;">${cp.item}</h4>
              <span class="badge badge-tokamak">${cp.expected}</span>
            </div>
            <p style="color: var(--text-secondary); font-size: 0.85rem; margin-bottom: 8px;">${cp.impact}</p>
            <div style="font-size: 0.8rem; color: var(--accent-cyan);">Probability: ${cp.probability}</div>
          </div>
        `).join('')}
      </div>

      <div class="card" style="margin-top: 16px; border-left: 3px solid var(--accent-yellow);">
        <h3 style="color: var(--accent-yellow);">A Note on Uncertainty</h3>
        <p style="color: var(--text-secondary); margin-top: 8px;">
          This dashboard attempts to present fusion energy progress honestly. Many milestone dates shown are <strong>targets set by the organizations themselves</strong> and should not be taken as reliable predictions. Historically, fusion timelines have consistently slipped. The Fusion Industry Association reports that the median expectation among fusion companies is for first power to the grid in the "early 2030s," but independent assessments generally place this in the 2040s or later. We present both views and flag confidence levels throughout.
        </p>
      </div>
    `;
  }

  // ---- Render Projects ----
  function renderProjects() {
    const container = document.getElementById('projects-content');
    let currentFilter = 'all';

    function getTypeBadgeClass(type) {
      if (type.toLowerCase().includes('tokamak')) return 'badge-tokamak';
      if (type.toLowerCase().includes('stellarator')) return 'badge-stellarator';
      if (type.toLowerCase().includes('frc') || type.toLowerCase().includes('field-reversed')) return 'badge-frc';
      if (type.toLowerCase().includes('inertial') || type.toLowerCase().includes('icf') || type.toLowerCase().includes('laser')) return 'badge-icf';
      return 'badge-other';
    }

    function render(filter) {
      const filtered = filter === 'all' ? data.projects :
        filter === 'private' ? data.projects.filter(p => p.sector === 'private') :
        filter === 'government' ? data.projects.filter(p => p.sector === 'government') :
        data.projects.filter(p => p.type.toLowerCase().includes(filter.toLowerCase()));

      const projectCards = filtered.map(p => {
        const milestoneHTML = p.milestones.map(m => {
          const cls = m.achieved ? 'achieved' : 'pending';
          const noteHTML = m.note ? `<span class="note">(${m.note})</span>` : '';
          const confHTML = !m.achieved && m.confidence ?
            `<span class="note">[Confidence: ${m.confidence}]</span>` : '';
          return `<div class="timeline-item ${cls}">
            <span class="year">${m.year}</span>
            <span class="event">${m.event}</span>
            ${noteHTML} ${confHTML}
          </div>`;
        }).join('');

        const metricsHTML = p.keyMetrics ? Object.entries(p.keyMetrics).map(([k, v]) =>
          `<div class="metric-item">
            <div class="metric-label">${k.replace(/([A-Z])/g, ' $1').trim()}</div>
            <div class="metric-value">${v}</div>
          </div>`
        ).join('') : '';

        const uncertaintyHTML = p.uncertainties ? p.uncertainties.map(u =>
          `<li>${u}</li>`
        ).join('') : '';

        return `
          <div class="card" data-project-id="${p.id}">
            <div class="card-header">
              <div>
                <h3>${p.name}</h3>
                <div style="color: var(--text-muted); font-size: 0.85rem; margin-top: 4px;">${p.country}</div>
              </div>
              <div class="meta">
                <span class="badge ${getTypeBadgeClass(p.type)}">${p.type}</span>
                <span class="badge badge-${p.sector}">${p.sector}</span>
              </div>
            </div>
            <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 12px;">${p.description}</p>
            <div style="color: var(--text-muted); font-size: 0.85rem; margin-bottom: 4px;">
              <strong>Approach:</strong> ${p.approach}
            </div>
            <div style="color: var(--text-muted); font-size: 0.85rem; margin-bottom: 4px;">
              <strong>Founded:</strong> ${p.founded} &nbsp;|&nbsp; <strong>Funding:</strong> ${p.funding}
            </div>
            <div style="color: var(--accent-cyan); font-size: 0.85rem; margin-bottom: 16px;">
              <strong>Status:</strong> ${p.status}
            </div>

            ${metricsHTML ? `<div class="metrics-grid">${metricsHTML}</div>` : ''}

            <div class="expandable-header" onclick="toggleExpand(this)">
              <span class="chevron">&#9654;</span>
              <strong style="font-size: 0.9rem;">Milestones & Timeline</strong>
            </div>
            <div class="expandable-content">
              <div class="timeline" style="margin-top: 12px;">
                ${milestoneHTML}
              </div>
            </div>

            ${uncertaintyHTML ? `
              <div class="expandable-header" onclick="toggleExpand(this)" style="margin-top: 12px;">
                <span class="chevron">&#9654;</span>
                <strong style="font-size: 0.9rem; color: var(--accent-yellow);">Key Uncertainties</strong>
              </div>
              <div class="expandable-content">
                <ul class="uncertainty-list">${uncertaintyHTML}</ul>
              </div>
            ` : ''}
          </div>
        `;
      }).join('');

      container.innerHTML = `
        <div class="filter-bar">
          <button class="filter-btn ${filter === 'all' ? 'active' : ''}" onclick="filterProjects('all')">All (${data.projects.length})</button>
          <button class="filter-btn ${filter === 'private' ? 'active' : ''}" onclick="filterProjects('private')">Private (${data.projects.filter(p => p.sector === 'private').length})</button>
          <button class="filter-btn ${filter === 'government' ? 'active' : ''}" onclick="filterProjects('government')">Government (${data.projects.filter(p => p.sector === 'government').length})</button>
          <button class="filter-btn ${filter === 'tokamak' ? 'active' : ''}" onclick="filterProjects('tokamak')">Tokamak</button>
          <button class="filter-btn ${filter === 'stellarator' ? 'active' : ''}" onclick="filterProjects('stellarator')">Stellarator</button>
          <button class="filter-btn ${filter === 'frc' ? 'active' : ''}" onclick="filterProjects('frc')">FRC</button>
          <button class="filter-btn ${filter === 'inertial' ? 'active' : ''}" onclick="filterProjects('inertial')">Inertial</button>
        </div>
        ${projectCards}
      `;
    }

    window.filterProjects = function(filter) {
      currentFilter = filter;
      render(filter);
    };

    render('all');
  }

  // ---- Render Assumptions ----
  function renderAssumptions() {
    const container = document.getElementById('assumptions-content');

    function getStatusLabel(status) {
      switch(status) {
        case 'validated': return '<span class="status-label status-validated">Validated</span>';
        case 'partially_validated': return '<span class="status-label status-partial">Partially Validated</span>';
        case 'not_validated': return '<span class="status-label status-unvalidated">Not Validated</span>';
        default: return '';
      }
    }

    function getConfidenceColor(c) {
      if (c >= 70) return 'var(--accent-green)';
      if (c >= 50) return 'var(--accent-yellow)';
      if (c >= 30) return 'var(--accent-orange)';
      return 'var(--accent-red)';
    }

    const cards = data.assumptions.map(a => {
      const validatedHTML = a.validatedBy.map(v => `<li style="color: var(--accent-green);">${v}</li>`).join('');
      const gapsHTML = a.remainingGaps.map(g => `<li>${g}</li>`).join('');

      return `
        <div class="card assumption-card">
          <div class="category-tag">${a.category}</div>
          <div class="card-header">
            <h3>${a.name}</h3>
            ${getStatusLabel(a.status)}
          </div>
          <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 12px;">${a.description}</p>
          <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 16px;">${a.detail}</p>

          <div class="confidence-bar">
            <span style="font-size: 0.85rem; color: var(--text-muted);">Confidence:</span>
            <div class="confidence-track">
              <div class="confidence-fill" style="width: ${a.confidence}%; background: ${getConfidenceColor(a.confidence)};"></div>
            </div>
            <span class="confidence-label" style="color: ${getConfidenceColor(a.confidence)};">${a.confidence}%</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 16px;">
            <div>
              <strong style="font-size: 0.8rem; color: var(--accent-green);">VALIDATED BY:</strong>
              <ul class="uncertainty-list" style="margin-top: 4px;">${validatedHTML}</ul>
            </div>
            <div>
              <strong style="font-size: 0.8rem; color: var(--accent-red);">REMAINING GAPS:</strong>
              <ul class="uncertainty-list" style="margin-top: 4px;">${gapsHTML}</ul>
            </div>
          </div>
        </div>
      `;
    }).join('');

    container.innerHTML = cards;
  }

  // ---- Render Viability Signals ----
  function renderSignals() {
    const container = document.getElementById('signals-content');

    function renderSignalList(signals, type) {
      return signals.map(s => `
        <div class="card signal-card signal-${type}">
          <div class="signal-header">
            <h4>${s.signal}</h4>
            <div style="display: flex; gap: 8px; align-items: center;">
              <span class="signal-date">${s.date}</span>
              <span class="significance-badge significance-${s.significance}">${s.significance}</span>
            </div>
          </div>
          <p class="signal-detail">${s.detail}</p>
          <div class="signal-caveat">${s.caveat}</div>
        </div>
      `).join('');
    }

    container.innerHTML = `
      <div class="grid-2">
        <div>
          <h3 style="color: var(--accent-green); margin-bottom: 16px;">Positive Signals (${data.viabilitySignals.positive.length})</h3>
          ${renderSignalList(data.viabilitySignals.positive, 'positive')}
        </div>
        <div>
          <h3 style="color: var(--accent-red); margin-bottom: 16px;">Cautionary Signals (${data.viabilitySignals.negative.length})</h3>
          ${renderSignalList(data.viabilitySignals.negative, 'negative')}
        </div>
      </div>
    `;
  }

  // ---- Render Waste & Safety ----
  function renderWasteSafety() {
    const container = document.getElementById('waste-content');
    const ws = data.wasteSafety;

    const wasteTypesHTML = ws.wasteProfile.types.map(w => `
      <div class="card">
        <h4 style="margin-bottom: 8px;">${w.type}</h4>
        <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 8px;">${w.description}</p>
        <div class="metrics-grid">
          <div class="metric-item">
            <div class="metric-label">Half-Life</div>
            <div class="metric-value" style="font-size: 0.85rem;">${w.halfLife}</div>
          </div>
          <div class="metric-item">
            <div class="metric-label">Classification</div>
            <div class="metric-value" style="font-size: 0.85rem;">${w.classification}</div>
          </div>
        </div>
        <p style="color: var(--text-muted); font-size: 0.85rem; margin-top: 8px;"><strong>vs Fission:</strong> ${w.comparison}</p>
      </div>
    `).join('');

    const materialsHTML = ws.wasteProfile.materialChoices.map(m => `
      <div class="card" style="padding: 16px;">
        <h4 style="font-size: 0.95rem; color: var(--accent-cyan);">${m.material}</h4>
        <p style="color: var(--text-muted); font-size: 0.8rem; margin: 4px 0;">${m.purpose}</p>
        <p style="color: var(--text-secondary); font-size: 0.85rem;">${m.advantage}</p>
        <p style="color: var(--accent-yellow); font-size: 0.8rem; margin-top: 4px;">Status: ${m.status}</p>
      </div>
    `).join('');

    const safetyHTML = ws.safety.characteristics.map(c => `
      <div class="safety-card">
        <h4>${c.feature}</h4>
        <p style="color: var(--text-secondary); font-size: 0.9rem;">${c.detail}</p>
        <div class="comparison">${c.comparison}</div>
      </div>
    `).join('');

    const comp = ws.wasteProfile.comparisonWithFission;

    container.innerHTML = `
      <div class="card" style="border-left: 3px solid var(--accent-green); margin-bottom: 24px;">
        <h3>Key Takeaway</h3>
        <p style="color: var(--text-secondary); margin-top: 8px; font-size: 1rem;">${ws.wasteProfile.summary}</p>
      </div>

      <h3 style="margin-bottom: 16px;">Waste Types</h3>
      <div class="grid-3">${wasteTypesHTML}</div>

      <h3 style="margin: 24px 0 16px;">Fusion vs Fission Waste Comparison</h3>
      <div class="waste-comparison">
        <div class="waste-col fusion-col">
          <h4 style="color: var(--accent-green);">Fusion</h4>
          <div style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.8;">
            <div><strong>Decay time:</strong> ${comp.fusionWasteDecayTime}</div>
            <div><strong>High-level waste:</strong> ${comp.fusionHighLevelWaste}</div>
            <div><strong>Proliferation risk:</strong> ${comp.proliferationRisk.split('. ')[0]}</div>
          </div>
        </div>
        <div class="waste-col fission-col">
          <h4 style="color: var(--accent-red);">Fission</h4>
          <div style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.8;">
            <div><strong>Decay time:</strong> ${comp.fissionWasteDecayTime}</div>
            <div><strong>High-level waste:</strong> ${comp.fissionHighLevelWaste}</div>
            <div><strong>Proliferation risk:</strong> ${comp.proliferationRisk.split('. ')[1]}</div>
          </div>
        </div>
      </div>

      <h3 style="margin: 24px 0 16px;">Low-Activation Materials</h3>
      <div class="grid-2">${materialsHTML}</div>

      <h3 style="margin: 24px 0 16px;">Safety Characteristics</h3>
      <p style="color: var(--text-secondary); margin-bottom: 16px;">${ws.safety.summary}</p>
      <div class="safety-grid">${safetyHTML}</div>

      <h3 style="margin: 24px 0 16px;">Tritium Safety</h3>
      <div class="card">
        <div class="grid-2">
          <div>
            <div class="metric-item" style="margin-bottom: 8px;">
              <div class="metric-label">Biological Hazard</div>
              <div class="metric-value" style="font-size: 0.85rem;">${ws.safety.tritiumSafety.biologicalHazard}</div>
            </div>
            <div class="metric-item" style="margin-bottom: 8px;">
              <div class="metric-label">Reactor Inventory</div>
              <div class="metric-value" style="font-size: 0.85rem;">${ws.safety.tritiumSafety.inventory}</div>
            </div>
          </div>
          <div>
            <div class="metric-item" style="margin-bottom: 8px;">
              <div class="metric-label">Containment</div>
              <div class="metric-value" style="font-size: 0.85rem;">${ws.safety.tritiumSafety.containment}</div>
            </div>
            <div class="metric-item" style="margin-bottom: 8px;">
              <div class="metric-label">Worst-Case Scenario</div>
              <div class="metric-value" style="font-size: 0.85rem;">${ws.safety.tritiumSafety.worstCase}</div>
            </div>
          </div>
        </div>
      </div>

      <h3 style="margin: 24px 0 16px;">Environmental Profile</h3>
      <div class="grid-3">
        <div class="card">
          <h4 style="color: var(--accent-cyan);">Fuel Abundance</h4>
          <div style="margin-top: 8px; font-size: 0.9rem; color: var(--text-secondary); line-height: 1.8;">
            <div><strong>Deuterium:</strong> ${ws.environment.fuelAbundance.deuterium}</div>
            <div style="margin-top: 8px;"><strong>Lithium:</strong> ${ws.environment.fuelAbundance.lithium}</div>
            <div style="margin-top: 8px;"><strong>Tritium:</strong> ${ws.environment.fuelAbundance.tritium}</div>
          </div>
        </div>
        <div class="card">
          <h4 style="color: var(--accent-cyan);">Carbon Footprint</h4>
          <div style="margin-top: 8px; font-size: 0.9rem; color: var(--text-secondary); line-height: 1.8;">
            <div><strong>Lifecycle:</strong> ${ws.environment.carbonFootprint.lifecycle}</div>
            <div style="margin-top: 8px;"><strong>Operations:</strong> ${ws.environment.carbonFootprint.operation}</div>
            <div style="margin-top: 8px;"><strong>Comparison:</strong> ${ws.environment.carbonFootprint.comparison}</div>
          </div>
        </div>
        <div class="card">
          <h4 style="color: var(--accent-cyan);">Land & Water Use</h4>
          <div style="margin-top: 8px; font-size: 0.9rem; color: var(--text-secondary); line-height: 1.8;">
            <div><strong>Land:</strong> ${ws.environment.landUse.estimate}</div>
            <div style="margin-top: 8px;"><strong>Comparison:</strong> ${ws.environment.landUse.comparison}</div>
            <div style="margin-top: 8px;"><strong>Water:</strong> ${ws.environment.waterUse.estimate}</div>
          </div>
        </div>
      </div>
    `;
  }

  // ---- Render Timeline ----
  function renderTimeline() {
    const container = document.getElementById('timeline-content');
    const ts = data.timelineScenarios;

    const scenarios = [
      { key: 'optimistic', data: ts.optimistic, cls: 'scenario-optimistic' },
      { key: 'moderate', data: ts.moderate, cls: 'scenario-moderate' },
      { key: 'pessimistic', data: ts.pessimistic, cls: 'scenario-pessimistic' },
      { key: 'never', data: ts.neverViable, cls: 'scenario-never' }
    ];

    const scenarioCards = scenarios.map(s => {
      const d = s.data;
      if (s.key === 'never') {
        return `
          <div class="scenario-card ${s.cls}">
            <h4>${d.label}</h4>
            <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 12px;">${d.description}</p>
            <p style="color: var(--text-muted); font-size: 0.85rem; margin-bottom: 12px;"><strong>Assumes:</strong> ${d.assumptions}</p>
            <div class="scenario-probability">
              <div class="prob-value" style="color: var(--accent-red);">${d.probability}</div>
              <div style="color: var(--text-muted); font-size: 0.8rem;">Estimated probability</div>
            </div>
            <p style="color: var(--text-muted); font-size: 0.8rem; margin-top: 8px;"><strong>Backed by:</strong> ${d.backedBy.join(', ')}</p>
          </div>
        `;
      }
      return `
        <div class="scenario-card ${s.cls}">
          <h4>${d.label}</h4>
          <div class="scenario-item">
            <span class="scenario-label">First Net Electricity</span>
            <span class="scenario-value">${d.firstNetElectricity}</span>
          </div>
          <div class="scenario-item">
            <span class="scenario-label">First Commercial Plant</span>
            <span class="scenario-value">${d.firstCommercialPlant}</span>
          </div>
          <div class="scenario-item">
            <span class="scenario-label">Grid-Scale Deployment</span>
            <span class="scenario-value">${d.gridScale}</span>
          </div>
          <p style="color: var(--text-muted); font-size: 0.85rem; margin-top: 12px;"><strong>Assumes:</strong> ${d.assumptions}</p>
          <div class="scenario-probability">
            <div class="prob-value" style="color: var(--accent-cyan);">${d.probability}</div>
            <div style="color: var(--text-muted); font-size: 0.8rem;">Estimated probability</div>
          </div>
          <p style="color: var(--text-muted); font-size: 0.8rem; margin-top: 8px;"><strong>Backed by:</strong> ${d.backedBy.join(', ')}</p>
        </div>
      `;
    }).join('');

    container.innerHTML = `
      <div class="card" style="border-left: 3px solid var(--accent-yellow); margin-bottom: 24px;">
        <h3 style="color: var(--accent-yellow);">Important Context</h3>
        <p style="color: var(--text-secondary); margin-top: 8px;">
          These scenarios are synthesis estimates based on published analyses, expert interviews, and industry reports. They are NOT predictions. The probability estimates are subjective and intended to convey the range of serious opinion, not precise likelihoods. Fusion timelines have historically been over-optimistic.
        </p>
      </div>
      <div class="scenario-cards">${scenarioCards}</div>

      <h3 style="margin: 32px 0 16px;">Historical Context: The "30 Years Away" Problem</h3>
      <div class="card">
        <p style="color: var(--text-secondary); font-size: 0.95rem; line-height: 1.8;">
          Fusion has famously been "30 years away" for decades. This is partly because:
        </p>
        <ul class="uncertainty-list" style="margin-top: 12px;">
          <li><strong>Funding was never at the level originally projected.</strong> A 1976 US Energy R&D Administration study showed that with "maximum effort" funding, fusion power could be achieved by 2000. Actual funding tracked the "fusion never" line of that same study.</li>
          <li><strong>Each generation of devices revealed new physics challenges</strong> that required the next, larger device to address.</li>
          <li><strong>The engineering challenges were underestimated.</strong> Moving from physics demonstration to power plant requires solving materials, tritium, and reliability problems that are qualitatively different from plasma physics.</li>
          <li><strong>Today is genuinely different in some ways:</strong> HTS magnets, private sector competition, AI-accelerated research, and climate urgency are new factors. But healthy skepticism of timelines is warranted.</li>
        </ul>
      </div>
    `;
  }

  // ---- Render Funding ----
  function renderFunding() {
    const container = document.getElementById('funding-content');
    const f = data.funding;

    const maxAmount = 2000; // $2B for scale
    const barHTML = f.privateSector.topCompanies.map(c => {
      const numMatch = c.amount.match(/[\d.]+/);
      const num = numMatch ? parseFloat(numMatch[0]) : 0;
      const factor = c.amount.includes('B') ? 1000 : 1;
      const amountM = num * factor;
      const pct = Math.min((amountM / maxAmount) * 100, 100);

      return `
        <div class="funding-bar">
          <div class="company-name">${c.name}</div>
          <div class="funding-bar-track">
            <div class="funding-bar-fill" style="width: ${pct}%;">${c.amount}</div>
          </div>
        </div>
      `;
    }).join('');

    const govHTML = f.government.map(g => `
      <div class="card" style="padding: 16px;">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
          <div>
            <h4 style="font-size: 0.95rem;">${g.country}</h4>
            <div style="color: var(--text-muted); font-size: 0.8rem;">${g.program}</div>
          </div>
          <div style="text-align: right;">
            <div style="color: var(--accent-cyan); font-weight: 700;">${g.amount}</div>
            <div style="color: var(--text-muted); font-size: 0.8rem;">${g.status}</div>
          </div>
        </div>
      </div>
    `).join('');

    container.innerHTML = `
      <div class="stats-grid" style="margin-bottom: 32px;">
        <div class="stat-card">
          <div class="stat-value">${f.privateSector.total}</div>
          <div class="stat-label">Total Private Investment</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">40+</div>
          <div class="stat-label">Fusion Companies Worldwide</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">$22B+</div>
          <div class="stat-label">ITER Project Cost (largest single)</div>
        </div>
      </div>

      <h3 style="margin-bottom: 16px;">Private Sector Investment (Top Companies)</h3>
      <div class="card">${barHTML}</div>
      <p style="color: var(--text-muted); font-size: 0.8rem; margin: 8px 0 24px; text-align: center;">
        Notable investors include: ${f.privateSector.notableInvestors.join(', ')}
      </p>

      <h3 style="margin: 24px 0 16px;">Government Fusion Programs</h3>
      <div class="grid-2">${govHTML}</div>
    `;
  }

  // ---- Expandable toggle (global) ----
  window.toggleExpand = function(el) {
    el.classList.toggle('open');
    const content = el.nextElementSibling;
    if (content) content.classList.toggle('open');
  };

  // ---- Initialize ----
  function init() {
    // Set last updated
    const lastUpdatedEl = document.getElementById('last-updated');
    if (lastUpdatedEl) lastUpdatedEl.textContent = data.lastUpdated;

    initNav();
    renderOverview();
    renderProjects();
    renderAssumptions();
    renderSignals();
    renderWasteSafety();
    renderTimeline();
    renderFunding();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
