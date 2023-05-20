<script lang="ts">
  import { Anchor, Box, TAU } from "svelte-zdog";

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

  const stroke = false;
</script>

<Anchor {rotate} {translate} {scale} update={node => delta => {
  node.rotate.x = rotate.x;
  node.rotate.y = rotate.y;
  node.rotate.z = rotate.z;
}}>
  <Box
    width={diameter}
    height={diameter}
    depth={diameter}
    topFace={palette.yellow}
    frontFace={palette.gold}
    leftFace={palette.orange}
    rightFace={palette.orange}
    rearFace={palette.garnet}
    bottomFace={palette.eggplant}
    stroke={false}
  />
</Anchor>

