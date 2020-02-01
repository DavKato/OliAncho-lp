<script>
  import { onMount } from 'svelte'
  export let color = '#842612',
    top = '-3px',
    sentence,
    bold = false
</script>

{#each sentence as text}
<span style="--color: {color}; --top: {top}" class:bold>{text}</span>
{/each}

<style>
  span {
    position: relative;
  }
  span:after {
    content: '・';
    color: var(--color);
    font-size: 2.4rem;
    position: absolute;
    top: var(--top);
    width: 100%;
    left: 0;
    line-height: 0;
    display: flex;
    justify-content: center;
  }
  .bold {
    font-weight: 700;
  }
  @media (max-width: 720px) {
    span:after {
      font-size: 2rem;
    }
  }
  @media (max-width: 580px) {
    span:after {
      font-size: 1.5rem;
    }
  }
</style>
