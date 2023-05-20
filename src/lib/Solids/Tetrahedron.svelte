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
  export let diameter: number;
  let radius = diameter / 2;
  let inradius = Math.cos(TAU / 6) * radius;
  let height = radius + inradius;

  let sideColors = [palette.gold, palette.garnet, palette.orange]

  const stroke = false;
</script>

<Anchor {rotate} {translate} {scale} update={node => delta => {
  node.rotate.x = rotate.x;
  node.rotate.y = rotate.y;
  node.rotate.z = rotate.z;
}}>
  <Polygon
    sides={3}
    {radius}
    fill
    {stroke}
    translate={{ y: height / 2 }}    
    rotate={{ x: -TAU / 4, z: -TAU / 2 }}
    color={palette.eggplant}
  />
  {#each {length: 3} as _, i}
    <Anchor
      rotate={{ y: (TAU / 3) * -i }}
    >
      <Anchor
        translate={{ z: inradius, y: height / 2 }}
        rotate={{ x: Math.acos(1 / 3) * -1 + TAU / 4 }}
      >
        <Polygon
          sides={3}
          {radius}
          fill
          {stroke}
          translate={{ y: -inradius }}    
          color={sideColors[i]}
        />
      </Anchor>
    </Anchor>
  {/each}
</Anchor>

