<script>
  import Image from 'svelte-i-pack'
  import DownArrow from '../materials/DownArrow.svelte'

  const spiders = [
    {
      text: '気持ちの良い取引',
      animationStart: 200,
    },
    {
      text: 'わかりやすい説明',
      animationStart: 400,
    },
    {
      text: 'オリジナルデザイン',
      animationStart: 300,
    },
    {
      text: '1ヶ月保証付き',
      animationStart: 100,
    },
  ]
</script>

<header id="hero" tabindex="-1">
  <div class="left-box">
    <div class="wine-box">
      <img src="svg/wine.svg" alt="" />
      <Image
        src="pc/2x/leaf3.png"
        width="502*2"
        sizes="160px"
        alt=""
        class="hero-leaf"
      ></Image>
      <h2 class="left-title">WEBサイト制作<br />承ります</h2>
    </div>
  </div>

  <div class="right-box">
    <h2 class="right-title">
      個人だからこそできる<span class="strong"
        >あなたにぴったりの<br />WEBサイトを！</span
      >
    </h2>
    <div class="spider-container">
      {#each spiders as spider}
      <div class="spider-box">
        <p class="spider-text">{spider.text}</p>
        <Image
          src="pc/2x/spider.thread.top.png"
          width="54*2"
          class="hero-spider"
          style="width: 54px;"
          alt=""
          no-inline
        ></Image>
      </div>
      {/each}
    </div>
  </div>
  <DownArrow></DownArrow>
</header>

<style>
  h2 {
    font-family: var(--noto);
  }

  header {
    display: flex;
    align-items: flex-end;
    position: relative;
    z-index: 10;
    min-height: 780px;
    height: 100vh;
    width: 100%;
    box-shadow: 0 5px 6px var(--shadow);
  }
  .left-box {
    width: 40%;
  }
  .wine-box {
    max-width: 400px;
    margin-left: auto;
    position: relative;
    padding-bottom: 1rem;
  }
  :global(.hero-leaf) {
    top: 8%;
    left: 19%;
    transform: rotate(22deg);
    position: absolute;
    width: 10rem;
  }
  .left-title {
    top: 26.5%;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    color: white;
    font-size: 2.5rem;
    font-weight: 900;
    white-space: nowrap;
    text-align: center;
  }
  .right-box {
    padding-bottom: 5rem;
    width: 58%;
    max-width: 830px;
    margin-left: 2.3rem;
  }
  .right-title {
    color: var(--wine);
    font-size: 1.875rem;
    line-height: 1.4;
    padding-left: 5rem;
    position: relative;
    z-index: 10;
  }
  .strong {
    display: block;
    font-size: 3.75rem;
    margin-top: 0.6rem;
  }

  .spider-container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 5rem;
    position: relative;
    z-index: 0;
  }
  .spider-box {
    position: relative;
    background-color: #d6c66e;
    width: 19rem;
    height: 4.8rem;
    margin-right: 1.7rem;
    margin-bottom: 2.1rem;
    text-align: center;
    box-shadow: 4px 4px 7px var(--shadow);
    z-index: 10;
  }
  .spider-box:nth-child(3) {
    margin-left: 4rem;
  }
  .spider-box:last-child,
  .spider-box:nth-child(3) {
    z-index: 0;
    box-shadow: 3px 3px 6px var(--shadow);
  }
  .spider-text {
    font-size: 1.875rem;
    margin: 0;
    line-height: 5rem;
  }
  :global(.hero-spider) {
    position: absolute;
    bottom: 72%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
  }
</style>
