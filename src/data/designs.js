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

const designs = [
  {
    id: 'nfpa',
    title: 'NFPA EV Fire Training',
    blurb:
      'Proposal art and storyboards for the NFPA electric-vehicle / battery fire training application.',
    images: [
      { src: '/design/nfpa-panels.jpg', full: '/design/full/nfpa-panels.jpg', caption: 'UI panels & scenario flow' },
      { src: '/design/nfpa-storyboard.jpg', full: '/design/full/nfpa-storyboard.jpg', caption: 'Storyboard' },
    ],
  },
  {
    id: 'transcaer',
    title: 'TRANSCAER Safety Training',
    blurb: 'Storyboard for a hazmat / rail emergency-response training experience.',
    images: [
      { src: '/design/transcaer.jpg', full: '/design/full/transcaer.jpg', caption: 'TRANSCAER — full storyboard' },
    ],
  },
  {
    id: 'dental',
    title: 'Behavioral Training — Dental',
    blurb: 'Branching app flow and storyboard for a behavioral dental-training scenario.',
    images: [
      { src: '/design/dental-flow.jpg', full: '/design/full/dental-flow.jpg', caption: 'Branching app flow' },
    ],
  },
  {
    id: 'battery',
    title: 'Battery Energy Storage Training',
    blurb: 'Concept design for a battery energy-storage-station (BESS) training environment.',
    images: [
      { src: '/design/battery-1.jpg', full: '/design/full/battery-1.jpg', caption: 'Concept 1' },
      { src: '/design/battery-2.jpg', full: '/design/full/battery-2.jpg', caption: 'Concept 2' },
      { src: '/design/battery-3.jpg', full: '/design/full/battery-3.jpg', caption: 'Concept 3' },
    ],
  },
  {
    id: 'mining',
    title: 'Computer Vision — Underground Mining',
    blurb: 'Concept illustration for a computer-vision system visualising underground mining operations.',
    images: [
      { src: '/design/mining.jpg', full: '/design/full/mining.jpg', caption: 'Seeing underground — concept' },
    ],
  },
  {
    id: 'ai-avatar',
    title: 'AI Avatar',
    blurb: 'Interface wireframe for the real-time conversational AI avatar.',
    images: [
      { src: '/design/ai-avatar-design.jpg', full: '/design/full/ai-avatar-design.jpg', caption: 'Avatar chat interface wireframe' },
    ],
  },
  {
    id: 'racing',
    title: 'Racing Game UI',
    blurb: 'Production game-interface design — car select and controls screens.',
    images: [
      { src: '/design/racing-car.jpg', full: '/design/full/racing-car.jpg', caption: 'Car select screen' },
      { src: '/design/racing-controls.jpg', full: '/design/full/racing-controls.jpg', caption: 'Controls screen' },
    ],
  },
  {
    id: 'goblin',
    title: 'Goblin — Map Screen Wireframe',
    blurb: 'Full UX wireframe for a game map screen — open/close, pan, zoom, waypoints, and teleport.',
    images: [
      { src: '/design/goblin-map.jpg', full: '/design/full/goblin-map.jpg', caption: 'Map screen — interaction wireframe' },
    ],
  },
  {
    id: 'vr-hands',
    title: 'VR Hand Controls',
    blurb: 'Instructional diagrams teaching VR controller interactions.',
    layout: 'uniform',
    images: [
      { src: '/design/vr-pickup.png', full: '/design/full/vr-pickup.png', caption: 'Pick up' },
      { src: '/design/vr-select-lift.gif', full: '/design/full/vr-select-lift.gif', caption: 'Select & lift' },
      { src: '/design/vr-grip.png', full: '/design/full/vr-grip.png', caption: 'Grip' },
      { src: '/design/vr-trigger.png', full: '/design/full/vr-trigger.png', caption: 'Trigger' },
      { src: '/design/vr-joystick.png', full: '/design/full/vr-joystick.png', caption: 'Joystick' },
      { src: '/design/vr-move.png', full: '/design/full/vr-move.png', caption: 'Move' },
      { src: '/design/vr-teleport.png', full: '/design/full/vr-teleport.png', caption: 'Teleport' },
      { src: '/design/vr-snap-left.png', full: '/design/full/vr-snap-left.png', caption: 'Snap turn left' },
      { src: '/design/vr-snap-right.png', full: '/design/full/vr-snap-right.png', caption: 'Snap turn right' },
      { src: '/design/vr-select.png', full: '/design/full/vr-select.png', caption: 'Select' },
      { src: '/design/vr-menu.png', full: '/design/full/vr-menu.png', caption: 'Menu' },
      { src: '/design/vr-a-select.png', full: '/design/full/vr-a-select.png', caption: 'A — select' },
      { src: '/design/vr-b-back.png', full: '/design/full/vr-b-back.png', caption: 'B — back' },
    ],
  },
]

export default designs
