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

  const ROOT5 = Math.sqrt(5);
  const PHI = (1 + ROOT5) / 2;
  let midradius = (PHI * PHI) / 2;

  let colorWheel = {
    '-1': [
      palette.eggplant, 
      palette.garnet, 
      palette.gold,
      palette.orange,
      palette.garnet
    ],
    1: [
      palette.yellow, 
      palette.gold, 
      palette.garnet,
      palette.orange,
      palette.gold
    ]
  }

  const stroke = false;
</script>

<Anchor {rotate} {translate} {scale} update={node => delta => {
  node.rotate.x = rotate.x;
  node.rotate.y = rotate.y;
  node.rotate.z = rotate.z;
}}>
  <!-- Top Face -->
  <Polygon
    sides={5}
    radius={diameter / 2}
    translate={{ y: -midradius }}
    rotate={{ x: TAU / 4 }}
    fill
    {stroke}
    color={palette.yellow}
  />

  <!-- Bottm Face -->
  <Polygon
    sides={5}
    radius={diameter / 2}
    translate={{ y: midradius }}
    rotate={{ x: -TAU / 4 }}
    fill
    {stroke}
    color={palette.eggplant}
  />

  <!-- Remaining Faces -->
  {#each [-1, 1] as ySide}
    {#each { length: 5 } as _, i}
      <Anchor rotate={{ y: (TAU / 5) * i }}>
        <Anchor rotate={{ x: (TAU / 4) * ySide - Math.atan(2) }}>
          <Polygon
            sides={5}
            radius={diameter / 2}
            translate={{ z: midradius }}
            rotate={{ z: TAU / 2 }}
            fill
            {stroke}
            color={colorWheel[ySide][i]}
          />
        </Anchor>
      </Anchor>
    {/each}
  {/each}
</Anchor>

