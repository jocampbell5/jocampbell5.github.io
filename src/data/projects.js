/* ============================================================
   PROJECTS  —  this is the file you edit to manage your work.
   ============================================================

   Each project is one object in the array below. Add, remove, or
   reorder them freely; the carousel, menu, and case studies all
   update automatically.

   FIELDS
   ------
   id          unique short string (used internally, keep it unique)
   title       big display name shown in the hero + case study
   category    short label (e.g. "VR Training", "Digital Twin")
   year        any string
   summary     1–2 lines shown on the landing/hero
   role        your role on the project
   tech        array of tools/tech used (shown as tags)
   overview    longer paragraph(s) for the case study. Use \n\n for breaks.
   highlights  array of bullet points for the case study

   MEDIA (all optional — leave out and a colored placeholder is shown)
   ------
   image       path to a still image for the card, e.g. '/media/aurora.jpg'
   video       path to a video file, e.g. '/media/aurora.mp4'  (loops on the card)
   poster      image shown before the video loads
   gallery     array of image paths shown in the case study

   HOW TO ADD YOUR OWN MEDIA
   -------------------------
   1. Drop files into the  public/media/  folder.
   2. Reference them with a leading slash, e.g.  image: '/media/myshot.jpg'
   Files in /public are copied as-is, so '/media/x.jpg' -> public/media/x.jpg.

   The `accent` color tints that project's placeholder + case-study header.
   ============================================================ */

