<script lang="ts">
  import { Anchor, Hemisphere, TAU } from "svelte-zdog";

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

  export let diameter: number;

  const stroke = false;
</script>

<Anchor {rotate} {translate} update={node => delta => {
  node.rotate.x = rotate.x;
  node.rotate.y = rotate.y;
  node.rotate.z = rotate.z;
}}>
  <Hemisphere 
    {stroke}
    {diameter}
    translate={{ z: -1 }}
    color={palette.garnet}
    backface={palette.orange}
  />
  <Hemisphere 
    {stroke}
    {diameter}
    translate={{ z: 1 }}
    rotate={{ y: TAU/2}}
    color={palette.eggplant}
    backface={palette.gold}
  />
</Anchor>

