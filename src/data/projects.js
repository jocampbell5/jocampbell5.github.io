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
   links       array of { label, href } shown as buttons in the case study
               (e.g. press features, download pages, store links)

   MEDIA (all optional — leave out and a colored placeholder is shown)
   ------
   youtube     a YouTube link (or id). The case study embeds the player; the
               deck card shows the video's thumbnail automatically.
               e.g. youtube: 'https://youtu.be/ABC123xyz00'
   image       path to a still image for the card, e.g. '/media/aurora.jpg'
               (overrides the YouTube thumbnail on the card if both are set)
   video       a LOCAL video file, e.g. '/media/aurora.mp4' (loops on the card).
               Use this only for short clips you commit; prefer `youtube` for
               anything substantial.
   poster      image shown before a local video loads
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
    id: 'nfpa',
    title: 'NFPA Fire Simulator',
    category: 'EV / Battery Fire Training',
    year: '2022–2023',
    summary:
      'A nationally-deployed Unreal Engine 5 simulator that trains firefighters to fight electric-vehicle and battery fires — cooperative multiplayer, used across North America.',
    role: 'Lead Developer',
    tech: [
      'Unreal Engine 5',
      'C++',
      'Blueprints',
      'Multiplayer Networking',
      'LMS Integration',
      'Analytics',
    ],
    overview:
      "As the lead developer, I designed and built the NFPA's New Energy Systems fire-training application in Unreal Engine 5 — an immersive simulator that teaches firefighters how to fight electric-vehicle and distributed energy resource (battery) fires.\n\nFirefighters train solo or cooperatively with up to four teammates, working through realistic emergency scenarios together. The application is integrated directly into NFPA's learning management system, giving crews one-click access and giving NFPA leadership analytics on training progress.\n\nIt is now distributed to fire departments across the United States and Canada — reaching millions of firefighters — was featured on MotorWeek's Auto World, and is free for anyone to download.",
    highlights: [
      'Designed and built single-handedly as the sole developer',
      'Cooperative multiplayer for up to five firefighters',
      'Deployed nationwide — used by fire departments across the US and Canada, reaching millions of firefighters',
      "Integrated into NFPA's LMS with live training analytics for leadership",
      "Featured on MotorWeek's Auto World",
    ],
    links: [
      {
        label: 'Featured on MotorWeek',
        href: 'https://motorweek.org/auto-world/lithium-battery-fire-training/',
      },
      {
        label: 'Download (free)',
        href: 'https://info.vectorsolutions.com/vs-fr-nfpa-new-energy-systems-fire-simulator-training-confirmation?submissionGuid=bd7fb0cd-00b6-4bd2-89f6-cefa20b09da2',
      },
    ],
    accent: '#ff5a36',
    youtube: 'https://youtu.be/rotu0dtGYXs',
  },
  {
    id: 'c130',
    title: 'C-130 VR Trainer',
    category: 'VR Training · U.S. Air Force',
    year: '2019–2021',
    summary:
      "VR training modules for the U.S. Air Force's 16th Training Squadron — interactive aircraft procedures, checklists, and documentation in immersive VR.",
    role: 'Senior Unreal Engine Developer · Leidos',
    tech: ['Unreal Engine', 'C++', 'Blueprints', 'SteamVR / OpenXR', 'Perforce', 'Azure DevOps'],
    overview:
      "At Leidos, I developed virtual-reality training modules for the U.S. Air Force's 16th Training Squadron using Unreal Engine, C++, and Blueprints.\n\nTrainees work through aircraft procedures in immersive VR — interactive checklists, technical documents, and step-by-step controller-guided tasks rendered around a full-scale C-130.\n\nBeyond feature work, I built and maintained automated build-and-test pipelines with Perforce and Azure DevOps, enforced coding standards and configuration management, and mentored mid- and junior-level developers in best practices.",
    highlights: [
      "Built VR training modules for the U.S. Air Force's 16th Training Squadron",
      'Immersive full-scale aircraft procedures with interactive UI and documents',
      'Set up automated build & test pipelines (Perforce, Azure DevOps)',
      'Mentored mid- and junior-level developers and owned coding standards',
    ],
    accent: '#4ea1ff',
    youtube: 'https://youtu.be/qg6_NLB_LHs',
  },
  {
    id: 'aboutgolf',
    title: 'aboutGOLF Simulator',
    category: 'AR/XR · Unreal Engine 5',
    year: '2021–2023',
    summary:
      'An AR/XR golf simulator in Unreal Engine 5 for indoor golf centers — hardware swing tracking, real ball physics, and custom in-engine tools that helped artists work faster.',
    role: 'Senior Unreal Engine Developer · aboutGOLF',
    tech: ['Unreal Engine 5', 'C++', '3Trak Tracking', 'AR / XR', 'Physics', 'Editor Tools'],
    overview:
      'At aboutGOLF I developed an AR/XR golf-simulation application in Unreal Engine 5 for indoor golf centers — including Premier Indoor Golf, State of Golf, The Back 9 Parlor, and the PGA.\n\nI integrated the 3Trak camera-tracking system with Unreal through its API and C++, transforming captured swing and ball-hit data into realistic physics for the virtual ball. I also led key UI work: the main menu, pause menu, live ball-data display, and a post-shot feedback system that gives players performance insights after every hit.\n\nThe video here shows another side of the role — custom in-engine tools I built to help our artists create better art, faster. Alongside new development I maintained legacy applications, fixing bugs, patching vulnerabilities, and optimizing performance.',
    highlights: [
      'AR/XR golf simulator in UE5, deployed to indoor golf centers (incl. the PGA)',
      '3Trak camera tracking integrated via API + C++ into real ball physics',
      'Designed core UI: main menu, pause, live ball data, and post-shot feedback',
      'Built custom in-engine tools to speed up the art team (shown in the video)',
      'Maintained legacy apps — bug fixes, security, and performance',
    ],
    accent: '#d9a441',
    youtube: 'FUqpC23qFTM',
  },
  {
    id: 'ava',
    title: 'AI Avatar',
    category: 'Conversational AI',
    year: '2023',
    summary:
      'A real-time conversational AI avatar in Unreal Engine — ask a question by voice and a photoreal human answers, with live speech, voice, and facial animation.',
    role: 'AI / Unreal Developer · GHD',
    tech: [
      'Unreal Engine 5',
      'MetaHuman',
      'ChatGPT API',
      'ElevenLabs',
      'NVIDIA Omniverse',
      'Whisper',
    ],
    overview:
      "Built at GHD as a client proposal, this is a real-time AI avatar in Unreal Engine that helps learners build knowledge in a subject simply by talking to it.\n\nIt chains several AI services live: the user speaks, Whisper transcribes the audio to text, ChatGPT generates a response, ElevenLabs converts that response into a natural voice, and NVIDIA Omniverse drives lip-sync facial animation from the audio. The learner reads the reply on screen, hears the avatar speak, and watches its lips move in sync — all generated on the fly.\n\nIt's a demonstration of integrating multiple AI APIs into one cohesive, real-time experience for the end user.",
    highlights: [
      'Real-time pipeline: speech → Whisper → ChatGPT → ElevenLabs → Omniverse lip-sync',
      'Photoreal MetaHuman avatar with live voice and facial animation',
      'Custom voice and on-the-fly answers for any subject',
      'Built as a client proposal at GHD',
    ],
    accent: '#8b7cff',
    youtube: 'https://youtu.be/-_boofFqano',
  },
  {
    id: 'teaching',
    title: 'Teaching — Unreal Game Dev',
    category: 'Education · Unreal Engine',
    year: '2016–2024',
    summary:
      'Nearly eight years as an adjunct professor teaching Unreal Engine game development — including a full term recorded as a public lecture series (fundamentals → puzzle game → racing game).',
    role: 'Adjunct Professor · Northwest Vista College',
    tech: ['Unreal Engine', 'Blueprints', 'C++', 'Game Design', 'Curriculum'],
    overview:
      'I taught game development as an adjunct professor at Northwest Vista College for nearly eight years, using Unreal Engine as the teaching platform. This playlist captures one full classroom term: starting with the fundamentals of the level and Blueprint editors, then building a complete puzzle game, and finally a racing game.\n\nBeyond the technical material, my focus was a positive, collaborative learning environment — mentoring students in coding best practices, giving constructive feedback, and helping them grow as developers. I maintained curriculum-aligned syllabi to meet departmental and institutional standards.',
    highlights: [
      'Adjunct professor of game development for 7+ years (Northwest Vista College)',
      'A full term recorded as a public lecture series (fundamentals → puzzle game → racing game)',
      'Mentored students in coding best practices with hands-on feedback',
      'Maintained curriculum-aligned syllabi and course standards',
    ],
    links: [
      {
        label: 'Full course playlist (YouTube)',
        href: 'https://youtube.com/playlist?list=PLl5xnLQ0CVsjlK57oEl6sbHmyBtFSWBTE',
      },
    ],
    accent: '#34d399',
    youtube: 'G3Pm0ux0DiI', // first lesson — used for the card thumbnail
    playlist: 'PLl5xnLQ0CVsjlK57oEl6sbHmyBtFSWBTE', // full playlist embedded in the case study
  },
  {
    id: 'missions',
    title: 'Mission & Level Design',
    category: 'Game Content Creation',
    year: 'Ongoing',
    summary:
      'Designed missions for IL-2 Sturmovik: Great Battles, with a tutorial series teaching others how.',
    role: 'Level & Mission Designer',
    tech: [
      'IL-2 Great Battles',
      'Arma 3',
      'Prepar3D',
      'Counter-Strike',
      'MechWarrior 5',
      'StarCraft 2',
    ],
    overview:
      'Outside of engine work, I’ve spent years designing game content. In IL-2 Sturmovik: Great Battles I’ve built a large library of missions with the in-game editor, and I’ve created maps and missions across many other titles — Arma 3, Prepar3D, Counter-Strike, MechWarrior 5: Mercenaries, StarCraft 2, and more.\n\nTo help other creators, I produced a 43-part video tutorial series walking through how to build missions like mine in IL-2 Great Battles — from setup to the scripting that makes a mission come alive.',
    highlights: [
      'Designed a large library of missions for IL-2 Sturmovik: Great Battles',
      'Maps & missions across Arma 3, Prepar3D, Counter-Strike, MechWarrior 5, and StarCraft 2',
      '43-part tutorial series teaching IL-2 mission design',
      'Fluent in a wide range of level / mission editors',
    ],
    links: [
      {
        label: 'IL-2 mission tutorials (YouTube)',
        href: 'https://youtube.com/playlist?list=PLl5xnLQ0CVsijOBDFxtQLJC_jHWDWI9JI',
      },
    ],
    accent: '#3fb6c9',
    youtube: 'jcXIo7gOlXE', // first tutorial — card thumbnail
    playlist: 'PLl5xnLQ0CVsijOBDFxtQLJC_jHWDWI9JI', // full playlist in the case study
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
