<script>
  export let top,
    left = 'auto',
    right = 'auto',
    big = false
</script>
<div style="top: {top}; left: {left}; right: {right};" class:big></div>

<style>
  div {
    width: 1506px;
    height: 1506px;
    background-color: var(--ocher);
    border-radius: 50%;
    position: absolute;
  }
  .big {
    width: 140vw;
    min-width: 1900px;
    height: 100vw;
    min-height: 1500px;
  }
</style>