const projects = [
  {
    id: 'aurora',
    title: 'Aurora',
    category: 'Flight Simulation',
    year: '2025',
    summary:
      'A real-time flight simulator with physically-based weather, terrain streaming, and a full glass cockpit.',
    role: 'Lead Unreal Developer',
    tech: ['Unreal Engine 5', 'C++', 'Chaos Physics', 'World Partition', 'Niagara'],
    overview:
      'Aurora is a high-fidelity flight simulation built for pilot familiarization training. It streams real-world terrain at continental scale using World Partition, simulates volumetric weather, and drives a fully interactive glass cockpit.\n\nThe flight model couples a custom aerodynamics solver to Chaos for ground handling, giving believable behavior from taxi to cruise.',
    highlights: [
      'Continental-scale terrain streaming with no loading screens',
      'Custom 6-DOF aerodynamics model in C++',
      'Volumetric clouds and dynamic weather affecting handling',
      'Interactive glass cockpit with 40+ functional instruments',
    ],
    accent: '#ff3d57',
  },
  {
    id: 'sentinel',
    title: 'Sentinel',
    category: 'VR Safety Training',
    year: '2024',
    summary:
      'Immersive VR training that puts workers inside hazardous scenarios — safely — and scores their response.',
    role: 'Unreal / VR Developer',
    tech: ['Unreal Engine 5', 'OpenXR', 'Blueprints', 'C++', 'Meta Quest'],
    overview:
      'Sentinel teaches industrial safety through consequence-free practice. Trainees enter a faithfully reconstructed plant floor and must identify hazards, follow lockout/tagout procedures, and respond to emergencies.\n\nEvery action is logged and scored, producing a competency report for supervisors.',
    highlights: [
      'Hand-tracked interactions with realistic tool use',
      'Branching scenarios that adapt to trainee decisions',
      'Automatic scoring and exportable competency reports',
      'Runs untethered on Meta Quest 3',
    ],
    accent: '#ffb648',
  },
  {
    id: 'atlas',
    title: 'Atlas',
    category: 'Digital Twin',
    year: '2025',
    summary:
      'A live digital twin of a manufacturing line, mirroring real sensor data inside a navigable 3D plant.',
    role: 'Digital Twin Engineer',
    tech: ['Unreal Engine 5', 'C++', 'MQTT', 'REST', 'Datasmith'],
    overview:
      'Atlas connects a photoreal Unreal model of a factory to its live PLC and sensor feeds. Operators walk the floor in 3D and see machine state, throughput, and alarms updating in real time.\n\nHistorical playback lets teams rewind to the moment a fault occurred and inspect every signal around it.',
    highlights: [
      'Live MQTT ingestion mapped onto 3D machine state',
      'CAD-to-realtime pipeline via Datasmith',
      'Time-scrubbing to replay any past production window',
      'Web dashboard mirrored to the 3D scene',
    ],
    accent: '#3ddc97',
  },
  {
    id: 'oracle',
    title: 'Oracle',
    category: 'AI Assistant',
    year: '2025',
    summary:
      'An in-world AI helper that guides users through complex procedures using natural conversation.',
    role: 'AI Integration Developer',
    tech: ['Unreal Engine 5', 'C++', 'LLM API', 'Speech-to-Text', 'MetaHuman'],
    overview:
      'Oracle is a conversational assistant embedded inside simulations. Users speak naturally and a MetaHuman guide responds with context-aware help, pointing to objects and demonstrating steps.\n\nIt connects a large language model to the live scene graph so answers reflect the actual state of the world around the user.',
    highlights: [
      'Real-time speech-to-text and text-to-speech',
      'LLM grounded in the live scene state',
      'Expressive MetaHuman presenter with lip-sync',
      'Context-aware highlighting of relevant objects',
    ],
    accent: '#7c8cff',
  },
  {
    id: 'forge',
    title: 'Forge',
    category: 'Procedural Worlds',
    year: '2024',
    summary:
      'A procedural city generator that builds explorable, fully-lit urban environments in seconds.',
    role: 'Technical Artist / Developer',
    tech: ['Unreal Engine 5', 'PCG Framework', 'C++', 'Lumen', 'Nanite'],
    overview:
      'Forge uses Unreal’s PCG framework to assemble believable city blocks from a small kit of modular assets. Road networks, building lots, props, and crowds are generated procedurally and lit with Lumen.\n\nArtists tune a handful of parameters and get a unique, performant city every time.',
    highlights: [
      'Rule-based road and block generation',
      'Nanite geometry with Lumen global illumination',
      'Parameter-driven density, height, and style',
      'Runs at real-time framerates on a single GPU',
    ],
    accent: '#ff7a45',
  },
  {
    id: 'meridian',
    title: 'Meridian',
    category: 'Medical VR',
    year: '2023',
    summary:
      'A VR surgical rehearsal platform letting clinicians practice procedures on patient-specific anatomy.',
    role: 'VR Simulation Developer',
    tech: ['Unreal Engine 5', 'OpenXR', 'C++', 'Haptics', 'DICOM'],
    overview:
      'Meridian converts patient CT/MRI scans into interactive 3D anatomy for pre-operative rehearsal. Surgeons practice the exact case in VR with haptic feedback before entering the operating room.\n\nThe pipeline ingests DICOM data and reconstructs tissue-accurate models on demand.',
    highlights: [
      'Patient-specific anatomy from DICOM scans',
      'Haptic feedback for tissue interaction',
      'Step-by-step procedural guidance',
      'Session recording for review and assessment',
    ],
    accent: '#39c0ed',
  },
  {
    id: 'nexus',
    title: 'Nexus',
    category: 'Digital Twin',
    year: '2024',
    summary:
      'A campus-scale IoT digital twin that visualizes energy, occupancy, and climate across every building.',
    role: 'Simulation Developer',
    tech: ['Unreal Engine 5', 'C++', 'JSON API', 'Cesium', 'Niagara'],
    overview:
      'Nexus aggregates thousands of IoT sensors across a campus into a single explorable 3D model built on geospatial data. Facilities teams see energy use, occupancy, and HVAC performance building-by-building, floor-by-floor.\n\nHeatmaps and trend overlays turn raw telemetry into decisions.',
    highlights: [
      'Geospatially accurate campus from Cesium tiles',
      'Live overlays for energy, occupancy, and climate',
      'Drill-down from campus to single room',
      'Anomaly flags surfaced directly in 3D',
    ],
    accent: '#b06bff',
  },
  {
    id: 'echo',
    title: 'Echo',
    category: 'AI Characters',
    year: '2025',
    summary:
      'Believable AI-driven characters that perceive, remember, and converse within interactive worlds.',
    role: 'AI Gameplay Developer',
    tech: ['Unreal Engine 5', 'C++', 'Behavior Trees', 'LLM API', 'MetaHuman'],
    overview:
      'Echo gives non-player characters a memory and a voice. Each character perceives nearby events, maintains a persistent memory, and converses naturally using a language model bound to its personality.\n\nThe result is training and narrative scenarios where people feel genuinely responsive.',
    highlights: [
      'Persistent per-character memory',
      'LLM dialogue shaped by personality profiles',
      'Perception-driven behavior trees',
      'Natural voice interaction',
    ],
    accent: '#ff5db1',
  },
]

export default projects
