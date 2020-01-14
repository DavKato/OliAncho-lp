<script>
  export let text,
    type = '',
    disabled = false,
    m0a = false
</script>
<button class:m0a {disabled} {type}>
  <slot name="pre-img"></slot>
  <span>{ text }</span>
  <img
    src="pc/2x/callout.button.png"
    alt=""
    srcset="pc/1x/callout.button.png 1x, pc/2x/callout.button.png 2x"
  />
  <slot name="post-img"></slot>
</button>

<style>
  button {
    background-color: var(--wine);
    border-radius: 34px;
    display: flex;
    align-items: center;
    padding: 0 1rem 0 2rem;
    box-shadow: 5px 5px 6px var(--shadow);
    position: relative;
    cursor: pointer;
  }
  span {
    color: #fff;
    font-size: 1.88rem;
    font-weight: 700;
    padding: 1.23rem 0;
  }
  img {
    width: 98px;
    height: 66px;
    margin-top: -1.6rem;
  }
  .m0a {
    margin: 0 auto;
  }
  [disabled] {
    background-color: #968b88;
    cursor: initial;
  }
</style>
