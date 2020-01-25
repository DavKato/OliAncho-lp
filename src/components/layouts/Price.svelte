<script>
  import YellowCircle from '../materials/YellowCircle.svelte'
  import Image from 'svelte-i-pack'

  const list = [
    {
      title: 'シンプルプラン',
      price: '100,000円',
    },
    {
      title: 'フリースタイルプラン',
      price: '300,000円',
    },
    {
      title: 'ダミーテキスト',
      price: '100,000円',
    },
    {
      title: 'ダミーテキスト',
      price: '100,000円',
    },
    {
      title: 'ダミーテキスト',
      price: '100,000円',
    },
  ]
</script>
<section id="price">
  <YellowCircle price></YellowCircle>
  <Image
    src="pc/2x/leaf3.png"
    width="502*2"
    alt=""
    class="price-leaf abs"
    no-inline
  ></Image>
  <img src="svg/spiderweb.svg" alt="" class="web1 abs d-shadow" />
  <img src="svg/spiderweb.svg" alt="" class="web2 abs d-shadow" />

  <div class="container">
    <h1>
      お値段
      <Image
        src="pc/2x/line.contact.png"
        width="284*2"
        alt=""
        class="price-line abs d-shadow"
      ></Image>
    </h1>
    <dl>
      {#each list as item, i}
      <div class="list-container">
        <dt>{item.title}</dt>
        <dd class:runner="{i === 0}">
          {item.price} {#if i === 0}
          <Image
            src="pc/2x/spider.thread.price.png"
            width="1303*2"
            alt=""
            class="price-spider abs d-shadow"
          ></Image>
          {/if}
        </dd>
      </div>
      {/each}
    </dl>
  </div>
</section>

<style>
  section {
    position: relative;
    margin-top: 15rem;
    padding-bottom: 20rem;
  }
  .container {
    width: 66%;
    margin-left: auto;
    position: relative;
  }
  h1 {
    position: relative;
    margin-left: 9rem;
    display: inline-block;
    font-size: 2.5rem;
    line-height: 1.3;
    font-weight: 700;
  }
  :global(.price-line) {
    position: absolute;
    width: 8em;
    bottom: -190%;
    right: -81%;
  }
  dl {
    margin-top: 6rem;
  }
  .list-container {
    display: flex;
    align-items: center;
    margin-bottom: 76px;
  }
  dt {
    font-size: 1.875rem;
    font-weight: 700;
  }
  dd {
    margin-left: 2.2rem;
    font-size: 3.1rem;
    padding: 1rem 7rem 0.5rem;
    background-color: #fff;
    box-shadow: 5px 5px 6px var(--shadow);
  }
  .runner {
    position: relative;
  }
  :global(.price-spider) {
    bottom: 0;
    right: 94%;
    width: 1303px;
    transform: translateY(40%);
  }

  .web1 {
    width: 510px;
    height: 510px;
    top: -4%;
    right: 71%;
    transform: rotate(18deg);
  }
  .web2 {
    width: 512px;
    height: 512px;
    transform: rotate(32deg);
    bottom: 6%;
    right: 73%;
  }
  :global(.price-leaf) {
    width: 335px;
    bottom: 4.5%;
    right: 72.5%;
    transform: rotate(155deg);
    filter: drop-shadow(-4px -4px 3px var(--shadow));
  }
  @media (max-width: 1150px) {
    dd {
      font-size: 2.8rem;
    }
  }
  @media (max-width: 1000px) {
    dt {
      font-size: 1.8rem;
    }
    dd {
      font-size: 2.7rem;
      padding: 1rem 4rem 0.5rem;
      margin-left: 1.6rem;
    }
  }
  @media (max-width: 890px) {
    h1 {
      font-size: 2.2rem;
    }
    dl {
    }
    .list-container {
      background-color: #fff;
      box-shadow: 5px 5px 6px var(--shadow);
      flex-direction: column;
      align-items: flex-start;
      padding: 12px 26px 14px 22px;
      position: relative;
      margin-bottom: 60px;
    }
    dd {
      margin: 0.5rem 0 0;
      padding: 0;
      box-shadow: none;
      align-self: flex-end;
    }
    .runner {
      position: static;
    }
  }
  @media (max-width: 720px) {
    h1 {
      font-size: 1.9rem;
    }
  }
  @media (max-width: 580px) {
    h1 {
      font-size: 1.6rem;
    }
  }
  @media (max-width: 460px) {
    h1 {
      font-size: 1.5rem;
    }
  }
</style>
