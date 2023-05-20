<script lang="ts">
  import { Anchor, Polygon, TAU } from "svelte-zdog";

  export let palette: {
    eggplant?: string
    garnet?: string
    orange?: string
    gold?: string
    yellow?: string
  };

  export let rotate: {
    x: number
    y: number
    z: number
  }

  export let translate: {
    x?: number
    y?: number
    z?: number
  } = {}

  export let scale = 1;
  export let diameter = 1;

  let faceRadius = diameter / 2;
  let faceHeight = (faceRadius * 3) / 2;
  let capApothem = 0.5 / Math.tan(TAU / 10);
  let capRadius = 0.5 / Math.sin(TAU / 10);
  let capTilt = Math.asin(capApothem / faceHeight);
  let capSagitta = capRadius - capApothem;
  let sideTilt = Math.asin(capSagitta / faceHeight);
  let sideHeight = Math.sqrt(faceHeight * faceHeight - capSagitta * capSagitta);
  let capRotateX = -capTilt;
  let sideRotateX = -sideTilt;

  let capColors = {
    '-1': [
      palette.garnet, 
      palette.gold,
      palette.yellow,
      palette.gold,
      palette.orange
    ],
    1: [ 
      palette.gold, 
      palette.garnet,
      palette.eggplant,
      palette.garnet,
      palette.orange
    ]
  };

  let sideColors = {
    '-1': [
      palette.garnet, 
      palette.gold,
      palette.yellow,
      palette.orange,
      palette.garnet
    ],
    1: [ 
      palette.gold, 
      palette.garnet,
      palette.eggplant,
      palette.orange,
      palette.orange
    ]
  }

  const stroke = false;
</script>

<Anchor {rotate} {translate} {scale} update={node => delta => {
  node.rotate.x = rotate.x;
  node.rotate.y = rotate.y;
  node.rotate.z = rotate.z;
}}>
  {#each [-1, 1] as ySide}
    {#each { length: 5 } as _, i}
      <!-- Rotor -->
      <Anchor 
        rotate={{ y: (TAU / 5) * -i }} 
        translate={{ y: (sideHeight / 2) * ySide }}
      >
        <!-- Cap Anchor -->
        <Anchor 
          rotate={{ x: capRotateX + ((ySide > 0) ? TAU / 2 : 0) }}
          translate={{ z: capApothem * ySide}}
        >
          <Polygon
            sides={3}
            radius={faceRadius}
            translate={{ y: -faceRadius / 2 }}
            fill
            {stroke}
            color={capColors[ySide][i]}
          />
        </Anchor>

        <!-- Side Anchor -->
        <Anchor 
          rotate={{ x: sideRotateX + ((ySide > 0) ? 0 : (TAU / 2)) }}
          translate={{ z: capApothem * ySide}}
        >
          <Polygon
            sides={3}
            radius={faceRadius}
            translate={{ y: -faceRadius / 2 }}
            rotate={{ y: TAU / 2 }}
            fill
            {stroke}
            color={capColors[ySide][i]}
          />
        </Anchor>
      </Anchor>
    {/each}
  {/each}
</Anchor>

