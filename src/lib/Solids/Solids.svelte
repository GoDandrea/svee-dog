<script lang="ts">
  import { 
    easeInOut, 
    Illustration, 
    lerp,
    TAU, 
    Vector 
  } from 'svelte-zdog';

  import { onMount } from 'svelte';

  import Hourglass from './Hourglass.svelte';	
  import Sphere from './Sphere.svelte';
  import Cylinder from './Cylinder.svelte';
  import Cone from './Cone.svelte';
  import Tetrahedron from './Tetrahedron.svelte';
  import Octahedron from './Otahedron.svelte';
  import Cube from './Cube.svelte';
  import Dodecahedron from './Dodecahedron.svelte';
  import Icosahedron from './Icosahedron.svelte';

  // Color palette
  const eggplant = '#636';
  const garnet = '#C25';
  const orange = '#E62';
  const gold = '#EA0';
  const yellow = '#ED0';
  const mint = '#CFD';
  const palette = { eggplant, garnet, orange, gold, yellow };

  // Math helpers
  const ROOT3 = Math.sqrt(3);
  const ROOT5 = Math.sqrt(5);
  const PHI = (1 + ROOT5) / 2;

  // Set background color
  onMount(() => {
    const body = document.body;
    body.style.background = mint;
  })
  
  // Animation and zoom
  let isSpinning = true;
  let viewRotation = new Vector;
  let zoom = 32;
  let keyframes = [
    { x: 0, y: 0 },
    { x: 0, y: TAU },
    { x: TAU, y: TAU }
  ];
  let cycleCount = 2700;
  let turnLimit = keyframes.length - 1;
  let progress = 0;
  let dragStartRX: number;
  let dragStartRY: number;

  let diameter = 2;
</script>

<div class="container solids">
  <Illustration
    element="canvas"
    height={120}
    width={120}
    resize={true}   
    {zoom}
    update={scene => delta => {
      if (isSpinning) {
        progress += delta / cycleCount;
        let tween = easeInOut(progress % 1, 3);
        let turn = Math.floor(progress % turnLimit);
        let keyA = keyframes[turn];
        let keyB = keyframes[turn + 1];
        viewRotation.x = lerp(keyA.x, keyB.x, tween);
        viewRotation.y = lerp(keyA.y, keyB.y, tween);
        viewRotation = viewRotation;
      }
    }}
    onDragStart={() => {
      isSpinning = false;
      dragStartRX = viewRotation.x;
      dragStartRY = viewRotation.y;
    }}
    onDragMove={(_dragger, _pointer, moveX, moveY) => {
      viewRotation.x = dragStartRX - moveY * TAU;
      viewRotation.y = dragStartRY - moveX * TAU;
    }}
    onDragEnd={() => {
      isSpinning = true;
    }}
  >

    <Hourglass 
      translate={{ x: 0, y: -4 }} 
      rotate={viewRotation} 
      {palette} 
      {diameter}
    />

    <Sphere
      translate={{ x: -4, y: -4}}
      rotate={viewRotation}
      {palette}
      {diameter}
    />

    <Cylinder
      translate={{ x: 4, y: -4 }}
      rotate={viewRotation}
      {palette}
      {diameter}
    />

    <Cone
      translate={{ x: -4, y: 0 }}
      rotate={viewRotation}
      {palette}
      {diameter}
    />

    <Tetrahedron
      translate={{ x: 0, y: 0 }}
      rotate={viewRotation}
      {palette}
      {diameter}
      scale={1.25}
    />

    <Octahedron
      translate={{ x: -4, y: 4 }}
      rotate={viewRotation}
      {palette}
      diameter={(ROOT3 * 2 / 3)}
      scale={1.75}
    />

    <Cube
      translate={{ x: 4, y: 0 }}
      rotate={viewRotation}
      {palette}
      {diameter}
    />

    <Dodecahedron
      translate={{ x: 0, y: 4 }}
      rotate={viewRotation}
      {palette}
      {diameter}
      scale={0.75}
    />

    <Icosahedron
      translate={{ x: 4, y: 4 }}
      rotate={viewRotation}
      {palette}
      diameter={(ROOT3 * 2 / 3)}
      scale={1.2}
    />

  </Illustration>
</div>
