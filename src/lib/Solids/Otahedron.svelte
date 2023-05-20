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
  let radius = diameter / 2;
  let height = (radius * 3) / 2;
  let tilt = Math.asin(0.5 / height);

  let colorWheel = [
    palette.eggplant, 
    palette.garnet, 
    palette.orange,
    palette.gold,
    palette.yellow
  ]

  const stroke = false;
</script>

<Anchor {rotate} {translate} {scale} update={node => delta => {
  node.rotate.x = rotate.x;
  node.rotate.y = rotate.y;
  node.rotate.z = rotate.z;
}}>
  {#each [-1, 1] as ySide}
    {#each { length: 4 } as _, i}
      <Anchor rotate={{ y: (TAU / 4) * (i + 1.5) * -1 }}>
        <Anchor translate={{ z: 0.5 }} rotate={{ x: tilt * ySide }}>
          <Polygon
            sides={3}
            {radius}
            translate={{ y: (-radius / 2) * ySide }}
            scale={{ y: ySide }}
            {stroke}
            fill
            color={colorWheel[i + 0.5 + 0.5 * -ySide]}
            backface={false}
          />
        </Anchor>
      </Anchor>
    {/each}
  {/each}
</Anchor>

