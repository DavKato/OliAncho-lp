<script>
  export let text,
    type = '',
    disabled = false,
    m0a = false,
    feat = false,
    cont = false,
    postLine = false
</script>
<div class:flip="{type !== 'submit'}">
  {#if feat}
  <button class:m0a class="feat back" tabindex="-1" aria-hidden="true">
    <slot></slot>
    <span>{ text }</span>
    <Image
      src="pc/2x/callout.button.png"
      width="98*2"
      alt=""
      class="btn-cto"
    ></Image>
  </button>
  {/if}
  <button
    class:m0a
    class:feat
    class:cont
    {disabled}
    {type}
    class="front"
    tabindex="{type === 'submit' ? '0' : '-1'}"
  >
    <slot></slot>
    <span>{ text }</span>
    <Image
      src="pc/2x/callout.button.png"
      width="98*2"
      alt=""
      class="btn-cto"
    ></Image>
  </button>
  {#if postLine}
  <Image
    src="pc/2x/line.button.png"
    width="142*2"
    alt=""
    class="btn-deco"
  ></Image>
  {/if}
</div>

<style>
  .flip {
    position: relative;
    perspective: 800px;
  }
  .flip:hover .front {
    transform: rotateX(180deg);
    box-shadow: none;
  }
  .flip:hover .back {
    transform: rotateX(0deg) translateX(-50%);
    box-shadow: 5px 5px 6px var(--shadow);
  }
  button {
    background-color: var(--wine);
    border-radius: 50px;
    display: flex;
    align-items: center;
    padding: 0 1rem 0 2rem;
    cursor: pointer;
  }
  .feat {
    backface-visibility: hidden;
    transition: transform 0.5s;
    outline: solid var(--hoveredCol, transparent) 3px;
    outline-offset: 10px;
  }
  .front {
    position: relative;
    box-shadow: 5px 5px 6px var(--shadow);
  }
  .back {
    position: absolute;
    top: 0;
    left: 50%;
    transform: rotateX(-180deg) translateX(-50%);
  }
  [type='submit'] {
    transition: transform 0.2s;
  }
  [type='submit']:focus,
  [type='submit']:hover {
    outline: none;
    transform: scale(1.05);
  }
  span {
    color: #fff;
    font-size: 1.88rem;
    font-weight: 700;
    padding: 1.23rem 0;
  }
  .btn-cto {
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
  [disabled]:hover {
    transform: none;
  }
  .btn-deco {
    position: absolute;
    right: 13%;
    top: -34%;
    width: 142px;
  }

  @media (max-width: 1150px) {
    .btn-deco {
      right: 10%;
    }
  }
  @media (max-width: 1000px) {
    span {
      font-size: 1.7rem;
    }
    .btn-deco {
      right: 7%;
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
    .btn-cto {
      width: 85px;
    }
    .btn-deco {
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
    .btn-cto {
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
