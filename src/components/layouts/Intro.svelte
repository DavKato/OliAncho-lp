<script>
  import Image from 'svelte-i-pack'
  import DownArrow from '../materials/DownArrow.svelte'
  import SimpleLine from '../materials/SimpleLine.svelte'

  const list = [
    { text: '誰に何を頼めばいいか', strong: '分からない' },
    { text: 'WEBに疎いから', strong: '不安でいっぱい' },
    { text: '納品後もサポートしてくれなきゃ', strong: '困る' },
  ]
</script>

<section>
  <div class="title-box">
    <SimpleLine></SimpleLine>
    <h1>
      WEBサイトを作りたい！<br />
      <span class="title-span">でもこんなお悩みはありませんか？</span>
    </h1>
    <SimpleLine rotate></SimpleLine>
  </div>

  <div class="content-box">
    {#each list as item}
    <p class="demand">
      { item.text }<strong>{ item.strong }</strong
      ><span style="font-weight: 900;">！</span>
    </p>
    {/each}
    <div class="deco-box">
      <span class="q1">?</span><span class="q2">?</span
      ><span class="q3">?</span>
      <Image
        src="pc/2x/gentleman.black.png"
        width="836*2"
        alt=""
        class="intro-man"
      ></Image>
    </div>

    <DownArrow color="var(--ocher)"></DownArrow>
  </div>
  <div class="footer-box">
    <p class="footer-p">もう大丈夫！</p>
    <p class="footer-p">
      わたしたち
      <span class="footer-span1"
        >OliAncho<span class="footer-span2">(おりあんちょ)</span></span
      >にお任せください！
    </p>
  </div>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 4rem;
  }
  .title-box {
    display: flex;
    align-items: center;
  }
  h1 {
    font-size: 1.7rem;
    color: var(--wine);
    text-align: center;
    line-height: 1.4;
    font-weight: 600;
    margin: 0 1.6rem;
  }
  .title-span {
    font-size: 2.5rem;
    color: #000;
  }
  .content-box {
    background-color: var(--ocher);
    width: 100%;
    height: 660px;
    margin-top: 3.625rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    box-shadow: 5px 5px 6px var(--shadow);
  }
  .demand {
    font-family: var(--noto);
    font-size: 2.2rem;
    background-color: #fff;
    width: 70%;
    height: 6.9rem;
    padding: 0rem 8% 0rem 0;
    line-height: 6.9rem;
    transform: rotate(-10deg);
    text-align: right;
    margin-bottom: 2rem;
    margin-left: -1.5rem;
    box-shadow: 5px 5px 6px var(--shadow);
  }
  .demand:first-child {
    margin-top: -2rem;
  }
  strong {
    color: var(--wine);
    font-size: 2.8rem;
    font-weight: 900;
  }
  .deco-box {
    position: absolute;
    right: -3rem;
    bottom: -7rem;
    height: 100%;
    width: 520px;
    font-family: var(--times);
  }
  .q1 {
    position: absolute;
    font-size: 137px;
    top: 2%;
    left: 31%;
    transform: rotate(4deg);
  }
  .q2 {
    position: absolute;
    font-size: 165px;
    top: -11%;
    left: 42%;
    transform: rotate(-14deg);
  }
  .q3 {
    position: absolute;
    font-size: 114px;
    top: -5%;
    left: 58%;
    transform: rotate(15deg);
  }
  :global(.intro-man) {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .footer-box {
    margin-top: 4rem;
    text-align: center;
    font-weight: 600;
  }
  .footer-p {
    font-size: 2.2rem;
    margin: 0;
    line-height: 1.3;
  }
  .footer-span1 {
    font-size: 2.8rem;
    color: var(--wine);
  }
  .footer-span2 {
    font-size: 2.2rem;
  }
</style>
