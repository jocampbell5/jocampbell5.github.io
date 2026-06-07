/* ============================================================
   DESIGN GALLERY  —  your 2D artwork & UI/UX design.
   ============================================================

   Shown in the "Design" section (separate from the project deck).
   Organised into collections; each collection is a titled group of
   images displayed in a grid. Click any image to enlarge it.

   TO ADD WORK
   -----------
   1. Drop the image in  public/design/  (optimise large files first —
      aim for < ~1 MB, max ~1600px wide).
   2. Add an entry to the right collection's `images` array:
        { src: '/design/my-art.jpg', caption: 'What it is' }
      or add a whole new collection object to the array below.
   ============================================================ */

const designs = [
  {
    id: 'game-ui',
    title: 'Game UI',
    blurb: 'Production-ready game interface design — menus, HUDs, and control screens.',
    images: [
      { src: '/design/racing-car.jpg', caption: 'Racing game — car select screen' },
      { src: '/design/racing-controls.jpg', caption: 'Racing game — controls screen' },
    ],
  },
  {
    id: 'training-ux',
    title: 'Training UX & Storyboards',
    blurb:
      'End-to-end experience design for training applications — flows, scenario menus, and annotated storyboards.',
    images: [
      { src: '/design/nfpa-panels.jpg', caption: 'NFPA training — UI panels & scenario flow' },
      { src: '/design/nfpa-storyboard.jpg', caption: 'NFPA training — storyboard' },
      { src: '/design/transcaer.jpg', caption: 'TRANSCAER hazmat safety — storyboard' },
      { src: '/design/dental-flow.jpg', caption: 'Behavioral training — branching app flow' },
      { src: '/design/mining.jpg', caption: 'Computer-vision mining — concept illustration' },
      { src: '/design/battery-1.jpg', caption: 'Battery energy storage training — concept 1' },
      { src: '/design/battery-2.jpg', caption: 'Battery energy storage training — concept 2' },
      { src: '/design/battery-3.jpg', caption: 'Battery energy storage training — concept 3' },
    ],
  },
  {
    id: 'interaction',
    title: 'Interaction Design',
    blurb: 'VR interaction diagrams and interface concepts that guide users through new controls.',
    images: [
      { src: '/design/ai-avatar-design.jpg', caption: 'AI Avatar — interface wireframe' },
      { src: '/design/vr-select-lift.gif', caption: 'VR — select & lift an object' },
      { src: '/design/vr-pickup-1.png', caption: 'VR — pick up' },
      { src: '/design/vr-grip.png', caption: 'VR — grip' },
      { src: '/design/vr-trigger.png', caption: 'VR — trigger' },
      { src: '/design/vr-teleport.png', caption: 'VR — teleport' },
      { src: '/design/vr-snap.png', caption: 'VR — snap turn' },
      { src: '/design/vr-joystick.png', caption: 'VR — joystick move' },
    ],
  },
]

export default designs
