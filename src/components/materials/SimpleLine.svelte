<script>
  export let rotate = false
  export let x = 73
  export let y = 85
  export let color = 'var(--ocher)'
</script>

<svg
  class:rotate
  stroke="{color}"
  width="{x}"
  height="{y}"
  viewBox="0 0 {x} {y}"
>
  <line x1="0" y1="0" x2="{x}" y2="{y}"></line>
</svg>

<style>
  svg {
    stroke-width: 5px;
  }
  .rotate {
    transform: rotateX(180deg);
  }
</style>
