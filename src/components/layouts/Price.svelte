<script>
  import YellowCircle from '../materials/YellowCircle.svelte'

  const list = [
    {
      title: 'ダミーテキスト',
      price: '10,000円',
    },
    {
      title: 'ダミーテキスト',
      price: '10,000円',
    },
    {
      title: 'ダミーテキスト',
      price: '10,000円',
    },
    {
      title: 'ダミーテキスト',
      price: '10,000円',
    },
    {
      title: 'ダミーテキスト',
      price: '10,000円',
    },
  ]
</script>
<section id="price">
  <YellowCircle top="-20%" left="36%"></YellowCircle>
  <img
    src="pc/2x/leaf3.png"
    alt=""
    srcset="pc/1x/leaf3.png 1x, pc/2x/leaf3.png 2x"
    class="img-leaf"
  />
  <img src="svg/spiderweb.svg" alt="" class="web1" />
  <img src="svg/spiderweb.svg" alt="" class="web2" />

  <div class="container">
    <h1>
      お値段
      <img
        src="pc/2x/line.contact.png"
        srcset="pc/1x/line.contact.png 1x, pc/2x/line.contact.png 2x"
        alt=""
        class="img-line"
      />
    </h1>
    <dl>
      {#each list as item, i}
      <div class="list-container">
        <dt>{item.title}</dt>
        <dd class:runner="{i === 0}">
          {item.price} {#if i === 0}
          <img src="pc/1x/spider.thread.price.png" alt="" class="spider" />
          {/if}
        </dd>
      </div>
      {/each}
    </dl>
  </div>
</section>

<style>
  img {
    position: absolute;
    filter: drop-shadow(5px 5px 6px var(--shadow));
  }

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
  .img-line {
    position: absolute;
    width: 20rem;
    bottom: -190%;
    right: -81%;
    filter: drop-shadow(0px 3px 6px var(--d-shadow));
  }
  dl {
    margin-top: 5rem;
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
  .spider {
    bottom: 0;
    right: 94%;
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
  .img-leaf {
    width: 335px;
    bottom: 4.5%;
    right: 72.5%;
    transform: rotate(155deg);
  }
</style>
