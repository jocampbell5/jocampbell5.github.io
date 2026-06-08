/* ============================================================
   DESIGN GALLERY  —  your 2D artwork & UI/UX design.
   ============================================================

   Shown in the "Design" section (separate from the project deck).
   Organised into collections (one per project/folder). Each image has:
     src     small thumbnail shown in the grid   (public/design/<name>)
     full    full-resolution version for the lightbox (public/design/full/<name>)
     caption short description

   A collection may set  layout: 'uniform'  to show its images as equal-size
   tiles (used for the VR hand controls).

   TO ADD WORK
   -----------
   1. Drop a thumbnail in  public/design/  and the full-res in  public/design/full/.
   2. Add an entry to a collection's `images` array, or add a new collection.
   ============================================================ */

const img = (name, caption, ext = 'jpg') => ({
  src: `/design/${name}.${ext}`,
  full: `/design/full/${name}.${ext}`,
  caption,
})

const designs = [
  {
    id: 'nfpa',
    title: 'NFPA EV Fire Training — Vehicle Simulator',
    blurb:
      'UI and storyboards for the multiplayer electric-vehicle / battery fire training simulator.',
    images: [
      img('nfpa-panels', 'UI panels & scenario flow'),
      img('nfpa-storyboard', 'Storyboard'),
    ],
  },
  {
    id: 'ev-storyline',
    title: 'NFPA EV Fire — Micro-Learning (Storyline 360)',
    blurb:
      'Storyboards, character art, and screen layouts for the iPad micro-learning built in Articulate Storyline 360.',
    images: [
      img('ev-template', 'Storyline module layout'),
      img('ev-instructor', 'Instructor character', 'png'),
      img('ev-group38', 'Firefighter character', 'png'),
      img('ev-group39', 'Firefighter character', 'png'),
      img('ev-group40', 'Firefighter character', 'png'),
      img('ev-crash-tree', 'EV crash into tree', 'png'),
      img('ev-blanket', 'Fire blanket', 'png'),
    ],
  },
  {
    id: 'transcaer',
    title: 'TRANSCAER Safety Training',
    blurb: 'Storyboards for a hazmat / rail emergency-response training experience.',
    images: [
      img('transcaer', 'Full storyboard'),
      img('transcaer-module3', 'Module 3 storyboard'),
    ],
  },
  {
    id: 'dental',
    title: 'Behavioral Training — Dental',
    blurb: 'Branching app flow and storyboard for a behavioral dental-training scenario.',
    images: [img('dental-flow', 'Branching app flow')],
  },
  {
    id: 'battery',
    title: 'Battery Storage Station Familiarization Training (BSSFT)',
    blurb:
      'UI, environments, and fire scenarios for a battery-storage / distributed-energy fire familiarization training.',
    images: [
      img('battery-1', 'Main menu'),
      img('battery-2', 'Battery storage station — information hotspot'),
      img('battery-3', 'Battery storage station — environment'),
      img('battery-ff7', 'Battery storage station — interactive hotspot'),
      img('battery-ff8', 'Battery storage station — thermal event'),
      img('battery-ff9', 'Residential EV — driveway scenario'),
      img('battery-ff10', 'Residential EV — fire scenario'),
      img('battery-ff11', 'Home solar & battery — garage'),
      img('battery-ff12', 'Home battery — fire scenario'),
      img('battery-ff13', 'Residential electrical disconnect & meter'),
    ],
  },
  {
    id: 'mining',
    title: 'Computer Vision — Underground Mining',
    blurb: 'Concept illustration for a computer-vision system visualising underground mining operations.',
    images: [
      img('mining-1', 'Seeing underground — concept 1'),
      img('mining-2', 'Seeing underground — concept 2'),
      img('mining-3', 'Seeing underground — concept 3'),
    ],
  },
  {
    id: 'racing',
    title: 'Racing Game UI',
    blurb: 'Production game-interface design — front end, HUD, and control screens.',
    images: [
      img('racing-splash', 'Splash screen'),
      img('racing-mainmenu', 'Main menu'),
      img('racing-car', 'Car select screen'),
      img('racing-controls', 'Controls screen'),
      img('racing-lobby', 'Lobby'),
      img('racing-track', 'Track select'),
      img('racing-hud', 'In-race HUD'),
      img('racing-end', 'End screen'),
    ],
  },
  {
    id: 'ww2',
    title: 'WW2 Flight Sim — Game UI',
    blurb: 'Front-end and menu design for a WW2 air-combat flight simulator.',
    images: [
      img('ww2-motd', 'Message of the day'),
      img('ww2-mission', 'Quick mission'),
      img('ww2-account', 'Account page'),
      img('ww2-options', 'Options'),
      img('ww2-controls', 'Controls assignment'),
      img('ww2-response', 'Response tuning modal'),
      img('ww2-modal', 'Generic modal'),
    ],
  },
  {
    id: 'goblin',
    title: 'Goblin — Map Screen Wireframe',
    blurb: 'Full UX wireframe for a game map screen — open/close, pan, zoom, waypoints, and teleport.',
    images: [img('goblin-map', 'Map screen — interaction wireframe')],
  },
  {
    id: 'vr-hands',
    title: 'VR Hand Controls',
    blurb: 'Instructional diagrams teaching VR controller interactions.',
    layout: 'uniform',
    images: [
      img('vr-pickup', 'Pick up', 'png'),
      { ...img('vr-select-lift', 'Select & lift', 'gif') },
      img('vr-grip', 'Grip', 'png'),
      img('vr-trigger', 'Trigger', 'png'),
      img('vr-joystick', 'Joystick', 'png'),
      img('vr-move', 'Move', 'png'),
      img('vr-teleport', 'Teleport', 'png'),
      img('vr-snap-left', 'Snap turn left', 'png'),
      img('vr-snap-right', 'Snap turn right', 'png'),
      img('vr-select', 'Select', 'png'),
      img('vr-menu', 'Menu', 'png'),
      img('vr-a-select', 'A — select', 'png'),
      img('vr-b-back', 'B — back', 'png'),
    ],
  },
]

export default designs
