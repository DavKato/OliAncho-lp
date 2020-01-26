<script>
  export let text,
    type = '',
    disabled = false,
    m0a = false,
    feat = false,
    cont = false,
    postLine = false
</script>
<button class:m0a class:feat class:cont {disabled} {type}>
  <slot></slot>
  <span>{ text }</span>
  <Image
    src="pc/2x/callout.button.png"
    width="98*2"
    alt=""
    class="btn-cto"
  ></Image>
  {#if postLine}
  <Image
    src="pc/2x/line.button.png"
    width="142*2"
    alt=""
    class="btn-deco"
  ></Image>
  {/if}
</button>

<style>
  button {
    background-color: var(--wine);
    border-radius: 50px;
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
  :global(.btn-cto) {
    width: 98px;
    margin-top: -1.6rem;
  }
  .m0a {
    margin: 0 auto;
  }
  [disabled] {
    background-color: #968b88;
    cursor: initial;
  }
  :global(.btn-deco) {
    position: absolute;
    left: 105%;
    top: -34%;
    width: 142px;
  }

  @media (max-width: 1000px) {
    span {
      font-size: 1.7rem;
    }
  }
  @media (max-width: 890px) {
    .cont {
      padding: 0 1.4rem 0 3.2rem;
    }
    .cont span {
      padding: 0.9rem 0;
    }
    .feat span {
      font-size: 1.5rem;
      padding: 0;
    }
    :global(.btn-cto) {
      width: 85px;
    }
    :global(.btn-deco) {
      display: none;
    }
  }
  @media (max-width: 720px) {
    .feat {
      padding: 0 0.4rem 0px 1rem;
    }
    .cont {
      padding: 0 0.8rem 0 2.5rem;
    }
    .feat span {
      font-size: 1.3rem;
    }
    :global(.btn-cto) {
      width: 73px;
    }
  }
  @media (max-width: 580px) {
    .feat span {
      font-size: 1.2rem;
    }
    .cont span {
      font-size: 1.4rem;
      padding: 0.6rem 0;
    }
  }
  @media (max-width: 460px) {
    .feat span {
      padding: 0.9rem 0;
    }
    .cont span {
      font-size: 1.4rem;
      padding: 0.6rem 0;
    }
  }
</style>
