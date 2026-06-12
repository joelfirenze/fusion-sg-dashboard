/**
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
 */

const FUSION_DATA = {
  lastUpdated: "2026-06-12",
  dataDisclaimer: "Data compiled from public sources. Projected dates are targets, not guarantees. Private company claims may not be independently verified. Funding figures are best-available estimates and may not reflect latest rounds. Last comprehensive fact-check: June 2026.",

  // ============================================================
  // CHANGELOG — recent refreshes (most recent first; rendered as "What's New")
  // ============================================================
  changelog: [
    {
      date: "2026-06-12",
      title: "June 2026 comprehensive refresh",
      summary: "Full fact-check and data refresh covering developments since the March 2026 update.",
      highlights: [
        "Added 3 newly tracked players: Proxima Fusion (EU optimized stellarator, ~€200M), Pacific Fusion (USA, $900M pulsed-magnetic), and Inertia Enterprises (USA, $450M laser ICF) — now 19 projects",
        "Helion raised a $465M Series G at a $15.5B valuation; CFS completed the SPARC tokamak structure and signed a ~$1B ENI offtake agreement",
        "China program expanded: BEST burning-plasma tokamak (Q~5 target, first plasma end-2027), CNNC state company CFEC (~$2.1B), and Energy Singularity's HH70 1,337-second record",
        "Business-model shifts captured: General Fusion breakeven slipped to 2028 + SVAC reverse merger; Zap Energy's partial pivot to fission; First Light's £25M licensing raise; TAE merger slipped to Q4 2026",
        "Funding landscape updated to FIA's $9.77B cumulative (53 companies); US DOE stood up a new Office of Fusion; two new viability signals added"
      ]
    },
    {
      date: "2026-03-28",
      title: "March 2026 fact-check",
      summary: "Comprehensive fact-check with references page, progress meters, and data refresh.",
      highlights: [
        "Helion demonstrated first private D-T fusion (Polaris, 150M°C); EAST set a 1,066-second plasma record",
        "NIF reached an 8.6 MJ record yield; CFS installed the first SPARC magnet"
      ]
    }
  ],

  // ============================================================
  // PROGRESS STAGES (universal journey from concept to commercial power)
  // ============================================================
  progressStages: [
    { id: 0, label: "Concept", short: "CON", description: "Theoretical design and physics basis" },
    { id: 1, label: "Component R&D", short: "R&D", description: "Key technology demonstrations (magnets, plasma experiments)" },
    { id: 2, label: "Prototype Build", short: "BLD", description: "Construction of demonstration device" },
    { id: 3, label: "First Plasma", short: "FP", description: "Device achieves and sustains plasma" },
    { id: 4, label: "Fusion Demonstrated", short: "FUS", description: "Confirmed fusion reactions in the device" },
    { id: 5, label: "Net Energy (Q>1)", short: "Q>1", description: "More fusion energy out than heating energy in" },
    { id: 6, label: "Net Electricity", short: "NET", description: "Device produces more electricity than it consumes" },
    { id: 7, label: "Commercial", short: "COM", description: "Commercially viable, grid-connected power plant" }
  ],

  // ============================================================
  // SECTION 1: FUSION APPROACHES & MAJOR PROJECTS
  // ============================================================
  projects: [
    {
      id: "iter",
      name: "ITER",
      country: "International (35 nations)",
      type: "Tokamak",
      sector: "government",
      approach: "Conventional superconducting tokamak (Nb3Sn magnets)",
      description: "The world's largest fusion experiment, designed to demonstrate Q=10 (500 MW fusion from 50 MW input). Located in Cadarache, France.",
      founded: 2007,
      funding: "$22B+ ITER budget (EUR 5B overrun announced Jul 2024; US DOE estimates ~$65B total including in-kind, disputed by ITER)",
      status: "Under Construction (Baseline 2024 revision)",
      progress: { stage: 2, pct: 46, note: "3 of 9 vacuum vessel sectors installed (200° of chamber); central solenoid being stacked in the pit — sixth and final module added mid-2026; all magnets manufactured" },
      milestones: [
        { year: 2020, event: "Assembly phase began", achieved: true },
        { year: 2021, event: "Cryostat base installed", achieved: true },
        { year: 2025, event: "All superconducting magnets completed (world's largest pulsed magnet system)", achieved: true },
        { year: 2026, event: "Sixth and final central solenoid module stacked in the tokamak pit (mid-2026); Disruption Mitigation System (shattered pellet injection, 27 injectors/6 ports) maturing toward manufacturing; ITER magnet test facility began operation", achieved: true },
        { year: 2025, event: "First plasma (original target)", achieved: false, note: "Delayed by ~9 years" },
        { year: 2034, event: "First plasma - deuterium only (Baseline 2024 target)", achieved: false, confidence: "low", note: "Revised Jul 2024; on track vs new baseline per Nov 2025 ITER Council" },
        { year: 2036, event: "Full plasma current operation (Baseline 2024)", achieved: false, confidence: "low" },
        { year: 2039, event: "Full D-T operations (Baseline 2024)", achieved: false, confidence: "low" }
      ],
      keyMetrics: {
        plasmaVolume: "840 m³",
        magneticField: "5.3 T (toroidal)",
        targetQ: 10,
        targetFusionPower: "500 MW",
        plasmaCurrent: "15 MA"
      },
      uncertainties: [
        "Cost has escalated from original ~$5B to $22B+ (ITER budget) or ~$65B (DOE total estimate)",
        "Baseline 2024 represents a ~9-year delay from original first plasma target",
        "Only 3 of 9 vacuum vessel sectors installed as of early 2026",
        "Management and governance complexity across 35 nations",
        "Whether design will achieve Q=10 as planned"
      ],
      sources: ["iter.org", "ITER Baseline 2024 announcement (Jul 2024)", "Physics World (Jul 2024)", "US CRS Report R48362", "ITER Council Nov 2025 report"]
    },
    {
      id: "cfs",
      name: "Commonwealth Fusion Systems (CFS)",
      country: "USA",
      type: "Compact Tokamak (HTS)",
      sector: "private",
      approach: "High-temperature superconducting (HTS) compact tokamak using REBCO magnets",
      description: "MIT spinoff building SPARC (demonstration) and ARC (commercial power plant). Uses HTS magnets to achieve stronger fields in a smaller device.",
      founded: 2018,
      funding: "~$3B total (including $1.8B Series B + $863M Series B2 in Aug 2025; investors include Nvidia, Google, Temasek, Equinor)",
      status: "SPARC construction nearing completion",
      progress: { stage: 2, pct: 88, note: "TF magnet installation underway (first installed Jan 2026, all 18 targeted by end of summer 2026); second vacuum vessel half arrived May 2026, completing the tokamak structure; first plasma targeted 2026-2027" },
      milestones: [
        { year: 2021, event: "Demonstrated 20T HTS magnet (world record for fusion-class)", achieved: true },
        { year: 2023, event: "Broke ground on SPARC facility in Devens, MA", achieved: true },
        { year: 2024, event: "20T magnet independently validated by DOE; peer-reviewed results published (MIT, Mar 2024)", achieved: true },
        { year: 2025, event: "Vacuum vessel delivered (Oct); $863M Series B2 raised (Aug); digital twin unveiled at CES 2026 with Siemens/Nvidia", achieved: true },
        { year: 2026, event: "Second vacuum vessel half arrived (May), completing tokamak structure; ENI signed ~$1B early-power offtake agreement (May)", achieved: true, note: "First of 18 TF magnets installed Jan 2026" },
        { year: 2026, event: "All 18 TF magnets expected installed by end of summer 2026", achieved: false, confidence: "high" },
        { year: "2026-2027", event: "SPARC first plasma (target)", achieved: false, confidence: "medium" },
        { year: "2027-2028", event: "SPARC D-T operations, target Q>2", achieved: false, confidence: "medium" },
        { year: "Early 2030s", event: "ARC commercial pilot plant", achieved: false, confidence: "low" }
      ],
      keyMetrics: {
        magneticField: "12.2 T (toroidal, HTS)",
        targetQ: ">2 (SPARC), >10 (ARC)",
        targetFusionPower: "140 MW (SPARC), 500 MW (ARC)",
        plasmaVolume: "~26 m³ (SPARC)"
      },
      uncertainties: [
        "SPARC has not yet operated - performance claims are projections",
        "HTS magnet manufacturing at scale is unproven beyond single-coil demo",
        "Jump from SPARC to commercial ARC requires major engineering",
        "Net electricity generation has not been demonstrated by any fusion device"
      ],
      sources: ["cfs.energy", "Fortune (Jan 2026)", "TechCrunch (Jan 2026)", "CPG/Click Oil & Gas (May 2026, vessel + ENI deal)", "MIT News (Mar 2024)", "DOE milestone validation", "Nature papers on HTS magnets"]
    },
    {
      id: "helion",
      name: "Helion Energy",
      country: "USA",
      type: "Field-Reversed Configuration (FRC)",
      sector: "private",
      approach: "Pulsed, magnetically-confined FRC with direct energy capture. Targets D-He3 fuel (aneutronic).",
      description: "Operating Polaris (7th gen), which achieved 150M°C and demonstrated D-T fusion (first private company). Building Orion commercial plant for Microsoft PPA.",
      founded: 2013,
      funding: "~$1.5B raised to date (incl. $425M Series F Jan 2025 + $465M Series G Jun 2026 at $15.5B post-money valuation, ~3x prior); up to $1.7B in earlier milestone-tied commitments",
      status: "Operating Polaris; Orion commercial plant under construction (Malaga, WA)",
      progress: { stage: 4, pct: 30, note: "Polaris reached 150M°C and demonstrated D-T fusion (Feb 2026); $465M Series G raised Jun 2026 ($15.5B valuation); Orion plant under construction" },
      milestones: [
        { year: 2021, event: "Trenta (6th gen) reached 100M°C plasma temperatures", achieved: true },
        { year: 2023, event: "Signed PPA with Microsoft for electricity by 2028", achieved: true },
        { year: 2025, event: "$425M Series F raised (Jan); Orion commercial plant groundbreaking near Rock Island Dam, WA (Jul)", achieved: true },
        { year: 2026, event: "Polaris achieved 150M°C and first private D-T fusion demonstration (Feb); $465M Series G raised at $15.5B valuation (Jun)", achieved: true, note: "Industry first for a private company; total raised to date ~$1.5B" },
        { year: "2028-2029", event: "Deliver electricity to Microsoft via Orion (PPA target)", achieved: false, confidence: "low", note: "Extremely ambitious; Helion now references Orion startup ~2029" },
        { year: "2030s", event: "Commercial fusion power plants", achieved: false, confidence: "low" }
      ],
      keyMetrics: {
        plasmaTemp: "150 million °C (achieved in Polaris, Feb 2026)",
        fuelCycle: "D-T demonstrated; D-³He aneutronic target",
        energyCapture: "Direct electromagnetic energy conversion",
        targetPower: "50+ MW (Orion commercial plant)"
      },
      uncertainties: [
        "D-He3 fuel cycle requires much higher temperatures than D-T; 150M°C is ~75% of estimated requirement",
        "No fusion device has demonstrated net electricity generation",
        "He-3 availability is extremely limited unless bred from D-D reactions",
        "2028 Microsoft PPA remains extremely ambitious despite Orion groundbreaking",
        "Direct energy conversion at scale is unproven",
        "Net electricity was originally targeted for 2024 but not achieved"
      ],
      sources: ["helionenergy.com (Feb 2026 milestone announcement)", "GeekWire (Jun 2026, Series G)", "TechCrunch (Feb 2026)", "S&P Global (Jul 2025)", "Microsoft PPA announcement (May 2023)"]
    },
    {
      id: "tae",
      name: "TAE Technologies",
      country: "USA",
      type: "Field-Reversed Configuration (FRC)",
      sector: "private",
      approach: "Beam-driven FRC targeting p-B11 (proton-boron) aneutronic fusion",
      description: "One of the oldest private fusion companies. Skipped Copernicus (Nov 2025), leapfrogging from Norman directly to Da Vinci, a 50 MWe prototype power plant. Announced $6B merger with Trump Media & Technology Group (Dec 2025).",
      founded: 1998,
      funding: "$1.3B+ private capital raised (incl. $150M Jun 2025 from Chevron, Google, NEA); TMTG merger valued at $6B+ (Dec 2025, providing up to $300M at signing)",
      status: "Norman operational; Da Vinci 50 MWe plant in planning",
      progress: { stage: 3, pct: 50, note: "Norman exceeded expectations; Copernicus skipped; Da Vinci site selection and construction targeting 2026" },
      milestones: [
        { year: 2015, event: "C-2U sustained FRC for 5+ ms", achieved: true },
        { year: 2017, event: "Norman (C-2W) achieved stable FRC plasmas at 50M+ °C", achieved: true },
        { year: 2022, event: "Norman achieved 75 million °C", achieved: true },
        { year: 2025, event: "Copernicus cancelled — Norman performance exceeded expectations, leapfrogging to Da Vinci (Nov)", achieved: true, note: "Roadmap shortened by one generation" },
        { year: 2025, event: "$150M funding round (Jun); TMTG merger announced at $6B+ (Dec)", achieved: true },
        { year: "2026", event: "TMTG merger close now targeted Q4 2026 or sooner (slipped from mid-2026, per Jun 10 2026 joint statement)", achieved: false, confidence: "medium" },
        { year: "2026", event: "Da Vinci site selection and construction commencement after merger close (target)", achieved: false, confidence: "low" },
        { year: 2031, event: "Da Vinci first power to grid (target, 50 MWe)", achieved: false, confidence: "low" },
        { year: "2030s", event: "Commercial p-B11 fusion power", achieved: false, confidence: "very low" }
      ],
      keyMetrics: {
        plasmaTemp: "75 million °C (achieved in Norman)",
        fuelCycle: "p-¹¹B (ultimate target, requires ~1 billion °C)",
        beamPower: "Multi-MW neutral beam injection",
        daVinciTarget: "50 MWe utility-scale fusion plant"
      },
      uncertainties: [
        "p-B11 requires ~10x higher temperature than D-T (extremely challenging)",
        "Cross-section for p-B11 is much lower than D-T",
        "No FRC device has achieved net energy gain",
        "Bremsstrahlung radiation losses are severe at required temperatures",
        "TMTG merger introduces unusual corporate structure; close now targeted Q4 2026 or sooner (slipped from mid-2026)",
        "Da Vinci 2031 grid target is highly ambitious given current plasma temperatures are ~7.5% of p-B11 requirement"
      ],
      sources: ["tae.com (Nov 2025 roadmap update)", "TMTG/TAE joint statement (Jun 10 2026, SEC Form 425)", "CNBC (Dec 2025 TMTG merger)", "Nature Physics publications"]
    },
    {
      id: "tokamak_energy",
      name: "Tokamak Energy",
      country: "UK",
      type: "Spherical Tokamak (HTS)",
      sector: "private",
      approach: "Compact spherical tokamak with HTS magnets",
      description: "UK-based company building compact spherical tokamaks. Demo4 HTS magnet achieved 11.8T in fusion config (Nov 2025). ST40 set records in 2025; ST80-HTS build completion targeting 2026.",
      founded: 2009,
      funding: "$336M+ total (incl. $125M Series C Nov 2024; selected for US DOE FIRE Collaboratives); plus £70M STEP magnet-systems contract from UK Fusion Energy Ltd (Mar 2026–Mar 2029)",
      status: "ST40 operational (record-breaking 2025); ST80-HTS build targeting 2026; Demo4 HTS magnet breakthrough",
      progress: { stage: 3, pct: 60, note: "ST40 set plasma current/stored energy/triple product records (2025); Demo4 achieved 11.8T; ST80-HTS targeting 2026" },
      milestones: [
        { year: 2022, event: "ST40 achieved 100 million °C ion temperature", achieved: true },
        { year: 2025, event: "Demo4 HTS magnet system achieved 11.8T at -243°C, 7M ampere-turns — first fusion power plant field strength in full HTS config (Nov)", achieved: true },
        { year: 2025, event: "ST40 record-breaking results: highest plasma current, stored energy, and fusion triple product (Dec)", achieved: true },
        { year: 2025, event: "ST40 receives $52M upgrade (US DOE + UK DESNZ partnership)", achieved: true },
        { year: 2026, event: "Appointed magnet-systems partner for the UK's STEP programme — £70M contract (Mar 2026–Mar 2029)", achieved: true, note: "Validates HTS magnet commercialization beyond own devices" },
        { year: 2026, event: "ST80-HTS build completion at UKAEA Culham (target)", achieved: false, confidence: "medium", note: "World's first high-field spherical tokamak with HTS magnets at scale" },
        { year: "Early 2030s", event: "ST-E1 fusion pilot plant, up to 200 MWe to grid", achieved: false, confidence: "low" }
      ],
      keyMetrics: {
        plasmaTemp: "100 million °C (achieved in ST40)",
        magnetField: "11.8 T (achieved in Demo4 HTS system, Nov 2025)",
        magnetType: "HTS (REBCO); supply agreement with Furukawa/SuperPower",
        configuration: "Spherical tokamak (tight aspect ratio)"
      },
      uncertainties: [
        "Spherical tokamaks have center-column engineering challenges",
        "Scaling from ST40/ST80 to commercial ST-E1 is a major step",
        "Long-pulse (15 min) plasma control in ST80-HTS is unproven",
        "Competition from larger conventional tokamak designs"
      ],
      sources: ["tokamakenergy.com (Dec 2025 results, Nov 2025 magnet breakthrough)", "UK government fusion reports", "US DOE FIRE Collaboratives"]
    },
    {
      id: "general_fusion",
      name: "General Fusion",
      country: "Canada",
      type: "Magnetized Target Fusion",
      sector: "private",
      approach: "Magnetized target fusion using liquid metal compression",
      description: "Uses pneumatic pistons to compress a liquid metal liner around magnetized plasma. LM26 achieved first plasma (Feb 2025) and first compression (Apr 2025). Fusion Demonstration Plant (FDP) at Culham targeting 2026-2027.",
      founded: 2002,
      funding: "$300M+ (incl. $22M financing Aug 2025); going public via ~$1B reverse merger with Spring Valley Acquisition Corp III (SVAC), Nasdaq ticker GFUZ, close targeted mid-2026",
      status: "LM26 operational (first plasma Feb 2025, first compression Apr 2025); breakeven target slipped to 2028; Nasdaq listing pending",
      progress: { stage: 3, pct: 40, note: "LM26 achieved first plasma and first compression; scientific breakeven target now 2028 (slipped from 2026); pursuing Nasdaq listing via SVAC reverse merger" },
      milestones: [
        { year: 2021, event: "Announced demo plant at UKAEA Culham site", achieved: true },
        { year: 2024, event: "LM26 assembled (Dec 2024)", achieved: true },
        { year: 2025, event: "LM26 first plasma (Feb); first plasma compression (Apr)", achieved: true },
        { year: 2026, event: "Definitive business combination with Spring Valley Acquisition Corp III (SVAC) announced (Jan); Nasdaq listing as GFUZ, ~$1B, close targeted mid-2026", achieved: true, note: "TechCrunch characterized the company as financially struggling" },
        { year: 2026, event: "Targeting 10 keV (100M°C) plasma temperatures in LM26", achieved: false, confidence: "low", note: "Milestone progression: 1 keV → 10 keV → breakeven equivalent" },
        { year: 2028, event: "Scientific breakeven equivalent (100% Lawson) target — slipped from 2026", achieved: false, confidence: "low" },
        { year: "2030s", event: "Commercial pilot plant", achieved: false, confidence: "low" }
      ],
      keyMetrics: {
        approach: "Pneumatic piston compression of liquid metal",
        liquidMetal: "Molten lead-lithium",
        cycleRate: "~1 Hz pulsed operation",
        lm26Status: "First plasma and first compression achieved (2025)"
      },
      uncertainties: [
        "Magnetized target fusion has not achieved net energy",
        "Plasma-liquid metal interface physics is complex",
        "Repetition rate and energy balance are unproven",
        "Symmetry of compression is challenging",
        "100M°C and breakeven targets have not yet been reached in LM26",
        "Breakeven target slipped from 2026 to 2028; company described as financially struggling ahead of SVAC reverse merger"
      ],
      sources: ["generalfusion.com (LM26 updates 2025)", "TechCrunch (Jan 2026, SVAC reverse merger)", "Nuclear Engineering International (General Fusion goes public)", "GlobeNewsWire ($22M financing Aug 2025)"]
    },
    {
      id: "first_light",
      name: "First Light Fusion",
      country: "UK",
      type: "Inertial Confinement (Projectile)",
      sector: "private",
      approach: "Projectile/amplifier-driven inertial confinement fusion; pivoted to technology licensing (FLARE concept)",
      description: "Demonstrated fusion via projectile impact (2022, confirmed by UKAEA). Cancelled Machine 4 (early 2025) and pivoted to licensing amplifier/target technology. FLARE concept models 1,000x gain potential.",
      founded: 2011,
      funding: "$100M+ (incl. £25M first close Apr 2026 led by East X Ventures/Starmaker One, with strategic investment from UKAEA and IP Group)",
      status: "Strategic pivot: technology licensor, not power plant builder",
      progress: { stage: 4, pct: 20, note: "Fusion demonstrated (2022); Machine 4 cancelled; now licensing amplifier tech via FLARE concept" },
      milestones: [
        { year: 2022, event: "Achieved fusion (confirmed by UKAEA), first private company ICF demonstration", achieved: true },
        { year: 2025, event: "Machine 4 cancelled; strategic pivot to technology licensing (Mar)", achieved: true, note: "No longer building own power plant" },
        { year: 2025, event: "Amplifier tech helped Z Machine (Sandia) reach 3.67 TPa pressure record (Feb)", achieved: true },
        { year: 2025, event: "FLARE concept published (Sep) — models 1,000x gain, 1/10th cost of fast ignition (Sep)", achieved: true },
        { year: 2026, event: "£25M funding first close (Apr) led by East X Ventures/Starmaker One with UKAEA and IP Group to commercialize FLARE; pursuing partnerships in fusion, space, and defense", achieved: true },
        { year: "2028+", event: "License amplifier technology to inertial fusion developers", achieved: false, confidence: "medium" }
      ],
      keyMetrics: {
        projectileSpeed: ">6.5 km/s hypervelocity impact",
        approach: "Amplified compression via shaped projectile geometry",
        flareGainModel: "~1,000x gain potential (modeled, not demonstrated)",
        pressureRecord: "Assisted 3.67 TPa at Sandia Z Machine (Feb 2025)"
      },
      uncertainties: [
        "Strategic pivot means First Light is no longer on a direct power plant pathway",
        "FLARE 1,000x gain is a model projection, not experimental result",
        "Licensing model depends on other companies building inertial fusion plants",
        "Fusion neutron yield from original demonstration was very small",
        "Business viability as a technology licensor is unproven"
      ],
      sources: ["firstlightfusion.com (Mar 2025 strategic update, Sep 2025 FLARE)", "ANS Nuclear Newswire (Mar 2025)", "Electronics Weekly (Jul 2025)"]
    },
    {
      id: "zap_energy",
      name: "Zap Energy",
      country: "USA",
      type: "Sheared-Flow Z-Pinch",
      sector: "private",
      approach: "Sheared-flow stabilized Z-pinch (no magnets needed)",
      description: "Uses sheared plasma flows to stabilize Z-pinch configuration. FuZE-3 achieved gigapascal fusion plasma pressures (Nov 2025). In Apr 2026 announced a partial pivot to also develop small-scale nuclear fission alongside fusion as a sequenced, shared engineering/deployment architecture, citing near-term AI data-center demand. New CEO Zabrina Johal named (Apr 2026).",
      founded: 2017,
      funding: "$330M total (incl. $160M Series C + $130M Series D led by Soros Fund Management)",
      status: "Operating FuZE-Q, FuZE-3, Century, and FuZE-A; partial pivot adding fission (Apr 2026)",
      progress: { stage: 4, pct: 25, note: "FuZE-3 achieved gigapascal plasma pressures (Nov 2025); FuZE-A online; Apr 2026 added a fission track; new CEO Zabrina Johal; ranked #16 (top fusion co.) on TIME/Statista America's Top GreenTech 2026" },
      milestones: [
        { year: 2021, event: "Demonstrated sheared-flow stabilization in FuZE", achieved: true },
        { year: 2023, event: "FuZE-Q device operational, achieving fusion neutrons", achieved: true },
        { year: 2025, event: "FuZE-3 achieved gigapascal fusion plasma pressures (~10,000x atmospheric, peer-reviewed, Nov)", achieved: true },
        { year: 2025, event: "$130M Series D raised; Century high-rep-rate platform launched", achieved: true },
        { year: 2026, event: "FuZE-A (5th device) brought online; new CEO Zabrina Johal named, cofounder Benj Conway becomes President; partial pivot adding small-scale fission announced (Apr)", achieved: true },
        { year: "Late 2020s", event: "Demonstration of net energy", achieved: false, confidence: "low" },
        { year: "2030s", event: "Commercial Z-pinch fusion systems", achieved: false, confidence: "low" }
      ],
      keyMetrics: {
        advantage: "No superconducting magnets required",
        approach: "Sheared plasma flow stabilizes Z-pinch instabilities",
        pressure: "Gigapascal fusion plasma pressures achieved (FuZE-3, Nov 2025)",
        devices: "5 fusion devices: FuZE, FuZE-Q, FuZE-3, Century, FuZE-A"
      },
      uncertainties: [
        "Z-pinch stability at reactor-relevant conditions unproven",
        "Scaling from gigapascal pressures to energy-producing conditions remains a major physics question",
        "Electrode erosion and lifetime in reactor scenario",
        "Energy balance has not been demonstrated",
        "Apr 2026 partial pivot to fission may signal that fusion revenue timelines are too distant for near-term commercial viability"
      ],
      sources: ["zapenergy.com (Nov 2025 gigapascal announcement)", "TechCrunch (Apr 2026, fission pivot)", "Neutron Bytes (Apr 2026)", "GeekWire (Nov 2025)"]
    },
    {
      id: "type_one",
      name: "Type One Energy",
      country: "USA",
      type: "Stellarator (HTS)",
      sector: "private",
      approach: "Optimized stellarator with HTS magnets, building on Wendelstein 7-X physics",
      description: "Developing Infinity Two (350 MW stellarator pilot plant) with TVA letter of intent for deployment at retired Bull Run coal plant. Bill Gates among backers. Completed first formal design review (May 2025).",
      founded: 2019,
      funding: "$160M+ total (incl. $82.4M seed Jul 2024 + $87M Jan 2026 convertible note ahead of a $250M Series B at ~$900M pre-money valuation; backed by Bill Gates)",
      status: "Infinity Two design review complete; Infinity One prototype construction targeting 2026",
      progress: { stage: 1, pct: 80, note: "Infinity Two design basis peer-reviewed; formal design review passed (May 2025); TVA partnership" },
      milestones: [
        { year: 2023, event: "Completed initial stellarator optimization design", achieved: true },
        { year: 2024, event: "Secured DOE milestone-based funding; $82.4M seed round finalized", achieved: true },
        { year: 2025, event: "Infinity Two design basis published in Journal of Plasma Physics (Mar); first formal design review completed (May)", achieved: true },
        { year: 2025, event: "TVA letter of intent for 350 MW Infinity Two at retired Bull Run coal plant, Oak Ridge, TN", achieved: true },
        { year: 2026, event: "$87M raised (Jan) ahead of $250M Series B; Infinity One prototype construction (target)", achieved: false, confidence: "medium" },
        { year: "Mid 2030s", event: "Infinity Two 350 MW pilot plant at TVA Bull Run site", achieved: false, confidence: "low" }
      ],
      keyMetrics: {
        advantage: "Stellarators are inherently steady-state (no disruptions)",
        magnetType: "HTS (REBCO)",
        basis: "Builds on W7-X optimized stellarator physics",
        infinityTwoPower: "350 MW target (Infinity Two pilot plant)"
      },
      uncertainties: [
        "Stellarator construction is extremely complex (3D magnet geometry)",
        "No stellarator has achieved reactor-relevant conditions",
        "Manufacturing of complex 3D HTS coils at scale is unproven",
        "Earlier stage than competing tokamak approaches",
        "TVA partnership is a letter of intent, not a firm commitment"
      ],
      sources: ["typeoneenergy.com (design review May 2025)", "TechCrunch (Jan 2026)", "Neutron Bytes (TVA partnership Sep 2025)", "Journal of Plasma Physics (2025)"]
    },
    {
      id: "nif",
      name: "NIF / LLNL",
      country: "USA",
      type: "Inertial Confinement (Laser)",
      sector: "government",
      approach: "Laser-driven inertial confinement fusion (indirect drive, hohlraum)",
      description: "The National Ignition Facility has achieved ignition 10+ times since Dec 2022, with peak yield of 8.6 MJ (target gain 4.13x) in April 2025. Primarily a weapons science facility.",
      founded: 1997,
      funding: "$3.5B construction + $300M+/year operations",
      status: "Operational, 10+ ignition shots achieved",
      progress: { stage: 5, pct: 50, note: "Peak yield 8.6 MJ at 4.13x target gain (Apr 2025); 10+ ignition shots; but wall-plug Q<0.01" },
      milestones: [
        { year: 2022, event: "First scientific ignition: 3.15 MJ fusion from 2.05 MJ laser (Dec)", achieved: true },
        { year: 2023, event: "Ignition repeated; 3.88 MJ yield (Oct 2023)", achieved: true },
        { year: 2024, event: "5.2 MJ yield (Feb 2024); 4.1 MJ yield (Nov 2024)", achieved: true },
        { year: 2025, event: "8.6 MJ yield, target gain 4.13x — new record using novel fuel-capsule design (Apr 2025)", achieved: true },
        { year: 2025, event: "LANL-led team achieved ignition via 'groundbreaking approach' with 2.4 MJ yield (Jun 2025)", achieved: true },
        { year: 2026, event: "LLNL leads DOE IFE-STAR ecosystem and STARFIRE Hub (~$16M, 4-yr) — one of three DOE inertial-fusion-energy science/technology hubs translating ignition toward power applications", achieved: true, note: "IFE-STAR Conference convened 2026; five thrusts incl. high-gain targets, lasers, target manufacturing" },
        { year: "2026+", event: "Continued ignition experiments, exploring higher yields and new approaches", achieved: false, confidence: "high" }
      ],
      keyMetrics: {
        laserEnergy: "2.05-2.2 MJ (192 beams)",
        peakFusionYield: "8.6 MJ (April 2025)",
        peakTargetGain: "4.13x (April 2025)",
        totalIgnitionShots: "10+ (as of Oct 2025)",
        wallPlugEfficiency: "~0.5% (laser is ~1% efficient)",
        repetitionRate: "~1 shot per day (not suitable for power)"
      },
      uncertainties: [
        "NIF is not designed for power production (single-shot facility)",
        "Wall-plug Q is far below 1 (laser efficiency ~1%) — target gain ≠ energy gain",
        "Repetition rate is ~1/day vs ~10 Hz needed for power",
        "Target fabrication cost ($50K+ each) must drop by >1000x for energy",
        "Primarily a weapons physics facility, not energy program"
      ],
      sources: ["lasers.llnl.gov (ignition timeline, Apr 2025 record)", "LLNL S&T Review (Jul-Aug 2025)", "Stansberry Research (Apr 2025 record analysis)", "DOE/NNSA reports"]
    },
    {
      id: "east",
      name: "EAST / BEST / CFETR (China)",
      country: "China",
      type: "Tokamak",
      sector: "government",
      approach: "Superconducting tokamaks: EAST (operational), BEST (burning-plasma device under construction), CFETR (planned demonstration reactor)",
      description: "China's national program. EAST sustained 1,066s of steady-state H-mode plasma (Jan 2025). Its successor BEST (Burning Plasma Experimental Superconducting Tokamak) is under construction in Hefei, targeting first plasma and ~5x energy gain (Q~5) by end of 2027. CFETR is the planned >1 GW demonstration reactor. In Jul 2025 China created a CNNC-led state fusion company (CFEC, ~$2.1B registered capital); private players are also emerging (Energy Singularity's HTS HH70 reportedly sustained 1,337s).",
      founded: 2006,
      funding: "Estimated $1.5-2B/year government across programs; CNNC-led China Fusion Energy Co. (CFEC) created Jul 2025 with ~15B yuan (~$2.1B) registered capital (~$1.6B first round); analysts cite a ~$6.5B national fusion buildout",
      status: "EAST operational; BEST under construction (first plasma target end-2027); CFETR in design; state company CFEC established",
      progress: { stage: 3, pct: 85, note: "EAST sustained 1,066s (Jan 2025); BEST main-machine assembly underway (400-ton Dewar base installed Oct 2025), first plasma targeted end-2027 at Q~5; CFETR in design" },
      milestones: [
        { year: 2021, event: "EAST sustained 120M°C plasma for 101 seconds", achieved: true },
        { year: 2023, event: "EAST sustained 70M°C plasma for 403 seconds", achieved: true },
        { year: 2025, event: "EAST sustained steady-state H-mode plasma for 1,066 seconds (17 min 46 sec), shot #150425 (Jan 2025)", achieved: true, note: "Total injected energy: 3.05 GJ; tungsten divertor with lithium injection" },
        { year: 2025, event: "BEST 400-ton Dewar base installed (Oct) — largest vacuum component ever produced in China's fusion program; CNNC-led state fusion company CFEC established in Shanghai (Jul, ~$2.1B registered capital)", achieved: true },
        { year: 2026, event: "Private firm Energy Singularity's HH70 (world's first fully-HTS tokamak) sustained a 1,337s (~22 min) steady-state long-pulse plasma current, via AI-based control (campaign ran Nov 2025: 120s → 335s → 1,337s)", achieved: true, note: "Longest by a commercially built device; surpasses EAST's 1,066s under different conditions/parameters" },
        { year: 2026, event: "EAST raised line-averaged electron density to ~1.3–1.65 (×10^19 m^-3 range), up from prior 0.8–1.0 (Jan 2026)", achieved: true },
        { year: 2027, event: "BEST first plasma target, aiming for ~5x energy gain (Q~5)", achieved: false, confidence: "medium", note: "Construction began 2023; aggressive 'China speed' schedule" },
        { year: "Early 2030s", event: "CFETR completion target — >1 GW fusion power, Q~30 design goal", achieved: false, confidence: "low" },
        { year: "~2050", event: "China targets commercial fusion (CNNC stated goal)", achieved: false, confidence: "low" }
      ],
      keyMetrics: {
        eastRecord: "1,066 seconds steady-state H-mode plasma (Jan 2025), 3.05 GJ injected energy",
        bestTargetQ: "~5 (first plasma targeted end-2027)",
        cfetrTargetQ: "~30 (design)",
        cfetrFusionPower: ">1 GW (design target)"
      },
      uncertainties: [
        "CFETR timeline depends on Chinese government priorities and funding",
        "Long-pulse operations at moderate parameters don't directly translate to net energy at reactor-relevant conditions",
        "Publication transparency varies; some results (e.g., Energy Singularity's 1,337s) are company/state-announced and corroborated mainly via Chinese media rather than peer review",
        "BEST's end-2027 first-plasma and Q~5 goals are aggressive; burning-plasma operation has never been achieved in a magnetic device",
        "Temperature reports vary by source (ion vs electron temperature measurements)"
      ],
      sources: ["Chinese Academy of Sciences (Oct 2025, BEST Dewar)", "Xinhua (Jul 2025, CFEC state company)", "Interesting Engineering (BEST Q~5 by 2027)", "Physics World (Jan 2025, EAST 1,066s)", "ASIPP publications"]
    },
    {
      id: "kstar",
      name: "KSTAR",
      country: "South Korea",
      type: "Tokamak",
      sector: "government",
      approach: "Superconducting tokamak focused on steady-state operation and advanced scenarios",
      description: "Korea Superconducting Tokamak Advanced Research device. Tungsten divertor successfully installed (Dec 2023), showing 25% surface temp reduction. Targeting 300 seconds at 100M°C by end of 2026.",
      founded: 2008,
      funding: "~$400M construction + ongoing operations",
      status: "Operational with tungsten divertor; targeting 300s at 100M°C",
      progress: { stage: 3, pct: 75, note: "48s at 100M°C record (2023); tungsten divertor operational; 102s continuous H-mode; targeting 300s by 2026" },
      milestones: [
        { year: 2021, event: "Sustained 100M°C plasma for 30 seconds", achieved: true },
        { year: 2023, event: "100M°C ion temperature for 48 seconds (record); 102 seconds continuous H-mode operation", achieved: true },
        { year: 2024, event: "Tungsten divertor installed and operational (Dec 2023); 25% reduction in surface temperature under similar heat loads", achieved: true },
        { year: 2026, event: "Target: 300 seconds at 100M°C with tungsten divertor and AI-assisted control", achieved: false, confidence: "medium" },
        { year: "2030s", event: "K-DEMO design (Korean DEMO reactor)", achieved: false, confidence: "low" }
      ],
      keyMetrics: {
        record: "48 seconds at 100 million °C ion temperature (2023); 102 seconds continuous H-mode",
        magnetType: "Nb3Sn superconducting",
        divertor: "Tungsten divertor operational (Dec 2023)"
      },
      uncertainties: [
        "300-second target at 100M°C is ambitious with new divertor",
        "K-DEMO plans are early stage",
        "Transition from research tokamak to power plant design"
      ],
      sources: ["kfe.re.kr", "CNN (Apr 2024)", "EurekAlert (tungsten divertor results)", "Nuclear Fusion journal"]
    },
    {
      id: "jt60sa",
      name: "JT-60SA",
      country: "Japan/EU",
      type: "Tokamak",
      sector: "government",
      approach: "Large superconducting tokamak, successor to JT-60U, ITER satellite facility",
      description: "Joint EU-Japan tokamak, certified by Guinness as world's largest tokamak (160 m³ plasma volume). Undergoing major upgrades (2024-2026) with new diagnostics and heating systems. Experiments resume late 2026.",
      founded: 2013,
      funding: "~$1.5B (EU-Japan joint)",
      status: "Upgrade phase; experiments resume late 2026",
      progress: { stage: 3, pct: 35, note: "First plasma Oct 2023; undergoing upgrades 2024-2026; 150+ experimental proposals; collaborations with PPPL, General Atomics" },
      milestones: [
        { year: 2023, event: "First plasma achieved (October 2023)", achieved: true },
        { year: 2024, event: "Certified by Guinness as world's largest tokamak (160 m³ plasma volume)", achieved: true },
        { year: "2024-2026", event: "Major upgrades incl. two 8m-diameter in-vessel coils wound inside the machine, new diagnostics and heating; integrated commissioning restarted (May 2026)", achieved: true, note: "Followed ~2-year shutdown; EU-Japan restart announced May 2026" },
        { year: "Late 2026", event: "New round of experiments begins (~6 months); 150+ proposals submitted by EU, Japan, and ITER scientists", achieved: false, confidence: "high" },
        { year: "2027-2030", event: "Advanced tokamak scenario development; PPPL and GA collaborations", achieved: false, confidence: "high" },
        { year: "2030s", event: "Support ITER operations with scenario optimization", achieved: false, confidence: "medium" }
      ],
      keyMetrics: {
        plasmaVolume: "160 m³ (Guinness-certified world's largest tokamak)",
        plasmaCurrent: "5.5 MA",
        magnetType: "Nb3Sn and NbTi superconducting"
      },
      uncertainties: [
        "Research facility, not designed for power production",
        "Value depends partly on ITER timeline",
        "Upgrade phase delays could push experiment start"
      ],
      sources: ["Fusion for Energy (upgrade & restart announcements)", "ITER.org (2026 experiments preview)", "QST Japan (Guinness record)", "PPPL collaboration announcement"]
    },
    {
      id: "step",
      name: "STEP (UK)",
      country: "UK",
      type: "Spherical Tokamak",
      sector: "government",
      approach: "Spherical tokamak prototype power plant",
      description: "UK government's STEP program, now managed by UK Industrial Fusion Solutions (UKIFS). GBP 2.5B committed. ILIOS consortium appointed for West Burton site redevelopment. Moved 'from research to delivery' (Mar 2026).",
      founded: 2019,
      funding: "£2.5B committed by UK government (plus £45M for Sunrise AI supercomputer to accelerate design)",
      status: "Moving from research to delivery; site preparation underway at West Burton",
      progress: { stage: 1, pct: 40, note: "£2.5B committed; ILIOS consortium appointed; site prep underway; design approval target ~2032" },
      milestones: [
        { year: 2022, event: "West Burton, Nottinghamshire selected as site (former coal-fired power station)", achieved: true },
        { year: 2024, event: "UKIFS (UK Industrial Fusion Solutions) established as UKAEA subsidiary to manage STEP", achieved: true },
        { year: 2025, event: "ILIOS consortium (Kier, Nuvia, AL_A, Aecom, Turner & Townsend) appointed for site redevelopment", achieved: true },
        { year: 2026, event: "Move 'from research to delivery' at West Burton (Mar); first public consultation (Jan 14–Mar 11); West Burton site ownership transferred to UKAEA; Construction, Magnets and Information Systems partners in place; new UK Fusion Energy Strategy published (Apr 2026)", achieved: true },
        { year: "~2032", event: "Fully evolved design and approval to build", achieved: false, confidence: "medium" },
        { year: "2032-2035", event: "Construction", achieved: false, confidence: "low" },
        { year: "~2040", event: "Net electricity to grid (target)", achieved: false, confidence: "low" }
      ],
      keyMetrics: {
        targetPower: "~100 MW net electricity",
        configuration: "Compact spherical tokamak",
        investment: "£2.5B committed"
      },
      uncertainties: [
        "Very ambitious timeline for a first-of-kind power plant",
        "Spherical tokamak power plant has never been built",
        "Design approval ~2032 means construction timeline is tight for ~2040 operations",
        "UK fusion regulatory framework still developing for power plant licensing"
      ],
      sources: ["West Lindsey Council (Mar 2026)", "GOV.UK New UK Fusion Energy Strategy (Apr 2026)", "Insider Media (£200m West Burton construction partner)", "East Midlands CCA", "World Nuclear News (UKIFS establishment)"]
    },
    {
      id: "marvel",
      name: "Marvel Fusion",
      country: "Germany",
      type: "Inertial Confinement (Laser, nonthermal)",
      sector: "private",
      approach: "Ultra-short pulse laser-driven nonthermal fusion using nanostructured targets",
      description: "Best-funded fusion company in Europe (~EUR 385M). Building $150M laser facility with Colorado State University. Siemens Energy partnership for integrated power plant design.",
      founded: 2019,
      funding: "~EUR 385M total (EUR 170M private + EUR 215M public projects; Series B EUR 113M incl. EQT Ventures, Siemens Energy Ventures, EIC Fund)",
      status: "Building laser facility; Siemens Energy power plant design partnership",
      progress: { stage: 1, pct: 50, note: "Best-funded European fusion company; $150M laser facility under construction with Colorado State; experiments early 2027" },
      milestones: [
        { year: 2023, event: "Partnerships with major laser facilities", achieved: true },
        { year: 2024, event: "Series B initial close EUR 63M (Sep 2024)", achieved: true },
        { year: 2025, event: "Series B extended to EUR 113M (Mar 2025); EIC Fund's first fusion equity investment", achieved: true },
        { year: 2025, event: "Siemens Energy partnership for integrated fusion power plant conceptual design", achieved: true },
        { year: "Early 2027", event: "Laser facility operational at Colorado State; proof-of-concept experiments begin", achieved: false, confidence: "medium" },
        { year: "2030s", event: "Prototype fusion device", achieved: false, confidence: "very low" }
      ],
      keyMetrics: {
        approach: "Nonthermal, ultra-short pulse laser",
        targetType: "Nanostructured solid-state targets",
        laserType: "Petawatt-class, femtosecond pulses",
        laserFacility: "$150M 'ATLAS' facility at Colorado State University: three ultra-high-intensity lasers delivering ~7 petawatts at a hair-width target; ground broken Oct 2025, targeted completion 2026"
      },
      uncertainties: [
        "Nonthermal laser fusion is less validated than thermal ICF",
        "Still early stage — laser facility not yet operational",
        "Target physics at these conditions is not well understood",
        "Significant gap between laser experiments and power plant",
        "Large public funding component (EUR 215M) may carry milestone conditions"
      ],
      sources: ["marvelfusion.com (Series B)", "b2venture (Series B announcement)", "Optics.org (Sep 2024)", "YPOG (EIC Fund investment)"]
    },
    {
      id: "w7x",
      name: "Wendelstein 7-X",
      country: "Germany",
      type: "Stellarator",
      sector: "government",
      approach: "Optimized stellarator for steady-state operation",
      description: "World's largest and most advanced stellarator. Water-cooled divertor now operational, enabling up to 30-minute pulses. Set world record fusion triple product for >30s pulses (May 2025). Energy turnover record: 1.8 GJ.",
      founded: 2015,
      funding: "~€1.1B",
      status: "Operational with water-cooled divertor; setting world records",
      progress: { stage: 3, pct: 75, note: "Water-cooled divertor operational; 1.8 GJ energy turnover record; world record triple product for >30s pulses (May 2025)" },
      milestones: [
        { year: 2018, event: "Achieved record stellarator plasma performance", achieved: true },
        { year: 2022, event: "Achieved 8 minutes plasma duration, energy confinement approaching tokamak levels", achieved: true },
        { year: 2023, event: "Record energy turnover (1.3 GJ) in stellarator", achieved: true },
        { year: 2025, event: "Water-cooled divertor completed and operational (enables up to 30-min pulses at full heating power)", achieved: true },
        { year: 2025, event: "New energy turnover record: 1.8 GJ over 6-minute run (90 hydrogen pellets injected)", achieved: true },
        { year: 2025, event: "World-best fusion triple product sustained for 43 seconds on the final day of the OP2.3 campaign (May 22), exceeding JET/JT-60U at comparable durations; peak ion temp ~40M°C, fueled by an ORNL pellet injector", achieved: true },
        { year: "2026", event: "OP2.4 experimental campaign (Aug-Dec 2026) after maintenance", achieved: false, confidence: "high" },
        { year: "2028-2035", event: "30-minute plasma operations at full performance", achieved: false, confidence: "medium" }
      ],
      keyMetrics: {
        magnetType: "NbTi superconducting (50 non-planar coils)",
        plasmaVolume: "30 m³",
        energyTurnover: "1.8 GJ (record for stellarators, 2025)",
        tripleProduct: "World-best triple product sustained 43 s (OP2.3, May 2025)"
      },
      uncertainties: [
        "Stellarators have not demonstrated reactor-relevant conditions at full parameters",
        "Complex geometry makes reactor design very challenging",
        "Research device, not on path to direct power production",
        "Long-duration results at moderate temperatures, not reactor-relevant conditions"
      ],
      sources: ["IPP Greifswald (ipp.mpg.de/w7x)", "World Nuclear News (performance records)", "EUROfusion (gigajoule milestone)", "Nature Physics publications"]
    },
    {
      id: "proxima",
      name: "Proxima Fusion",
      country: "Germany",
      type: "Stellarator (HTS)",
      sector: "private",
      approach: "Quasi-isodynamic optimized stellarator with HTS magnets; spun out of Max Planck IPP, building on Wendelstein 7-X physics",
      description: "Munich-based Max Planck IPP spinout, now one of Europe's best-funded fusion startups (~€200M Series A). Published the 'Stellaris' integrated power plant concept and is driving the 'Alpha Alliance' to build a net-energy stellarator demonstrator in Garching by the early 2030s.",
      founded: 2023,
      funding: "~€200M (Series A extended to €200M in 2026 from €130M in 2025); backers incl. Cherry Ventures, Balderton, Plural, UVC Partners",
      status: "Stellaris concept published; Alpha demonstrator site/design; Stellarator Model Coil targeted 2027",
      progress: { stage: 1, pct: 35, note: "Stellaris power plant concept published; Alpha Alliance (30+ companies) launched Feb 2026; MOU with Bavaria/RWE/Max Planck IPP (Mar 2026); SMC magnet demo due 2027" },
      milestones: [
        { year: 2023, event: "Founded as a Max Planck IPP spinout to commercialize optimized stellarators", achieved: true },
        { year: 2025, event: "€130M Series A; Stellaris fusion power plant concept published with partners", achieved: true },
        { year: 2026, event: "Alpha Alliance launched (30+ companies, Feb) to build the 'Alpha' net-energy stellarator demonstrator in Garching; MOU with Free State of Bavaria, RWE and Max Planck IPP (Mar)", achieved: true },
        { year: 2026, event: "Series A extended to €200M", achieved: true },
        { year: 2027, event: "Stellarator Model Coil (SMC) completion — HTS magnet de-risking demonstrator (target)", achieved: false, confidence: "medium" },
        { year: 2031, event: "Alpha demonstrator operational targeting net energy gain (Q>1), ~€2B (target)", achieved: false, confidence: "low" },
        { year: "2030s", event: "Stellaris commercial stellarator power plant", achieved: false, confidence: "very low" }
      ],
      keyMetrics: {
        approach: "Quasi-isodynamic stellarator (steady-state, disruption-free by design)",
        magnetType: "HTS (REBCO)",
        basis: "Builds directly on W7-X optimized stellarator physics",
        alphaDemonstrator: "Net-energy-gain stellarator in Garching, ~€2B, targeting Q>1 by ~2031"
      },
      uncertainties: [
        "Very early stage — no Proxima hardware has yet produced plasma",
        "SMC and Alpha demonstrator are unbuilt; complex 3D HTS coil manufacturing at scale is unproven",
        "€2B Alpha demonstrator requires far more capital than raised to date",
        "Alpha Alliance MOUs and partnerships are non-binding intentions, not firm commitments",
        "No stellarator has achieved reactor-relevant net-energy conditions"
      ],
      sources: ["proximafusion.com (Stellaris concept)", "ANS Nuclear Newswire (Mar 2026, Bavaria/RWE/Max Planck MOU)", "TechFundingNews (Series A €200M)", "Nuclear Engineering International (stellarator roadmap)"]
    },
    {
      id: "pacific_fusion",
      name: "Pacific Fusion",
      country: "USA",
      type: "Pulsed Magnetic",
      sector: "private",
      approach: "High-gain pulsed magnetic fusion — fast-rising, high-current pulses magnetically compress and heat D-T fuel toward ignition",
      description: "Emerged from stealth in Oct 2024 with a $900M Series A — one of the largest in fusion history — structured to release capital as milestones are met. Pursues 'net facility gain' via a pulser-driven approach, partnering with General Atomics, and is scaling toward a demonstration system.",
      founded: 2023,
      funding: "$900M Series A (Oct 2024, milestone-released); investors incl. General Catalyst (Hemant Taneja), Breakthrough Energy Ventures, Eric Schmidt, John Doerr, Ken Griffin, Mustafa Suleyman, Patrick Collison, Reid Hoffman, Andrew Forrest, Lightspeed, Lowercarbon",
      status: "Transitioning from foundational R&D to production for a demonstration-system build",
      progress: { stage: 1, pct: 30, note: "Pulser-module R&D; 2026 focus is proving a full module to spec, then replicating it ~155x for the demonstration system; $1B research/manufacturing campus selected at Albuquerque, NM (Sept 2025), net facility gain targeted 2030" },
      milestones: [
        { year: 2023, event: "Founded to pursue high-gain pulsed magnetic fusion", achieved: true },
        { year: 2024, event: "Emerged from stealth with a $900M milestone-structured Series A (Oct)", achieved: true },
        { year: 2025, event: "General Atomics partnership to test a production-scale pulser module (impedance-matched Marx generator) (Apr); $1B Research & Manufacturing Campus selected at Mesa del Sol, Albuquerque NM (Sept)", achieved: true },
        { year: 2026, event: "Transition from R&D to production; demonstration-system build begins", achieved: true },
        { year: 2030, event: "Demonstration system attempts net facility gain (target)", achieved: false, confidence: "low" },
        { year: "2030s", event: "Commercial pulsed magnetic fusion plant", achieved: false, confidence: "very low" }
      ],
      keyMetrics: {
        approach: "Pulser-driven pulsed magnetic compression of D-T fuel",
        demonstrationSystem: "~155 identical pulser modules driving a single target",
        partner: "General Atomics (pulsed-power and engineering expertise)",
        goal: "Net facility gain (more fusion energy than delivered to the target)"
      },
      uncertainties: [
        "Pulsed magnetic fusion has never demonstrated net gain",
        "Demonstration system is unbuilt; manufacturing 155 identical high-current pulser modules to spec is unproven",
        "$900M is milestone-released — continued funding is contingent on hitting technical targets",
        "Net facility gain ≠ net electricity; balance-of-plant and rep-rate remain far off",
        "Very early stage despite the large raise"
      ],
      sources: ["ANS Nuclear Newswire (pulsed magnetic concept; General Atomics)", "Power Engineering (Series A)", "Fusion Energy Insights (stealth exit)", "PitchBook"]
    },
    {
      id: "inertia",
      name: "Inertia Enterprises",
      country: "USA",
      type: "Inertial Confinement (Laser)",
      sector: "private",
      approach: "Repetition-rated, laser-driven inertial confinement fusion (ICF), building directly on NIF ignition physics",
      description: "Founded 2024 (unveiled Aug 2025), then raised $450M in Feb 2026. Led by Twilio co-founder Jeff Lawson (CEO) with two of the field's most prominent ICF scientists — Annie Kritcher (Chief Scientist, who led the design of NIF's first net-gain ignition shot) and Mike Dunne (CTO, former LLNL inertial-fusion-energy program director, now a Stanford professor). Building a high-repetition-rate laser line ('Thunderwall') and an ICF pilot plant.",
      founded: 2024,
      funding: "$450M (Feb 11, 2026) led by Bessemer Venture Partners and Alphabet's GV; also Threshold Ventures, Modern Capital",
      status: "Unveiled Aug 2025; $450M raised Feb 2026; building toward a high-rep-rate laser facility and pilot plant",
      progress: { stage: 1, pct: 15, note: "Founded 2024 on NIF ignition heritage; building the 'Thunderwall' rep-rated laser line and target factory for an ICF pilot plant — no Inertia hardware yet operating" },
      milestones: [
        { year: 2025, event: "Company unveiled (Aug); founding team Jeff Lawson (CEO), Annie Kritcher (Chief Scientist), Mike Dunne (CTO)", achieved: true, note: "Kritcher led NIF's record-gain target design; Dunne is former LLNL IFE program director" },
        { year: 2026, event: "Raised $450M led by Bessemer and Alphabet's GV (Feb 11)", achieved: true },
        { year: "Late 2020s", event: "Build high-rep-rate laser and demonstrate rep-rated ICF (target)", achieved: false, confidence: "low" },
        { year: "2030s", event: "ICF pilot plant (target)", achieved: false, confidence: "very low" }
      ],
      keyMetrics: {
        approach: "Rep-rated laser-driven ICF (multiple shots/second vs NIF's ~1/day)",
        basis: "NIF ignition physics (Kritcher led the first net-gain shot design)",
        leadership: "Jeff Lawson (Twilio co-founder), Annie Kritcher, Mike Dunne",
        goal: "World's most powerful clean-energy laser feeding an ICF pilot plant"
      },
      uncertainties: [
        "Brand-new company (2026) with no operating hardware yet",
        "ICF for energy must go from NIF's ~1 shot/day to ~10 Hz — a >100,000x rep-rate jump",
        "Target fabrication cost must fall by orders of magnitude for power production",
        "Net facility/target gain ≠ net electricity; driver efficiency is the central problem",
        "Rep-rated, high-energy lasers at the required efficiency and durability are unproven"
      ],
      sources: ["TechCrunch (Feb 2026)", "SiliconANGLE (Feb 2026)", "Bloomberg (Feb 2026)", "optics.org (pilot plant)"]
    }
  ],

  // ============================================================
  // SECTION 2: KEY ASSUMPTIONS & VALIDATION STATUS
  // ============================================================
  assumptions: [
    {
      id: "lawson",
      category: "Physics",
      name: "Lawson Criterion (Triple Product)",
      description: "Plasma must achieve sufficient temperature × density × confinement time for self-sustaining fusion.",
      status: "partially_validated",
      detail: "JET achieved Q=0.67 (1997). ITER targets Q=10. NIF achieved ignition (target gain >1). The triple product has improved ~10,000x since 1970 and is approaching reactor-relevant conditions in multiple devices.",
      confidence: 85,
      validatedBy: ["JET D-T campaigns", "NIF ignition shots", "EAST/KSTAR long-pulse results"],
      remainingGaps: ["No magnetic confinement device has achieved Q>1", "Sustained burn at Q>5 never demonstrated", "Alpha particle heating dominant regime not accessed"]
    },
    {
      id: "plasma_stability",
      category: "Physics",
      name: "Plasma Stability & Disruption Control",
      description: "Fusion plasmas must be stable or controllable. Disruptions in tokamaks can damage the device.",
      status: "partially_validated",
      detail: "Major progress in disruption prediction and mitigation. ITER has disruption mitigation system. Stellarators avoid disruptions by design. Advanced tokamak scenarios reduce disruption risk.",
      confidence: 65,
      validatedBy: ["JET disruption mitigation", "KSTAR/EAST long-pulse stability", "W7-X stellarator stability"],
      remainingGaps: ["ITER-scale disruption management untested", "Disruption-free high-performance operation not demonstrated at scale", "Machine learning disruption prediction needs reactor validation"]
    },
    {
      id: "hts_magnets",
      category: "Engineering",
      name: "High-Temperature Superconducting Magnets",
      description: "HTS magnets (REBCO) can produce much stronger fields, enabling smaller, cheaper fusion devices.",
      status: "partially_validated",
      detail: "CFS demonstrated a 20T large-bore HTS magnet in 2021 - a landmark achievement. Multiple companies now developing HTS magnets. Manufacturing scale-up and cost reduction are the remaining challenges.",
      confidence: 75,
      validatedBy: ["CFS 20T magnet demo (2021)", "Tokamak Energy HTS magnet tests", "Various industrial HTS demonstrations"],
      remainingGaps: ["Full toroidal magnet set not yet operated in a fusion device", "Radiation effects on HTS in fusion neutron environment", "Cost of REBCO tape at volume production", "Joint and quench management in full-scale systems"]
    },
    {
      id: "tritium_breeding",
      category: "Engineering",
      name: "Tritium Self-Sufficiency (Breeding Blanket)",
      description: "D-T fusion reactors must breed their own tritium from lithium blankets, achieving a tritium breeding ratio >1.",
      status: "not_validated",
      detail: "No fusion device has demonstrated tritium breeding. ITER will test breeding blanket modules but full self-sufficiency is untested. This is one of the most critical unresolved challenges.",
      confidence: 40,
      validatedBy: ["Neutronics simulations", "Small-scale lithium blanket material tests", "ITER TBM module designs"],
      remainingGaps: ["No integrated tritium breeding demonstration", "TBR >1 not experimentally confirmed", "Tritium extraction from breeding blankets at scale", "Lithium-6 enrichment at industrial scale", "Structural materials performance under neutron irradiation"]
    },
    {
      id: "materials",
      category: "Engineering",
      name: "Plasma-Facing Materials & Neutron Damage",
      description: "Materials must withstand 14.1 MeV neutron bombardment, high heat flux, and plasma erosion for years.",
      status: "not_validated",
      detail: "No material has been tested under true fusion neutron conditions at reactor-relevant fluence. IFMIF-DONES facility will provide first dedicated testing. Current candidates: RAFM steels (EUROFER), tungsten, SiC/SiC composites.",
      confidence: 35,
      validatedBy: ["Fission reactor irradiation proxy tests", "Ion beam damage simulations", "Plasma-facing component tests in existing tokamaks"],
      remainingGaps: ["No 14.1 MeV neutron source at sufficient fluence exists", "IFMIF-DONES not yet operational", "Material lifetime under actual fusion conditions unknown", "First wall replacement frequency could determine economics", "Helium embrittlement in structural steels at reactor fluence"]
    },
    {
      id: "energy_balance",
      category: "Engineering",
      name: "Net Electricity Generation (Engineering Q)",
      description: "A fusion power plant must produce more electricity than it consumes, including all auxiliary systems.",
      status: "not_validated",
      detail: "Physics Q>1 achieved (NIF). But engineering Qe (wall-plug to grid) has never been demonstrated. Requires Q_physics >> 10 due to efficiency losses in heating, cooling, magnets, tritium processing, etc.",
      confidence: 30,
      validatedBy: ["NIF ignition (physics Q>1)", "Power plant design studies (theoretical)"],
      remainingGaps: ["No device has generated net electricity", "Balance of plant designs are theoretical", "Recirculating power fraction unknown at scale", "Heat exhaust and power conversion efficiency", "Parasitic power loads (cryogenics, heating, tritium) not fully characterized"]
    },
    {
      id: "fuel_supply",
      category: "Resources",
      name: "Fuel Availability (D, T, Li)",
      description: "Deuterium is abundant in seawater. Tritium must be bred from lithium. Current tritium supply is ~25 kg globally.",
      status: "partially_validated",
      detail: "Deuterium is essentially unlimited (1 in 6700 hydrogen atoms in seawater). Lithium reserves are large but concentrated. Tritium is scarce (decays with 12.3y half-life) - current supply comes from CANDU reactors and is ~25 kg globally.",
      confidence: 60,
      validatedBy: ["Deuterium extraction is industrial-scale technology", "Lithium mining is established (driven by batteries)", "CANDU tritium production is demonstrated"],
      remainingGaps: ["Tritium self-breeding not demonstrated (see breeding blanket)", "CANDU-sourced tritium may not be available long-term", "Startup tritium inventory for new plants (~5-10 kg each)", "Competition with battery industry for lithium"]
    },
    {
      id: "regulatory",
      category: "Policy",
      name: "Regulatory Framework",
      description: "Fusion needs a clear, proportionate regulatory framework distinct from fission.",
      status: "partially_validated",
      detail: "UK pioneered fusion-specific regulation (not classified as nuclear fission). US NRC developing fusion regulatory framework. EU and other jurisdictions following. Key question: will fusion be regulated like fission (costly, slow) or receive proportionate risk-based regulation?",
      confidence: 55,
      validatedBy: ["UK fusion regulatory framework (2021)", "US NRC fusion rulemaking (ongoing)", "IAEA fusion safety guidance"],
      remainingGaps: ["US NRC final fusion rules not complete", "International harmonization", "Waste classification for activated materials", "Tritium handling regulations at commercial scale", "Public acceptance and licensing timeline"]
    },
    {
      id: "economics",
      category: "Economics",
      name: "Cost-Competitive Electricity",
      description: "Fusion electricity must be cost-competitive with alternatives (renewables+storage, fission, etc.)",
      status: "not_validated",
      detail: "No fusion power plant exists, so cost projections are highly uncertain. Estimates range from $50-150/MWh. Key cost drivers: plant capital cost, availability factor, component replacement frequency, and tritium management.",
      confidence: 20,
      validatedBy: ["Power plant design studies (ARIES, EU-DEMO, ARC)", "Component cost estimates"],
      remainingGaps: ["No operational fusion power plant exists", "Component lifetime determines replacement costs", "Availability factor unknown (fission plants ~90%)", "Learning rate for construction costs", "Competition from rapidly falling renewable+storage costs", "First-of-a-kind vs nth-of-a-kind cost gap"]
    }
  ],

  // ============================================================
  // SECTION 3: VIABILITY SIGNALS
  // ============================================================
  viabilitySignals: {
    positive: [
      {
        signal: "NIF achieves scientific ignition 10+ times, peak 8.6 MJ yield",
        date: "December 2022 – April 2025",
        significance: "high",
        detail: "First ignition in Dec 2022 (3.15 MJ). By April 2025, NIF achieved 8.6 MJ yield at 4.13x target gain using a novel fuel-capsule design. At least 10 ignition shots completed including a LANL-led 'groundbreaking approach' (Jun 2025).",
        caveat: "NIF is a weapons physics facility. Wall-plug efficiency is <1%. Target gain ≠ energy gain. Not a viable path to power generation in current form."
      },
      {
        signal: "CFS demonstrates 20T HTS magnet",
        date: "September 2021",
        significance: "high",
        detail: "First large-bore, high-field HTS magnet suitable for fusion, enabling compact tokamak designs. Opens path to smaller, faster-to-build fusion devices.",
        caveat: "Single magnet demonstration. Full toroidal set in a fusion device not yet tested."
      },
      {
        signal: "Cumulative fusion industry funding reaches $9.77B (FIA)",
        date: "2021-2026",
        significance: "medium",
        detail: "FIA's Global Fusion Industry Report (Jul 2025) put cumulative funding at $9.77B across 53 companies, with $2.64B raised in the prior 12 months. 2026 momentum continued: Helion $465M Series G ($15.5B valuation, Jun), Inertia Enterprises $450M for laser ICF, Pacific Fusion $900M Series A. Investors include Nvidia, Google, Temasek, Soros Fund, Bill Gates.",
        caveat: "Private investment does not guarantee technical success. VC timelines may not align with fusion development timescales. Some headline figures are stock deals or milestone commitments, not deployed R&D capital (e.g., TAE's $6B TMTG merger). Several firms are pivoting or restructuring (General Fusion SVAC reverse merger; Zap adding fission)."
      },
      {
        signal: "Helion signs Microsoft PPA",
        date: "May 2023",
        significance: "medium",
        detail: "First-ever commercial power purchase agreement for fusion electricity, targeting delivery by 2028. Signals corporate confidence.",
        caveat: "The 2028 target is widely considered extremely ambitious. PPA likely includes penalty/exit clauses."
      },
      {
        signal: "Government commitments accelerate",
        date: "2022-2025",
        significance: "medium",
        detail: "US Bold Decadal Vision, UK STEP program, China CFETR, Japan fusion strategy, Korea K-DEMO. Multiple governments targeting fusion power by 2040.",
        caveat: "Government targets often slip. Funding commitments may not be sustained across political cycles."
      },
      {
        signal: "EAST shatters duration record: 1,066 seconds",
        date: "January 2025",
        significance: "medium",
        detail: "EAST sustained steady-state H-mode plasma for 1,066 seconds (17 min 46 sec, Jan 2025), 2.6x its previous 403-second record. KSTAR: 48 seconds at 100M°C, targeting 300 seconds by 2026. W7-X set world record triple product for >30s durations (May 2025).",
        caveat: "Long pulses at moderate parameters don't directly translate to power-relevant conditions. Temperature reports vary by measurement point."
      },
      {
        signal: "China mounts a state-backed fusion scale-up",
        date: "2025-2026",
        significance: "high",
        detail: "Beyond EAST, China is building BEST (burning-plasma tokamak, first plasma targeted end-2027 at Q~5; 400-ton Dewar installed Oct 2025), created a CNNC-led state fusion company (CFEC, ~$2.1B registered capital, Jul 2025), and is seeding private players (Energy Singularity's HTS HH70 reportedly sustained 1,337s; Star Fusion, Nova Fusion funded). Analysts cite a ~$6.5B national buildout, reportedly ~3x US public spend.",
        caveat: "Several results are state/company-reported and hard to verify independently. Aggressive schedules (BEST by 2027) may slip. Spending scale doesn't guarantee net energy or commercialization, and CNNC's own commercial target is ~2050."
      },
      {
        signal: "JT-60SA first plasma",
        date: "October 2023",
        significance: "medium",
        detail: "World's largest superconducting tokamak begins operations, supporting ITER research and advanced scenario development.",
        caveat: "Research device, not designed for power production."
      },
      {
        signal: "Helion demonstrates D-T fusion as first private company",
        date: "February 2026",
        significance: "medium",
        detail: "Helion's Polaris (7th gen) achieved 150M°C and became the first privately developed machine to demonstrate measurable D-T fusion. Also First Light Fusion confirmed projectile fusion via UKAEA (2022).",
        caveat: "D-T fusion demonstration does not equal net energy. 150M°C is ~75% of estimated requirement for Helion's ultimate D-He3 fuel cycle. First Light has since pivoted away from building its own power plant."
      },
      {
        signal: "Stellarators gain industrial momentum",
        date: "2025-2026",
        significance: "medium",
        detail: "W7-X set a world-best triple product sustained for 43s (OP2.3, May 2025). On the commercial side, Type One Energy (TVA Bull Run site) and Proxima Fusion (Stellaris concept; Alpha Alliance of 30+ companies, MOU with Bavaria/RWE/Max Planck IPP, Mar 2026) are industrializing the optimized-stellarator approach, which is steady-state and disruption-free by design.",
        caveat: "No stellarator has reached reactor-relevant net-energy conditions. Complex 3D HTS coil manufacturing at scale is unproven, and commercial demonstrators (Infinity Two, Alpha) are unbuilt and need far more capital than raised to date."
      },
      {
        signal: "AI/ML accelerating plasma research",
        date: "2023-2025",
        significance: "medium",
        detail: "Machine learning being used for plasma control, disruption prediction, materials discovery, and experiment optimization. DeepMind demonstrated tokamak plasma shaping control.",
        caveat: "AI assists but doesn't solve fundamental physics or engineering challenges."
      }
    ],
    negative: [
      {
        signal: "ITER massive delays and cost overruns continue",
        date: "Ongoing (Baseline 2024 revision Jul 2024)",
        significance: "high",
        detail: "Originally budgeted at ~$5B with first plasma in 2016. Baseline 2024 (Jul 2024): EUR 5B additional overrun, first plasma pushed to 2034. US DOE estimates total cost at ~$65B (disputed by ITER). Schedule slipped ~18 years from original target.",
        caveat: "ITER's challenges are partly organizational/political (35-nation governance), not purely technical. Private companies with HTS magnets claim they can achieve Q>1 at smaller scale and fraction of cost."
      },
      {
        signal: "Tritium supply crisis looming",
        date: "Ongoing",
        significance: "high",
        detail: "Global tritium supply is ~25 kg, decaying at 5.5%/year. CANDU reactors are the only source. ITER alone needs 5-10 kg. Multiple fusion projects would exhaust supply before breeding is proven.",
        caveat: "Some approaches (Helion's D-He3, TAE's p-B11) don't use tritium. Breeding blankets could solve this if they work."
      },
      {
        signal: "No fusion device has produced net electricity",
        date: "Current status",
        significance: "high",
        detail: "Despite 70+ years of research, no fusion device has generated a single watt of net electricity. The gap between physics demonstration and power plant is enormous.",
        caveat: "Physics understanding has advanced enormously. Multiple credible paths to net energy now exist."
      },
      {
        signal: "Materials qualification gap",
        date: "Ongoing",
        significance: "high",
        detail: "No facility exists to test materials under true fusion neutron conditions at reactor-relevant dose rates. IFMIF-DONES is years away. Material lifetime determines plant economics.",
        caveat: "Proxy testing with fission neutrons and ion beams provides partial data. Low-activation materials are being developed."
      },
      {
        signal: "Some fusion firms restructure or hedge as revenue slips",
        date: "2025-2026",
        significance: "medium",
        detail: "Several companies are adjusting business models as fusion revenue stays distant: General Fusion pushed breakeven from 2026 to 2028 and is going public via a ~$1B SVAC reverse merger amid financial strain; Zap Energy announced a partial pivot to also develop small-scale fission (Apr 2026); First Light Fusion abandoned its own power plant to license amplifier tech (now also targeting space/defense); TAE's path runs through a $6B TMTG stock merger now slipped to Q4 2026.",
        caveat: "Pragmatic pivots and public listings can extend runway and de-risk. Licensing and dual fission/fusion strategies may still advance the underlying technology even if the original plan changes."
      },
      {
        signal: "Renewables + storage costs falling rapidly",
        date: "Ongoing",
        significance: "medium",
        detail: "Solar + battery costs have fallen ~90% in a decade and continue declining. By the time fusion arrives (2040s+), the competition will be much tougher.",
        caveat: "Fusion could serve baseload, industrial heat, and grid-scale roles where renewables+storage face challenges."
      },
      {
        signal: "Engineering Q >> Physics Q",
        date: "Fundamental challenge",
        significance: "high",
        detail: "Even ITER's Q=10 would not produce net electricity when accounting for heating, cooling, magnets, tritium processing. Engineering Q may need Q_physics >25-50.",
        caveat: "This is understood and factored into power plant designs. Not a showstopper but affects economics."
      },
      {
        signal: "Regulatory uncertainty",
        date: "Ongoing",
        significance: "medium",
        detail: "If fusion is regulated like fission, it could add billions in cost and decades in licensing. Regulatory frameworks are still being developed in most countries.",
        caveat: "UK has created a fusion-favorable framework. US NRC rulemaking is progressing."
      }
    ]
  },

  // ============================================================
  // SECTION 4: WASTE, SAFETY, & ENVIRONMENT
  // ============================================================
  wasteSafety: {
    wasteProfile: {
      summary: "Fusion produces no high-level, long-lived radioactive waste comparable to fission. The primary waste is activated structural materials that decay to safe levels within ~100 years.",
      types: [
        {
          type: "Activated structural materials",
          description: "Neutron bombardment activates steel, tungsten, and other structural materials in the reactor vessel.",
          halfLife: "Most isotopes decay within 50-100 years",
          classification: "Low to intermediate level waste (ILW/LLW)",
          volume: "Comparable to or less than a fission plant per unit energy",
          comparison: "Fission spent fuel remains hazardous for 100,000+ years. Fusion waste ~100 years."
        },
        {
          type: "Tritium-contaminated components",
          description: "Components exposed to tritium become contaminated. Tritium itself has a 12.3 year half-life.",
          halfLife: "12.3 years (tritium)",
          classification: "Low level waste",
          volume: "Relatively small volume",
          comparison: "Much less hazardous than fission fuel cycle waste"
        },
        {
          type: "Activated cooling water/fluids",
          description: "Cooling water and other fluids may become slightly activated by neutron exposure.",
          halfLife: "Short-lived isotopes (hours to days typically)",
          classification: "Low level waste / clearable",
          volume: "Can be managed with established techniques",
          comparison: "Similar to or less than fission plant activated water"
        }
      ],
      materialChoices: [
        {
          material: "RAFM Steel (e.g., EUROFER97)",
          purpose: "First wall and structural components",
          advantage: "Designed for low activation - most radioactivity decays within 100 years",
          status: "Under development, not yet qualified for fusion neutron conditions"
        },
        {
          material: "Tungsten",
          purpose: "Plasma-facing components (divertor)",
          advantage: "High melting point, good plasma erosion resistance",
          status: "Used in current tokamaks, long-term neutron damage behavior uncertain"
        },
        {
          material: "SiC/SiC Composites",
          purpose: "Advanced structural material",
          advantage: "Very low activation, high temperature capability",
          status: "Promising but manufacturing maturity is limited"
        },
        {
          material: "Vanadium alloys",
          purpose: "Alternative structural material",
          advantage: "Low activation, good high-temperature properties",
          status: "Less developed than RAFM steels"
        }
      ],
      comparisonWithFission: {
        fusionWasteDecayTime: "~100 years to reach clearance levels",
        fissionWasteDecayTime: "~100,000+ years for spent fuel (geological disposal needed)",
        fusionHighLevelWaste: "None (no chain reaction products, no actinides)",
        fissionHighLevelWaste: "Significant (plutonium, minor actinides, fission products)",
        fusionWasteVolume: "Estimated similar order of magnitude per GW·year",
        proliferationRisk: "Fusion: minimal (no enrichment, no plutonium production). Fission: significant."
      }
    },
    safety: {
      summary: "Fusion has inherent safety advantages over fission: no chain reaction, limited fuel inventory, no meltdown risk, and self-quenching plasma behavior.",
      characteristics: [
        {
          feature: "No chain reaction",
          detail: "Fusion is not a chain reaction. If conditions are disrupted, fusion stops immediately. There is no equivalent of a fission criticality accident.",
          comparison: "Fission requires active control to prevent runaway chain reaction"
        },
        {
          feature: "Limited fuel inventory",
          detail: "A fusion reactor contains only a few grams of fuel at any time. There is no large stored energy source.",
          comparison: "Fission reactor contains years' worth of fuel (many tonnes of enriched uranium)"
        },
        {
          feature: "No meltdown possible",
          detail: "Plasma self-quenches within milliseconds if containment is lost. No Chernobyl or Fukushima-type accident is physically possible.",
          comparison: "Fission reactors require decay heat removal for days after shutdown"
        },
        {
          feature: "Tritium containment",
          detail: "Tritium is radioactive (beta emitter, 12.3y half-life) but low energy. Primary risk is inhalation/ingestion. Contained in multiple barriers. Total inventory ~1-2 kg in a reactor.",
          comparison: "Much smaller radioactive inventory than fission plant. Tritium hazard is manageable with established techniques."
        },
        {
          feature: "No long-lived actinides",
          detail: "Fusion produces no plutonium, uranium, or other long-lived radioactive waste requiring geological disposal.",
          comparison: "Fission produces plutonium and minor actinides that remain dangerous for millennia"
        },
        {
          feature: "Magnetic/thermal energy stored",
          detail: "Superconducting magnets store significant energy. Magnet quench scenarios must be managed but are an engineering (not nuclear) safety issue.",
          comparison: "Well-understood from MRI and particle accelerator experience"
        }
      ],
      tritiumSafety: {
        biologicalHazard: "Low energy beta emitter (18.6 keV max). Cannot penetrate skin. Primary hazard is inhalation or ingestion of tritiated water.",
        inventory: "A fusion reactor would contain ~1-2 kg of tritium total (in plasma, breeding blanket, and processing systems).",
        containment: "Multiple containment barriers: vacuum vessel, secondary containment, building ventilation with tritium recovery systems.",
        worstCase: "Complete tritium release scenario would result in doses well below emergency evacuation thresholds at site boundary.",
        regulations: "Established regulatory framework from CANDU reactors and weapons facilities. Well-understood handling procedures."
      }
    },
    environment: {
      fuelAbundance: {
        deuterium: "Practically unlimited. 1 in 6,700 hydrogen atoms in seawater. One gallon of seawater contains enough D for ~300 gallons of gasoline energy equivalent.",
        lithium: "Large reserves (~14 million tonnes identified). Also extractable from seawater. Dual demand with battery industry.",
        tritium: "Must be bred from lithium in the reactor. Not naturally available in useful quantities."
      },
      carbonFootprint: {
        lifecycle: "Estimated 2-10 gCO2/kWh (lifecycle), comparable to wind and nuclear fission.",
        operation: "Zero direct CO2 emissions during operation.",
        construction: "Embodied carbon in concrete, steel, and specialized materials.",
        comparison: "Solar: 20-50, Wind: 7-15, Nuclear fission: 5-15, Gas: 400-500, Coal: 800-1000 gCO2/kWh"
      },
      landUse: {
        estimate: "A fusion power plant would have a footprint similar to a conventional power station (~1-2 km²) for 1+ GW output.",
        comparison: "Much smaller than solar (~10-20 km²/GW) or wind (~100-200 km²/GW including spacing). Similar to fission."
      },
      waterUse: {
        estimate: "Similar to any thermal power plant using a steam cycle. Dry cooling possible but reduces efficiency.",
        comparison: "Comparable to nuclear fission and fossil fuel plants."
      }
    }
  },

  // ============================================================
  // SECTION 5: TIMELINE SCENARIOS
  // ============================================================
  timelineScenarios: {
    optimistic: {
      label: "Optimistic (Private sector targets)",
      firstNetElectricity: "2030-2035",
      firstCommercialPlant: "2035-2040",
      gridScale: "2040-2050",
      assumptions: "HTS magnets work at scale, no showstopper engineering issues, adequate funding, favorable regulation",
      probability: "10-20%",
      backedBy: ["CFS", "Helion", "Tokamak Energy", "Some venture investors"]
    },
    moderate: {
      label: "Moderate (Government program targets)",
      firstNetElectricity: "2035-2040",
      firstCommercialPlant: "2040-2050",
      gridScale: "2050-2060",
      assumptions: "Major technical milestones achieved on schedule, sustained funding, ITER-like delays avoided in next-gen devices",
      probability: "30-40%",
      backedBy: ["UK STEP program", "US Bold Decadal Vision", "Mainstream fusion community"]
    },
    pessimistic: {
      label: "Pessimistic (Historical extrapolation)",
      firstNetElectricity: "2045-2055",
      firstCommercialPlant: "2055-2070",
      gridScale: "2070+",
      assumptions: "Major engineering challenges persist, materials take longer to qualify, ITER-like delays repeat",
      probability: "30-40%",
      backedBy: ["Some academic physicists", "Historical trend analysis", "Energy system modelers"]
    },
    neverViable: {
      label: "Not viable at scale",
      description: "Fusion never becomes economically competitive with alternatives",
      assumptions: "Materials/tritium challenges prove intractable, or renewables+storage become so cheap that fusion has no market niche",
      probability: "10-20%",
      backedBy: ["Some energy economists", "Fusion skeptics"]
    }
  },

  // ============================================================
  // SECTION 6: FUNDING LANDSCAPE
  // ============================================================
  funding: {
    privateSector: {
      total: "$9.77B cumulative across 53 companies (FIA Global Fusion Industry Report, Jul 2025; $2.64B raised in the prior 12 months); 2026 momentum continued (Helion $465M Series G at $15.5B valuation, Inertia Enterprises $450M for laser ICF, Pacific Fusion $900M Series A)",
      trend: "Exponential growth since 2020; major rounds continued through 2025-2026",
      topCompanies: [
        { name: "CFS", amount: "~$3B" },
        { name: "Helion Energy", amount: "~$1.5B raised ($465M Series G Jun 2026, $15.5B valuation)" },
        { name: "TAE Technologies", amount: "$1.3B+ (plus $6B TMTG merger, stock deal)" },
        { name: "Pacific Fusion", amount: "$900M Series A (milestone-released)" },
        { name: "Inertia Enterprises", amount: "$450M (Feb 2026)" },
        { name: "Marvel Fusion", amount: "~EUR 385M (~$420M)" },
        { name: "Tokamak Energy", amount: "$336M+" },
        { name: "Zap Energy", amount: "$330M" },
        { name: "General Fusion", amount: "$300M+ (going public via SVAC reverse merger)" },
        { name: "Proxima Fusion", amount: "~€200M (~$215M)" },
        { name: "Type One Energy", amount: "$160M+" },
        { name: "First Light Fusion", amount: "$100M+" }
      ],
      notableInvestors: ["Nvidia", "Google / GV", "Breakthrough Energy Ventures", "Temasek", "Bill Gates", "Soros Fund Management", "General Catalyst", "Bessemer Venture Partners", "Lightspeed", "Lowercarbon Capital", "Eric Schmidt", "Ken Griffin", "Eni", "Equinor", "Chevron", "EQT Ventures", "Siemens Energy Ventures", "SoftBank Vision Fund 2"],
      caveat: "Funding figures are company-reported and may include milestone-tied commitments, SPAC valuations, or stock deals. Actual capital deployed may differ. The $6B TAE-TMTG merger is a stock transaction, not direct R&D capital."
    },
    government: [
      {
        country: "International (ITER)",
        program: "ITER Project",
        amount: "$22B+ ITER budget (EUR 5B overrun Jul 2024; DOE total estimate ~$65B incl. in-kind)",
        status: "Under construction; Baseline 2024 targets first plasma 2034"
      },
      {
        country: "USA",
        program: "Bold Decadal Vision / DOE Milestone Program / FIRE Collaboratives / new Office of Fusion",
        amount: "Fusion Energy Sciences ~$806M enacted (FY2026, ~21% to ITER); FY2027 request $755.3M (down $50M); Milestone Program authorized $415M through FY2027 but only ~$98M appropriated",
        status: "Active; DOE established a new Office of Fusion (FY2027 request $10M to stand it up); $107M FIRE Collaboratives selectees announced; advocates warn China outspends US ~3x"
      },
      {
        country: "UK",
        program: "STEP Program + Fusion Strategy",
        amount: "£2.5B committed for STEP + £45M Sunrise AI supercomputer + £650M+ fusion R&D",
        status: "Active; new UK Fusion Energy Strategy published Apr 2026; West Burton site transferred to UKAEA; Construction/Magnets/Information Systems partners in place; operations targeted 2040"
      },
      {
        country: "China",
        program: "EAST, BEST, HL-2M, CFETR + CNNC-led China Fusion Energy Co. (CFEC)",
        amount: "Est. $1.5-2B/year government; CFEC state company created Jul 2025 with ~15B yuan (~$2.1B) registered capital; analysts cite a ~$6.5B national fusion buildout (reportedly ~3x US spend)",
        status: "Active; EAST 1,066s record (Jan 2025); BEST under construction (first plasma target end-2027, Q~5); CFETR in design; CNNC targets commercial fusion ~2050"
      },
      {
        country: "EU",
        program: "Euratom/EUROfusion DEMO",
        amount: "~€5.6B (2021-2025 framework period incl. ITER contribution); successor programme under negotiation",
        status: "Active; EU-DEMO in pre-conceptual design targeting 2050s"
      },
      {
        country: "Japan",
        program: "JT-60SA, Broader Approach, national fusion strategy",
        amount: "$2B+ (including JT-60SA)",
        status: "Active; JT-60SA integrated commissioning restarted May 2026 after in-vessel coil upgrade; ~6-month plasma campaign begins late 2026"
      },
      {
        country: "South Korea",
        program: "KSTAR, K-DEMO",
        amount: "$1B+ (estimated)",
        status: "Active; KSTAR operational with tungsten divertor; targeting 300s at 100M°C"
      }
    ],
    caveat: "Government funding figures are estimates from public sources. Many governments do not publish consolidated fusion budgets. China's spending is particularly opaque. EU figures include ITER contributions. Figures may not be directly comparable across countries due to accounting differences."
  },

  // ============================================================
  // SECTION 7: FEASIBILITY SCORES & CRITICAL PATH
  // ============================================================
  feasibilityScores: [
    {
      dimension: "Physics Feasibility",
      score: 8,
      maxScore: 10,
      label: "Strong",
      detail: "Fundamental physics is proven. D-T fusion works. Ignition achieved (NIF). Remaining question: burning plasma behavior at reactor scale.",
      color: "#10b981",
      subParameters: [
        {
          name: "Plasma Confinement (Triple Product)",
          score: 9, maxScore: 10,
          status: "Near target",
          detail: "The fusion triple product (temperature \u00d7 density \u00d7 confinement time) has improved ~10,000\u00d7 since 1970. JET reached ~40% of the ignition threshold. Multiple devices now operate in the reactor-relevant regime for individual parameters.",
          evidence: "JET achieved Q=0.67 (1997). KSTAR held 100M°C for 48 seconds. EAST sustained H-mode plasma for 1,066 seconds (Jan 2025). W7-X set world record triple product for >30s durations (May 2025).",
          gap: "Achieving all three parameters simultaneously at reactor scale, in sustained steady-state, remains to be demonstrated in a single device."
        },
        {
          name: "Energy Gain (Q Factor) Physics",
          score: 8, maxScore: 10,
          status: "Demonstrated in ICF",
          detail: "NIF proved Q>1 is physically achievable (target gain ~1.5\u20131.9). The physics of energy gain is well understood for both magnetic and inertial confinement.",
          evidence: "NIF ignition (Dec 2022): 3.15 MJ. Repeated 10+ times; peak 8.6 MJ at 4.13x target gain (Apr 2025).",
          gap: "No magnetic confinement device has achieved Q>1. ITER targets Q=10 but is years away. SPARC targets Q\u22652."
        },
        {
          name: "Fuel Cycle Physics (D-T Cross Section)",
          score: 9, maxScore: 10,
          status: "Well established",
          detail: "The D-T fusion cross section peaks around 64 keV (~700 million \u00b0C) and is the most favorable known fusion reaction. Nuclear data is precise and well-validated.",
          evidence: "Measured in accelerators and confirmed in tokamak/ICF experiments for decades. No physics uncertainty here.",
          gap: "Minimal. D-T physics is settled. Alternative fuels (D-He3, p-B11) have much lower cross sections and require far higher temperatures."
        },
        {
          name: "Plasma Stability & Disruption Control",
          score: 6, maxScore: 10,
          status: "Active challenge",
          detail: "Tokamak plasmas can suffer disruptions \u2014 sudden losses of confinement that dump energy into vessel walls. At ITER scale, unmitigated disruptions could cause structural damage.",
          evidence: "Disruption prediction via ML reaches >95% accuracy on DIII-D/EAST. Shattered pellet injection is ITER\u2019s baseline mitigation. Stellarators and FRCs avoid disruptions entirely by design.",
          gap: "ITER-scale disruption mitigation is untested. Runaway electron beam formation during disruptions is a serious open problem. Disruption-free high-performance operation has not been demonstrated at reactor-relevant parameters."
        },
        {
          name: "Burning Plasma Behavior",
          score: 5, maxScore: 10,
          status: "Uncharted territory",
          detail: "In a burning plasma, alpha particles from fusion reactions provide the dominant heating (self-heating). This regime has barely been accessed experimentally. New instabilities (e.g., Alfv\u00e9n eigenmodes driven by fast alpha particles) may emerge.",
          evidence: "JET saw alpha heating contributing ~10\u201315% of plasma heating. NIF achieved a form of burning plasma in ICF. Theory and simulations exist but are not fully validated.",
          gap: "No magnetic device has operated in the alpha-dominated heating regime. SPARC and ITER are designed to access it. Behavior could be better or worse than predicted."
        },
        {
          name: "Plasma Exhaust & Divertor Physics",
          score: 6, maxScore: 10,
          status: "Challenging",
          detail: "Exhaust heat from the plasma must be spread over a large enough area to avoid melting divertor components. Power densities can exceed 10 MW/m\u00b2 steady-state.",
          evidence: "Detached divertor operation demonstrated on several tokamaks. Advanced divertor geometries (Super-X, snowflake) tested on MAST-U.",
          gap: "Reactor-scale heat exhaust with acceptable erosion rates is unproven. The \u2018narrow scrape-off layer\u2019 problem means heat concentrates in a thin channel."
        }
      ]
    },
    {
      dimension: "Engineering Feasibility",
      score: 4,
      maxScore: 10,
      label: "Significant Gaps",
      detail: "Materials, tritium breeding, plasma-facing components, and full plant integration are undemonstrated at reactor-relevant conditions.",
      color: "#f59e0b",
      subParameters: [
        {
          name: "Superconducting Magnets",
          score: 7, maxScore: 10,
          status: "Major progress",
          detail: "HTS (REBCO) magnets are a game-changer, enabling much stronger fields in smaller, cheaper devices. CFS demonstrated a 20T large-bore HTS magnet in 2021. ITER uses conventional Nb\u2083Sn magnets, already manufactured.",
          evidence: "CFS 20T magnet (2021). ITER toroidal field coils produced. Tokamak Energy HTS prototypes. Industrial REBCO tape production scaling.",
          gap: "Full toroidal HTS magnet set never operated in a fusion device. Radiation effects on HTS tape in 14.1 MeV neutron environment unknown. REBCO tape cost must fall ~5\u201310\u00d7 for commercial viability. Joint design and quench protection at scale."
        },
        {
          name: "Tritium Breeding Blanket",
          score: 3, maxScore: 10,
          status: "Critical gap",
          detail: "D-T reactors must breed their own tritium by capturing fusion neutrons in lithium blankets. The tritium breeding ratio (TBR) must exceed 1.0 including all losses. This has never been demonstrated.",
          evidence: "Neutronics simulations predict TBR of 1.05\u20131.15 is achievable. Small-scale lithium ceramic and liquid metal blanket tests conducted. ITER will test 6 different Test Blanket Module (TBM) concepts.",
          gap: "No integrated tritium breeding demonstration exists. Real-world TBR is unknown (ports, penetrations, streaming paths reduce it). Tritium extraction from breeding material at scale unproven. Structural integrity of blankets under neutron irradiation untested."
        },
        {
          name: "First Wall & Plasma-Facing Materials",
          score: 3, maxScore: 10,
          status: "Critical gap",
          detail: "The first wall and divertor must withstand extreme neutron bombardment (14.1 MeV), intense heat flux, plasma erosion, and electromagnetic forces \u2014 simultaneously and for years.",
          evidence: "Tungsten and beryllium used in current tokamaks. RAFM steels (EUROFER97) developed for reactor use. Extensive fission-proxy irradiation tests performed.",
          gap: "No material has been tested under true 14.1 MeV fusion neutron conditions at reactor-relevant fluence (50\u2013150 dpa). Helium embrittlement at these energies may be qualitatively different from fission data. IFMIF-DONES facility (the dedicated test source) is years from operation."
        },
        {
          name: "Tritium Fuel Cycle & Processing",
          score: 4, maxScore: 10,
          status: "Partially demonstrated",
          detail: "A fusion plant must process, purify, and reinject tritium at high throughput with >99.9% recovery. Tritium permeation, accounting, and environmental release must be tightly controlled.",
          evidence: "ITER is building the Tokamak Exhaust Processing system. Tritium handling experience from CANDU reactors and weapons complex. JET operated with tritium (D-T campaigns).",
          gap: "Full closed-loop tritium cycle at power-plant throughput never demonstrated. Tritium inventory control at the kg-scale in a plant environment. Permeation barriers and accountancy at required precision."
        },
        {
          name: "Remote Maintenance & Availability",
          score: 3, maxScore: 10,
          status: "Early development",
          detail: "Activated reactor components must be maintained and replaced entirely by remote handling systems. Plant availability (uptime) determines economic viability but is completely unknown.",
          evidence: "JET and ITER have developed remote handling systems. Robotics advancing rapidly. UKAEA has a dedicated remote maintenance R&D program.",
          gap: "Remote replacement of large, activated in-vessel components (blankets, divertors) at commercial speed is unproven. How often components need replacement is unknown. Target availability of 70\u201380% is assumed but has no basis in data."
        },
        {
          name: "Heat Exhaust & Power Conversion",
          score: 5, maxScore: 10,
          status: "Conventional, with caveats",
          detail: "Fusion heat would drive a conventional steam turbine (Rankine cycle) or potentially a Brayton cycle. This part leverages existing power engineering. The challenge is the interface: extracting heat from a hostile nuclear environment.",
          evidence: "Steam turbine technology is mature. Helium and molten salt coolant loops are under development. High-temperature blankets could improve efficiency.",
          gap: "The thermal-hydraulic interface between the breeding blanket and the power conversion system is undesigned at scale. Pulsed operation (if any) complicates thermal management. Thermal efficiency estimates (33\u201340%) are projections."
        },
        {
          name: "Plant Integration & Balance of Plant",
          score: 2, maxScore: 10,
          status: "Conceptual only",
          detail: "A complete fusion power plant requires integration of plasma device, magnets, blankets, tritium systems, remote handling, cryogenics, power conversion, control systems, and shielding into a single functioning unit.",
          evidence: "Power plant design studies exist (ARIES, EU-DEMO, ARC, STEP concepts). These are paper designs informed by physics and engineering models.",
          gap: "No integrated fusion power plant design has been built. Parasitic power consumption (cryogenics, heating, pumping, tritium) could be 100\u2013200+ MW. The recirculating power fraction is a key unknown. First-of-a-kind integration challenges are historically severe in nuclear projects."
        }
      ]
    },
    {
      dimension: "Economic Feasibility",
      score: 3,
      maxScore: 10,
      label: "Highly Uncertain",
      detail: "No actual cost data from any fusion power plant. Estimates range $50-200+/MWh. Must compete against rapidly cheapening renewables+storage.",
      color: "#ef4444",
      subParameters: [
        {
          name: "Capital Cost (Overnight)",
          score: 2, maxScore: 10,
          status: "Highly speculative",
          detail: "Estimates for a first-of-a-kind (FOAK) fusion plant range from $5\u201320+ billion. Nth-of-a-kind projections are $3\u20138 billion for a ~1 GW plant, comparable to advanced fission. ITER's $22B+ cost is not representative of a power plant but illustrates the risk.",
          evidence: "ARIES-AT study: ~$5/W overnight. EU-DEMO: ~$7\u201310/W projected. ARC (CFS): claims $3\u20135/W. These are models, not actuals.",
          gap: "Zero actual construction cost data. ITER cost overruns (4\u20135\u00d7 original estimate) suggest projections should be treated with extreme caution. The gap between FOAK and NOAK costs could be enormous."
        },
        {
          name: "Operating & Maintenance Costs",
          score: 2, maxScore: 10,
          status: "Unknown",
          detail: "Operating costs are dominated by component replacement (blankets, divertors), tritium management, and staffing. If in-vessel components need replacement every 2\u20135 years (plausible given materials uncertainty), this drives costs significantly.",
          evidence: "Fission plants: ~$15\u201325/MWh O&M. Fusion estimates: $10\u201340/MWh, but highly uncertain.",
          gap: "Component lifetime under reactor conditions is unknown. Replacement cost and duration are unknown. Tritium cost and processing overhead are unknown."
        },
        {
          name: "Availability Factor / Capacity Factor",
          score: 2, maxScore: 10,
          status: "Assumed, not demonstrated",
          detail: "Power plant economics depend heavily on how much of the time the plant is generating power. Fusion designs assume 70\u201380% capacity factor, comparable to nuclear fission (~90%). But there is no empirical basis for this.",
          evidence: "ITER is not designed for high availability. No fusion device has operated as a power plant. Fission took decades to reach 90% availability.",
          gap: "Component replacement schedules, unplanned outages, and startup/shutdown cycles are all unknown. If availability is 30\u201350% (plausible for a first-of-kind), LCOE doubles or triples."
        },
        {
          name: "Levelized Cost of Electricity (LCOE)",
          score: 2, maxScore: 10,
          status: "Speculative ranges only",
          detail: "LCOE combines capital cost, O&M, fuel, and availability into a single $/MWh figure. Fusion estimates span a very wide range.",
          evidence: "Optimistic: $50\u201380/MWh (comparable to new nuclear fission). Central: $80\u2013150/MWh. Pessimistic: $150\u2013300+/MWh. Current solar+storage: $30\u201360/MWh and falling.",
          gap: "Every input to the LCOE calculation (capital, O&M, availability, lifetime) is uncertain by a factor of 2\u20135\u00d7. The resulting LCOE uncertainty is very large."
        },
        {
          name: "Competitiveness vs Alternatives",
          score: 4, maxScore: 10,
          status: "Uncertain market position",
          detail: "Fusion must compete with renewables+storage, advanced fission, geothermal, and potentially other technologies that will be mature by the 2040s\u20132050s when fusion arrives.",
          evidence: "Solar LCOE has fallen ~90% in a decade. Battery storage costs falling ~15%/year. Advanced fission (SMRs) targeting $60\u201380/MWh. Grid-scale storage solutions proliferating.",
          gap: "Fusion may find a niche in baseload, industrial process heat, hydrogen production, or locations where renewables are insufficient. But if it costs 2\u20133\u00d7 renewables+storage, market uptake will be limited to premium applications."
        },
        {
          name: "Learning Rate & Cost Reduction Pathway",
          score: 3, maxScore: 10,
          status: "Plausible but unproven",
          detail: "Like any energy technology, fusion costs should decrease with deployment experience. Fission saw limited learning; solar saw dramatic learning. Fusion's learning rate is unknowable at this stage.",
          evidence: "Nuclear fission: costs actually increased over time in many countries (negative learning). Solar: ~24% cost reduction per doubling of capacity. Wind: ~15%.",
          gap: "Fusion is a complex, nuclear-class technology. It may follow the fission pattern (limited learning due to safety requirements and bespoke engineering) rather than the solar pattern (modular, scalable manufacturing)."
        },
        {
          name: "Fuel Costs",
          score: 9, maxScore: 10,
          status: "Negligible",
          detail: "Deuterium is extracted from ordinary water (~$1,000/kg, essentially free per unit energy). Lithium is abundant. Fuel cost is a negligible fraction of total cost.",
          evidence: "1 kg of D-T fuel releases ~340 GJ. Fuel cost is estimated at <$0.01/MWh. Even lithium-6 enrichment costs are small relative to plant capital.",
          gap: "Minimal. Fuel cost is one of fusion's genuine advantages over fossil fuels and even fission."
        }
      ]
    },
    {
      dimension: "Timeline Confidence",
      score: 4,
      maxScore: 10,
      label: "Low-Medium",
      detail: "2040s grid power is plausible but far from certain. 2030s claims from private companies are aspirational. Historical track record is poor.",
      color: "#f59e0b",
      subParameters: [
        {
          name: "Private Sector Targets (2030s)",
          score: 3, maxScore: 10,
          status: "Aspirational",
          detail: "Several private companies target net electricity or demonstration plants in the early 2030s: CFS (ARC ~2032\u201335), Helion (Microsoft PPA by 2028), Tokamak Energy (2030s). The Fusion Industry Association\u2019s survey shows median company expectation of first power by early 2030s.",
          evidence: "CFS SPARC first plasma target: 2026\u20132027. Helion Polaris: 2025\u20132026. Both are on stated timelines per company reports. Significant capital raised to support these timelines.",
          gap: "History of private fusion: General Fusion, TAE, and others have repeatedly pushed back timelines. The jump from \u2018first plasma in a demo\u2019 to \u2018electricity on the grid\u2019 requires solving all the engineering challenges simultaneously. No private company has yet operated a device that produces fusion neutrons at meaningful energy levels."
        },
        {
          name: "Government Program Targets (2040s)",
          score: 5, maxScore: 10,
          status: "More conservative, still uncertain",
          detail: "Government programs set more conservative targets: UK STEP (~2040), EU-DEMO (2050s), China CFETR (2040s), US Bold Decadal Vision (fusion pilot plant by 2035\u20132040). These timelines have better institutional backing but are also subject to political and funding risk.",
          evidence: "UK has selected a site for STEP and allocated initial funding. US DOE has a milestone-based fusion program. China is investing aggressively.",
          gap: "Government fusion timelines have historically slipped dramatically (ITER being the prime example). Sustained political commitment across election cycles is not guaranteed. Funding may not match ambitions."
        },
        {
          name: "Historical Accuracy of Fusion Timelines",
          score: 2, maxScore: 10,
          status: "Very poor track record",
          detail: "Fusion has been \u201c30 years away\u201d for 50+ years. A 1976 ERDA study projected fusion power by 2000 with adequate funding \u2014 that funding never materialized. Every major project (TFTR, JET, ITER) has taken longer and cost more than projected.",
          evidence: "ITER: 2001 baseline had first plasma in 2016 at ~$5B. Actual: first plasma ~2035 at $22B+. JET D-T campaign: originally planned for early 1990s, achieved 1997. TFTR: 2\u00d7 over budget.",
          gap: "The pattern is consistent: fusion projects underestimate complexity, cost, and time. There are structural reasons (novel technology, nuclear safety, international governance) that make this likely to continue."
        },
        {
          name: "Regulatory & Licensing Timeline",
          score: 5, maxScore: 10,
          status: "Developing",
          detail: "Regulatory frameworks are being developed in key jurisdictions. The UK has classified fusion as non-nuclear (more favorable). The US NRC is developing a fusion-specific framework. Speed of licensing will significantly affect deployment timelines.",
          evidence: "UK: fusion regulated under existing environment/health frameworks, not nuclear. US: NRC Part 30 pathway proposed (byproduct material). Canada developing position.",
          gap: "US NRC final rules not complete. First-of-a-kind licensing could take 3\u20135+ years even under favorable rules. Environmental impact assessments, public hearings, and construction permits add time. International harmonization is lacking."
        },
        {
          name: "Supply Chain & Industrial Readiness",
          score: 4, maxScore: 10,
          status: "Immature",
          detail: "A fusion industry requires specialized supply chains: REBCO superconducting tape, enriched lithium-6, tritium-compatible materials, large vacuum vessels, remote handling robotics, and specialized construction capabilities.",
          evidence: "REBCO tape production is scaling (driven partly by fusion demand). Vacuum vessel fabrication demonstrated for ITER. Nuclear-qualified materials and welding exist from fission industry.",
          gap: "REBCO production must scale ~10\u2013100\u00d7 for a fleet of fusion plants. Lithium-6 enrichment capacity is very limited. Tritium supply for startup is constrained (~25 kg globally). Specialized component manufacturers are few."
        },
        {
          name: "Workforce & Expertise",
          score: 5, maxScore: 10,
          status: "Growing but thin",
          detail: "The fusion workforce is growing rapidly (driven by private sector hiring) but remains small compared to what a commercial industry would need. Key skills: plasma physics, nuclear engineering, superconductor engineering, remote handling, tritium chemistry.",
          evidence: "FIA reports rapid employment growth in fusion companies. University programs expanding. ITER and national labs training next generation.",
          gap: "Scaling from ~5,000 fusion professionals globally to the tens of thousands needed for an industry. Competition with fission, defense, and other sectors for nuclear-qualified engineers. Training pipeline takes 5\u201310 years."
        }
      ]
    }
  ],
  criticalPath: [
    {
      item: "SPARC achieves Q>2",
      expected: "2027-2028",
      impact: "Validates compact HTS tokamak path; could accelerate timeline by a decade vs ITER-only approach",
      probability: "60-70%",
      category: "physics"
    },
    {
      item: "Tritium breeding ratio >1 demonstrated",
      expected: "Late 2030s (ITER TBM)",
      impact: "Enables or blocks D-T fusion at fleet scale. Without this, D-T fusion cannot sustain itself.",
      probability: "50-70%",
      category: "engineering"
    },
    {
      item: "Materials qualified to 50+ dpa (14.1 MeV neutrons)",
      expected: "2035-2045 (needs IFMIF-DONES)",
      impact: "Determines component lifetime, replacement frequency, and plant economics",
      probability: "Uncertain - facility not yet operational",
      category: "materials"
    },
    {
      item: "First net-electric fusion plant",
      expected: "2035-2045",
      impact: "Proves commercial viability concept. Determines real-world cost and availability data.",
      probability: "40-60% by 2045",
      category: "engineering"
    },
    {
      item: "Fusion electricity cost-competitive (<$80/MWh)",
      expected: "2045-2060 (if ever)",
      impact: "Determines whether fusion has a market or remains a science experiment",
      probability: "30-50%",
      category: "economics"
    }
  ]
};

// Make available globally
if (typeof window !== 'undefined') {
  window.FUSION_DATA = FUSION_DATA;
}
if (typeof module !== 'undefined') {
  module.exports = FUSION_DATA;
}
