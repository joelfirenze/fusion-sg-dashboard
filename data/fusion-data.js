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
  lastUpdated: "2025-05-01",
  dataDisclaimer: "Data compiled from public sources. Projected dates are targets, not guarantees. Private company claims may not be independently verified. Last comprehensive update: May 2025.",

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
      funding: "$22B+ (estimated total cost, originally $5B)",
      status: "Under Construction (significant delays)",
      milestones: [
        { year: 2020, event: "Assembly phase began", achieved: true },
        { year: 2021, event: "Cryostat base installed", achieved: true },
        { year: 2025, event: "First plasma (original target)", achieved: false, note: "Delayed multiple times" },
        { year: 2035, event: "First plasma (revised target)", achieved: false, confidence: "low", note: "Subject to further revision" },
        { year: 2039, event: "Full D-T operations (revised)", achieved: false, confidence: "low" }
      ],
      keyMetrics: {
        plasmaVolume: "840 m³",
        magneticField: "5.3 T (toroidal)",
        targetQ: 10,
        targetFusionPower: "500 MW",
        plasmaCurrent: "15 MA"
      },
      uncertainties: [
        "Repeated schedule slippages and cost overruns",
        "Component manufacturing and assembly challenges",
        "Management and governance complexity across 35 nations",
        "Whether design will achieve Q=10 as planned"
      ],
      sources: ["iter.org", "ITER Organization annual reports", "IAEA documentation"]
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
      funding: "$2B+ (including $1.8B Series B in 2021)",
      status: "Building SPARC device",
      milestones: [
        { year: 2021, event: "Demonstrated 20T HTS magnet (world record for fusion-class)", achieved: true },
        { year: 2023, event: "Broke ground on SPARC facility in Devens, MA", achieved: true },
        { year: 2025, event: "SPARC construction ongoing", achieved: true, note: "On track per company statements" },
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
        "HTS magnet manufacturing at scale is unproven",
        "Jump from SPARC to commercial ARC requires major engineering",
        "Net electricity generation has not been demonstrated"
      ],
      sources: ["cfs.energy", "Nature papers on HTS magnets", "MIT PSFC publications"]
    },
    {
      id: "helion",
      name: "Helion Energy",
      country: "USA",
      type: "Field-Reversed Configuration (FRC)",
      sector: "private",
      approach: "Pulsed, magnetically-confined FRC with direct energy capture. Targets D-He3 fuel (aneutronic).",
      description: "Building Polaris, a 7th-generation prototype. Has a power purchase agreement with Microsoft. Uses pulsed FRC approach with direct electricity conversion.",
      founded: 2013,
      funding: "$2.2B+ total (including $500M Series E led by Sam Altman)",
      status: "Building Polaris prototype",
      milestones: [
        { year: 2021, event: "Trenta (6th gen) reached 100M°C plasma temperatures", achieved: true },
        { year: 2023, event: "Signed PPA with Microsoft for electricity by 2028", achieved: true },
        { year: 2024, event: "Polaris prototype under construction in Everett, WA", achieved: true },
        { year: "2025-2026", event: "Polaris commissioning and first plasma", achieved: false, confidence: "medium" },
        { year: 2028, event: "Deliver electricity to Microsoft (PPA target)", achieved: false, confidence: "low", note: "Very aggressive timeline" },
        { year: "2030s", event: "Commercial fusion power plants", achieved: false, confidence: "low" }
      ],
      keyMetrics: {
        plasmaTemp: ">100 million °C (achieved in Trenta)",
        fuelCycle: "D-³He (aneutronic target), D-D initially",
        energyCapture: "Direct electromagnetic energy conversion",
        targetPower: "50+ MW (Polaris demonstration)"
      },
      uncertainties: [
        "D-He3 fuel cycle requires much higher temperatures than D-T",
        "No fusion device has demonstrated net electricity generation",
        "He-3 availability is extremely limited unless bred from D-D",
        "2028 Microsoft PPA is widely considered highly ambitious",
        "Direct energy conversion at scale is unproven"
      ],
      sources: ["helionenergy.com", "Microsoft PPA announcement", "SEC filings"]
    },
    {
      id: "tae",
      name: "TAE Technologies",
      country: "USA",
      type: "Field-Reversed Configuration (FRC)",
      sector: "private",
      approach: "Beam-driven FRC targeting p-B11 (proton-boron) aneutronic fusion",
      description: "One of the oldest private fusion companies. Uses neutral beam injection to sustain FRC plasmas. Ultimate target is p-B11 fuel cycle.",
      founded: 1998,
      funding: "$1.2B+ total raised",
      status: "Operating Copernicus (Da Vinci successor)",
      milestones: [
        { year: 2015, event: "C-2U sustained FRC for 5+ ms", achieved: true },
        { year: 2017, event: "Norman (C-2W) achieved stable FRC plasmas at 50M+ °C", achieved: true },
        { year: 2022, event: "Norman achieved 75 million °C", achieved: true },
        { year: 2024, event: "Copernicus device under construction/commissioning", achieved: true },
        { year: "2025-2026", event: "Copernicus operations, targeting higher temperatures", achieved: false, confidence: "medium" },
        { year: "Late 2020s", event: "Da Vinci - net energy prototype", achieved: false, confidence: "low" },
        { year: "2030s", event: "Commercial p-B11 fusion power", achieved: false, confidence: "very low" }
      ],
      keyMetrics: {
        plasmaTemp: "75 million °C (achieved in Norman)",
        fuelCycle: "p-¹¹B (ultimate target, requires ~1 billion °C)",
        beamPower: "Multi-MW neutral beam injection"
      },
      uncertainties: [
        "p-B11 requires ~10x higher temperature than D-T (extremely challenging)",
        "Cross-section for p-B11 is much lower than D-T",
        "No FRC device has achieved net energy gain",
        "Bremsstrahlung radiation losses are severe at required temperatures"
      ],
      sources: ["tae.com", "Nature Physics publications", "FIA member data"]
    },
    {
      id: "tokamak_energy",
      name: "Tokamak Energy",
      country: "UK",
      type: "Spherical Tokamak (HTS)",
      sector: "private",
      approach: "Compact spherical tokamak with HTS magnets",
      description: "UK-based company building compact spherical tokamaks. Demonstrated HTS magnets and plasma operations.",
      founded: 2009,
      funding: "$250M+",
      status: "Operating ST40, developing ST80-HTS",
      milestones: [
        { year: 2022, event: "ST40 achieved 100 million °C ion temperature", achieved: true },
        { year: 2024, event: "Demonstrated HTS magnet technology", achieved: true },
        { year: "2026-2028", event: "ST80-HTS with full HTS magnet set", achieved: false, confidence: "medium" },
        { year: "Early 2030s", event: "ST-E1 net energy demonstration", achieved: false, confidence: "low" },
        { year: "Mid 2030s", event: "Commercial fusion pilot plant", achieved: false, confidence: "low" }
      ],
      keyMetrics: {
        plasmaTemp: "100 million °C (achieved in ST40)",
        magnetType: "HTS (REBCO)",
        configuration: "Spherical tokamak (tight aspect ratio)"
      },
      uncertainties: [
        "Spherical tokamaks have center-column engineering challenges",
        "Scaling from ST40 to commercial size is a major step",
        "Competition from larger conventional tokamak designs"
      ],
      sources: ["tokamakenergy.co.uk", "UK government fusion reports"]
    },
    {
      id: "general_fusion",
      name: "General Fusion",
      country: "Canada",
      type: "Magnetized Target Fusion",
      sector: "private",
      approach: "Magnetized target fusion using liquid metal compression",
      description: "Uses pneumatic pistons to compress a liquid metal liner around magnetized plasma. Building demonstration plant in UK.",
      founded: 2002,
      funding: "$300M+",
      status: "Building Lawson Machine 26 (LM26) demo in Culham, UK",
      milestones: [
        { year: 2021, event: "Announced demo plant at UKAEA Culham site", achieved: true },
        { year: 2023, event: "Construction of LM26 began", achieved: true },
        { year: "2025-2026", event: "LM26 commissioning", achieved: false, confidence: "medium" },
        { year: "2027-2028", event: "Demonstrate compression and fusion conditions", achieved: false, confidence: "low" },
        { year: "2030s", event: "Commercial pilot plant", achieved: false, confidence: "low" }
      ],
      keyMetrics: {
        approach: "Pneumatic piston compression of liquid metal",
        liquidMetal: "Molten lead-lithium",
        cycleRate: "~1 Hz pulsed operation"
      },
      uncertainties: [
        "Magnetized target fusion has not achieved net energy",
        "Plasma-liquid metal interface physics is complex",
        "Repetition rate and energy balance are unproven",
        "Symmetry of compression is challenging"
      ],
      sources: ["generalfusion.com", "UK BEIS fusion strategy documents"]
    },
    {
      id: "first_light",
      name: "First Light Fusion",
      country: "UK",
      type: "Inertial Confinement (Projectile)",
      sector: "private",
      approach: "Projectile-driven inertial confinement fusion using hypervelocity impacts",
      description: "Uses electromagnetic launchers to fire projectiles at fuel targets, creating fusion conditions through shock compression.",
      founded: 2011,
      funding: "$100M+",
      status: "Demonstrated fusion, developing power plant concept",
      milestones: [
        { year: 2022, event: "Achieved fusion (confirmed by UKAEA), first private company ICF demonstration", achieved: true },
        { year: 2023, event: "Published gain-capable target design (Machine 4)", achieved: true },
        { year: "2027-2028", event: "Machine 4 - demonstrate significant energy gain", achieved: false, confidence: "low" },
        { year: "2030s", event: "Pilot power plant", achieved: false, confidence: "low" }
      ],
      keyMetrics: {
        projectileSpeed: ">6.5 km/s hypervelocity impact",
        approach: "Amplified compression via shaped projectile geometry"
      },
      uncertainties: [
        "Energy gain from projectile fusion not yet demonstrated",
        "Repetition rate for power generation is a major challenge",
        "Target manufacturing cost and throughput unknown",
        "Very different engineering path from laser ICF"
      ],
      sources: ["firstlightfusion.com", "UKAEA confirmation of fusion achievement"]
    },
    {
      id: "zap_energy",
      name: "Zap Energy",
      country: "USA",
      type: "Sheared-Flow Z-Pinch",
      sector: "private",
      approach: "Sheared-flow stabilized Z-pinch (no magnets needed)",
      description: "Uses sheared plasma flows to stabilize Z-pinch configuration, eliminating need for expensive magnets.",
      founded: 2017,
      funding: "$200M+",
      status: "Operating FuZE-Q prototype",
      milestones: [
        { year: 2021, event: "Demonstrated sheared-flow stabilization in FuZE", achieved: true },
        { year: 2023, event: "FuZE-Q device operational, achieving fusion neutrons", achieved: true },
        { year: "2025-2026", event: "Higher performance FuZE-Q campaigns", achieved: false, confidence: "medium" },
        { year: "Late 2020s", event: "Demonstration of net energy", achieved: false, confidence: "low" },
        { year: "2030s", event: "Commercial Z-pinch fusion systems", achieved: false, confidence: "low" }
      ],
      keyMetrics: {
        advantage: "No superconducting magnets required",
        approach: "Sheared plasma flow stabilizes Z-pinch instabilities",
        size: "Potentially very compact fusion device"
      },
      uncertainties: [
        "Z-pinch stability at reactor-relevant conditions unproven",
        "Scaling to energy-producing conditions is a major physics question",
        "Electrode erosion and lifetime in reactor scenario",
        "Energy balance has not been demonstrated"
      ],
      sources: ["zapenergy.com", "Physical Review Letters publications"]
    },
    {
      id: "type_one",
      name: "Type One Energy",
      country: "USA",
      type: "Stellarator (HTS)",
      sector: "private",
      approach: "Optimized stellarator with HTS magnets, building on Wendelstein 7-X physics",
      description: "Developing a stellarator design that combines advanced optimization algorithms with HTS magnet technology.",
      founded: 2019,
      funding: "$100M+",
      status: "Design and component development",
      milestones: [
        { year: 2023, event: "Completed initial stellarator optimization design", achieved: true },
        { year: 2024, event: "Secured DOE milestone-based funding", achieved: true },
        { year: "2027-2029", event: "Prototype stellarator construction", achieved: false, confidence: "low" },
        { year: "2030s", event: "Demonstration power plant", achieved: false, confidence: "very low" }
      ],
      keyMetrics: {
        advantage: "Stellarators are inherently steady-state (no disruptions)",
        magnetType: "HTS (REBCO)",
        basis: "Builds on W7-X optimized stellarator physics"
      },
      uncertainties: [
        "Stellarator construction is extremely complex (3D magnet geometry)",
        "No stellarator has achieved reactor-relevant conditions",
        "Manufacturing of complex 3D HTS coils at scale",
        "Earlier stage than competing tokamak approaches"
      ],
      sources: ["typeoneenergy.com", "DOE fusion milestone program"]
    },
    {
      id: "nif",
      name: "NIF / LLNL",
      country: "USA",
      type: "Inertial Confinement (Laser)",
      sector: "government",
      approach: "Laser-driven inertial confinement fusion (indirect drive, hohlraum)",
      description: "The National Ignition Facility achieved scientific ignition in December 2022. Primarily a weapons science facility with fusion energy research benefits.",
      founded: 1997,
      funding: "$3.5B construction + $300M+/year operations",
      status: "Operational, achieved ignition",
      milestones: [
        { year: 2022, event: "First scientific ignition: 3.15 MJ fusion from 2.05 MJ laser (Q=1.5 target gain)", achieved: true },
        { year: 2023, event: "Repeated ignition with 3.88 MJ yield (highest ever)", achieved: true },
        { year: 2024, event: "Multiple ignition shots, refining understanding", achieved: true },
        { year: "2025+", event: "Continued ignition experiments, higher yields", achieved: false, confidence: "high" }
      ],
      keyMetrics: {
        laserEnergy: "2.05 MJ (192 beams)",
        peakFusionYield: "3.88 MJ (October 2023)",
        targetGainQ: "~1.5-1.9 (target gain, not wall-plug)",
        wallPlugEfficiency: "~0.5% (laser is ~1% efficient)",
        repetitionRate: "~1 shot per day (not suitable for power)"
      },
      uncertainties: [
        "NIF is not designed for power production (single-shot facility)",
        "Wall-plug Q is far below 1 (laser efficiency ~1%)",
        "Repetition rate is ~1/day vs ~10 Hz needed for power",
        "Target fabrication cost ($50K+ each) must drop by >1000x",
        "Primarily a weapons physics facility, not energy program"
      ],
      sources: ["llnl.gov/nif", "Physical Review Letters publications", "DOE/NNSA reports"]
    },
    {
      id: "east",
      name: "EAST / CFETR (China)",
      country: "China",
      type: "Tokamak",
      sector: "government",
      approach: "Superconducting tokamak (EAST operational, CFETR planned next-step device)",
      description: "China's Experimental Advanced Superconducting Tokamak (EAST) holds records for sustained plasma operations. CFETR is China's planned ITER-class device.",
      founded: 2006,
      funding: "Multi-billion USD (Chinese government)",
      status: "EAST operational, CFETR in design",
      milestones: [
        { year: 2021, event: "EAST sustained 120M°C plasma for 101 seconds", achieved: true },
        { year: 2023, event: "EAST sustained 70M°C plasma for 403 seconds (record)", achieved: true },
        { year: 2024, event: "EAST continued record-setting operations", achieved: true },
        { year: "2027-2030", event: "CFETR engineering design completion", achieved: false, confidence: "medium" },
        { year: "2035-2040", event: "CFETR construction and operation", achieved: false, confidence: "low" }
      ],
      keyMetrics: {
        eastRecord: "403 seconds at 70 million °C (2023)",
        cfetrTargetQ: ">10",
        cfetrFusionPower: "1 GW (design target)"
      },
      uncertainties: [
        "CFETR timeline depends on Chinese government priorities",
        "Long-pulse operations don't directly translate to net energy",
        "Publication transparency varies"
      ],
      sources: ["ASIPP publications", "Nuclear Fusion journal", "IAEA FEC proceedings"]
    },
    {
      id: "kstar",
      name: "KSTAR",
      country: "South Korea",
      type: "Tokamak",
      sector: "government",
      approach: "Superconducting tokamak focused on steady-state operation and advanced scenarios",
      description: "Korea Superconducting Tokamak Advanced Research device, focused on long-pulse high-performance plasmas.",
      founded: 2008,
      funding: "~$400M construction + ongoing operations",
      status: "Operational, setting records",
      milestones: [
        { year: 2021, event: "Sustained 100M°C plasma for 30 seconds", achieved: true },
        { year: 2023, event: "100M°C plasma for 48 seconds (record for that temperature)", achieved: true },
        { year: 2024, event: "Continued high-temperature confinement campaigns", achieved: true },
        { year: "2026+", event: "Tungsten divertor upgrade for higher performance", achieved: false, confidence: "high" },
        { year: "2030s", event: "K-DEMO design (Korean DEMO reactor)", achieved: false, confidence: "low" }
      ],
      keyMetrics: {
        record: "48 seconds at 100 million °C (2023)",
        magnetType: "Nb3Sn superconducting"
      },
      uncertainties: [
        "K-DEMO plans are early stage",
        "Transition from research tokamak to power plant design"
      ],
      sources: ["kfe.re.kr", "Nuclear Fusion journal publications"]
    },
    {
      id: "jt60sa",
      name: "JT-60SA",
      country: "Japan/EU",
      type: "Tokamak",
      sector: "government",
      approach: "Large superconducting tokamak, successor to JT-60U, ITER satellite facility",
      description: "Joint EU-Japan tokamak designed to support ITER and study advanced plasma scenarios. World's largest superconducting tokamak until ITER.",
      founded: 2013,
      funding: "~$1.5B (EU-Japan joint)",
      status: "First plasma achieved, commissioning",
      milestones: [
        { year: 2023, event: "First plasma achieved (October 2023)", achieved: true },
        { year: "2024-2025", event: "Initial research campaigns", achieved: true },
        { year: "2026-2030", event: "Advanced tokamak scenario development", achieved: false, confidence: "high" },
        { year: "2030s", event: "Support ITER operations with scenario optimization", achieved: false, confidence: "medium" }
      ],
      keyMetrics: {
        plasmaVolume: "~130 m³",
        plasmaCurrent: "5.5 MA",
        magnetType: "Nb3Sn and NbTi superconducting"
      },
      uncertainties: [
        "Research facility, not designed for power production",
        "Value depends partly on ITER timeline"
      ],
      sources: ["jt60sa.org", "QST Japan publications", "Fusion for Energy (F4E)"]
    },
    {
      id: "step",
      name: "STEP (UK)",
      country: "UK",
      type: "Spherical Tokamak",
      sector: "government",
      approach: "Spherical tokamak prototype power plant",
      description: "UK government's Spherical Tokamak for Energy Production program, aiming to build a net-electricity fusion power plant.",
      founded: 2019,
      funding: "£220M+ initial, multi-billion total expected",
      status: "Conceptual design, site selected (West Burton)",
      milestones: [
        { year: 2022, event: "West Burton, Nottinghamshire selected as site", achieved: true },
        { year: 2024, event: "Conceptual design phase ongoing", achieved: true },
        { year: "2027-2029", event: "Engineering design completion", achieved: false, confidence: "medium" },
        { year: "2032-2035", event: "Construction", achieved: false, confidence: "low" },
        { year: "~2040", event: "Net electricity to grid (target)", achieved: false, confidence: "low" }
      ],
      keyMetrics: {
        targetPower: "~100 MW net electricity",
        configuration: "Compact spherical tokamak"
      },
      uncertainties: [
        "Very ambitious timeline for a first-of-kind power plant",
        "Spherical tokamak power plant has never been built",
        "Funding beyond initial phase not fully committed",
        "UK fusion regulatory framework still developing"
      ],
      sources: ["step.ukaea.uk", "UKAEA publications", "UK Government fusion strategy"]
    },
    {
      id: "marvel",
      name: "Marvel Fusion",
      country: "Germany",
      type: "Inertial Confinement (Laser, nonthermal)",
      sector: "private",
      approach: "Ultra-short pulse laser-driven nonthermal fusion using nanostructured targets",
      description: "Uses petawatt-class ultra-short pulse lasers to drive fusion in specially engineered solid-state targets, different from NIF's thermal approach.",
      founded: 2019,
      funding: "$100M+",
      status: "Research and development phase",
      milestones: [
        { year: 2023, event: "Partnerships with major laser facilities (e.g., LLNL, LMU Munich)", achieved: true },
        { year: 2024, event: "Secured additional funding and facility access", achieved: true },
        { year: "2027-2029", event: "Proof-of-concept experiments", achieved: false, confidence: "low" },
        { year: "2030s", event: "Prototype fusion device", achieved: false, confidence: "very low" }
      ],
      keyMetrics: {
        approach: "Nonthermal, ultra-short pulse laser",
        targetType: "Nanostructured solid-state targets",
        laserType: "Petawatt-class, femtosecond pulses"
      },
      uncertainties: [
        "Nonthermal laser fusion is less validated than thermal ICF",
        "Very early stage compared to other approaches",
        "Target physics at these conditions is not well understood",
        "Significant gap between laser experiments and power plant"
      ],
      sources: ["marvelfusion.com", "Technical publications"]
    },
    {
      id: "w7x",
      name: "Wendelstein 7-X",
      country: "Germany",
      type: "Stellarator",
      sector: "government",
      approach: "Optimized stellarator for steady-state operation",
      description: "World's largest and most advanced stellarator, designed to demonstrate that stellarators can confine plasma as well as tokamaks.",
      founded: 2015,
      funding: "~€1.1B",
      status: "Operational, world-leading stellarator results",
      milestones: [
        { year: 2018, event: "Achieved record stellarator plasma performance", achieved: true },
        { year: 2022, event: "Achieved 8 minutes plasma duration, energy confinement approaching tokamak levels", achieved: true },
        { year: 2023, event: "Record energy turnover (1.3 GJ) in stellarator", achieved: true },
        { year: "2025-2028", event: "Water-cooled divertor installation for longer pulses", achieved: false, confidence: "high" },
        { year: "2028-2035", event: "30-minute plasma operations", achieved: false, confidence: "medium" }
      ],
      keyMetrics: {
        magnetType: "NbTi superconducting (50 non-planar coils)",
        plasmaVolume: "30 m³",
        energyTurnover: "1.3 GJ (record for stellarators)"
      },
      uncertainties: [
        "Stellarators have not demonstrated reactor-relevant conditions",
        "Complex geometry makes reactor design very challenging",
        "Research device, not on path to direct power production"
      ],
      sources: ["ipp.mpg.de/w7x", "Nature Physics publications"]
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
        signal: "NIF achieves scientific ignition",
        date: "December 2022",
        significance: "high",
        detail: "First time in history fusion produced more energy than the laser energy delivered to the target. Repeated multiple times in 2023-2024 with higher yields (up to 3.88 MJ).",
        caveat: "NIF is a weapons physics facility. Wall-plug efficiency is <1%. Not a viable path to power generation in current form."
      },
      {
        signal: "CFS demonstrates 20T HTS magnet",
        date: "September 2021",
        significance: "high",
        detail: "First large-bore, high-field HTS magnet suitable for fusion, enabling compact tokamak designs. Opens path to smaller, faster-to-build fusion devices.",
        caveat: "Single magnet demonstration. Full toroidal set in a fusion device not yet tested."
      },
      {
        signal: "Record private investment in fusion",
        date: "2021-2024",
        significance: "medium",
        detail: "Over $6 billion in private investment across 40+ companies. Major investors include Breakthrough Energy, Google, Sam Altman, Eni, Equinor, Shopify, and sovereign wealth funds.",
        caveat: "Private investment does not guarantee technical success. Venture capital timelines may not align with fusion development timescales."
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
        signal: "KSTAR and EAST set plasma duration records",
        date: "2023-2024",
        significance: "medium",
        detail: "EAST: 403 seconds at 70M°C. KSTAR: 48 seconds at 100M°C. Demonstrates improving plasma control and sustained operations.",
        caveat: "Long pulses at lower parameters don't directly translate to power-relevant conditions."
      },
      {
        signal: "JT-60SA first plasma",
        date: "October 2023",
        significance: "medium",
        detail: "World's largest superconducting tokamak begins operations, supporting ITER research and advanced scenario development.",
        caveat: "Research device, not designed for power production."
      },
      {
        signal: "First Light Fusion demonstrates projectile fusion",
        date: "2022",
        significance: "low",
        detail: "First private company to confirm fusion from an ICF-like approach (confirmed by UKAEA). Novel projectile approach could offer simpler path than laser ICF.",
        caveat: "Neutron yield was very small. Long way from energy gain."
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
        signal: "ITER massive delays and cost overruns",
        date: "Ongoing",
        significance: "high",
        detail: "Originally budgeted at ~$5B with first plasma in 2016. Now estimated at $22B+ with first plasma pushed to ~2035. Emblematic of fusion project complexity.",
        caveat: "ITER's challenges are partly organizational/political, not purely technical. Private companies claim they can move faster."
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
      total: "$7B+ (cumulative through mid-2025)",
      trend: "Exponential growth since 2020",
      topCompanies: [
        { name: "CFS", amount: "$2B+" },
        { name: "TAE Technologies", amount: "$1.2B+" },
        { name: "Helion Energy", amount: "$2.2B+" },
        { name: "General Fusion", amount: "$300M+" },
        { name: "Tokamak Energy", amount: "$250M+" },
        { name: "Zap Energy", amount: "$200M+" },
        { name: "Type One Energy", amount: "$100M+" },
        { name: "Marvel Fusion", amount: "$100M+" },
        { name: "First Light Fusion", amount: "$100M+" }
      ],
      notableInvestors: ["Breakthrough Energy Ventures", "Google", "Shopify", "Sam Altman", "Eni", "Equinor", "Chevron", "Temasek", "Tiger Global"]
    },
    government: [
      {
        country: "International (ITER)",
        program: "ITER Project",
        amount: "$22B+ (total project cost)",
        status: "Under construction, significant delays"
      },
      {
        country: "USA",
        program: "Bold Decadal Vision for Fusion Energy / DOE Milestone Program",
        amount: "$1B+ allocated (FY2022-2025), requesting more",
        status: "Active, milestone-based public-private partnerships"
      },
      {
        country: "UK",
        program: "STEP Program + Fusion Strategy",
        amount: "£220M+ initial for STEP, £650M fusion R&D budget",
        status: "Active, site selected, design phase"
      },
      {
        country: "China",
        program: "EAST, HL-2M, CFETR programs",
        amount: "Multi-billion USD (estimated)",
        status: "Active, aggressive timeline"
      },
      {
        country: "EU",
        program: "Euratom/EUROfusion DEMO",
        amount: "€5B+ (fusion R&D over current framework period)",
        status: "Active, conceptual design for EU-DEMO"
      },
      {
        country: "Japan",
        program: "JT-60SA, Broader Approach, national fusion strategy",
        amount: "$2B+ (including JT-60SA)",
        status: "Active, JT-60SA operational"
      },
      {
        country: "South Korea",
        program: "KSTAR, K-DEMO",
        amount: "$1B+ (estimated)",
        status: "Active, KSTAR operational"
      }
    ]
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
      color: "#10b981"
    },
    {
      dimension: "Engineering Feasibility",
      score: 4,
      maxScore: 10,
      label: "Significant Gaps",
      detail: "Materials, tritium breeding, plasma-facing components, and full plant integration are undemonstrated at reactor-relevant conditions.",
      color: "#f59e0b"
    },
    {
      dimension: "Economic Feasibility",
      score: 3,
      maxScore: 10,
      label: "Highly Uncertain",
      detail: "No actual cost data from any fusion power plant. Estimates range $50-200+/MWh. Must compete against rapidly cheapening renewables+storage.",
      color: "#ef4444"
    },
    {
      dimension: "Timeline Confidence",
      score: 4,
      maxScore: 10,
      label: "Low-Medium",
      detail: "2040s grid power is plausible but far from certain. 2030s claims from private companies are aspirational. Historical track record is poor.",
      color: "#f59e0b"
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
