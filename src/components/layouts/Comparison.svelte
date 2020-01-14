<script>
  import CompTable from '../fragments/ComparisonTable.svelte'
  import YellowCircle from '../materials/YellowCircle.svelte'
  import SimpleLine from '../materials/SimpleLine.svelte'
  import Dot from '../materials/Dot.svelte'
</script>

<section id="comparison">
  <YellowCircle top="-15.5%" right="30%"></YellowCircle>
  <img
    src="pc/2x/leaf.man.png"
    alt=""
    srcset="pc/1x/leaf.man.png 1x, pc/2x/leaf.man.png 2x"
    class="img-leafman"
  />

  <div class="container">
    <div class="h-container">
      <SimpleLine x="52" y="55" color="var(--wine)" rotate></SimpleLine>
      <h1>大手サービスとの違い！</h1>
      <SimpleLine x="52" y="55" color="var(--wine)"></SimpleLine>
      <div class="h2-box">
        <h2>OliAnchoは<br /><Dot sentence="ここ"></Dot>がちがう！</h2>
        <img
          src="pc/2x/gunya.white.png"
          alt=""
          srcset="pc/1x/gunya.white.png 1x, pc/2x/gunya.white.png 2x"
          class="img-gunya"
        />
      </div>
    </div>

    <CompTable></CompTable>

    <div class="p-container">
      <p class="p1">
        大手企業は作業をマニュアル化しているため、<br />作業は早いが、ありきたりなWEBサイトばかり…
      </p>

      <div class="p2-box">
        <p class="p2">
          わたしたち<span class="p-span">OliAncho</span
          >は<br />みなさま1人1人と<span class="underline p-span"
            >ステキな関係</span
          >を築き、<br />他にはない<span class="underline p-span"
            >あなたにぴったり</span
          >のWEBサイトをご提案します:)
        </p>
        <img
          src="pc/2x/line.difference.png"
          alt=""
          srcset="pc/1x/line.difference.png 1x, pc/2x/line.difference.png 2x"
          class="img-line"
        />
      </div>
    </div>
  </div>
</section>

<style>
  section {
    position: relative;
    margin-top: 19rem;
    padding-bottom: 11rem;
  }
  .container {
    position: relative;
    width: 75%;
    max-width: 960px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  .h-container {
    display: flex;
    flex-direction: row-reverse;
    margin-right: 3rem;
    margin-bottom: 2rem;
  }
  h1 {
    font-size: 2.5rem;
    margin: 0;
    white-space: nowrap;
  }
  .h2-box {
    position: relative;
    transform: rotate(-16deg);
    margin-right: 1.4rem;
    margin-top: -2rem;
  }
  h2 {
    position: relative;
    font-size: 2.2rem;
    margin: 0;
    line-height: 1.3;
    z-index: 20;
  }
  .img-gunya {
    position: absolute;
    top: 51%;
    left: 45%;
    transform: translate(-50%, -50%) rotate(16deg);
    z-index: 10;
  }
  p {
    margin: 0;
  }
  .p-container {
    margin-top: 5rem;
    width: 83.5%;
    line-height: 1.8;
    position: relative;
  }
  .p1 {
    font-size: 1.44rem;
  }
  .p2-box {
    margin-top: 4rem;
  }
  .p2 {
    font-size: 1.56rem;
    font-weight: 700;
  }
  .p-span {
    font-size: 2rem;
    color: var(--wine);
  }
  .underline {
    text-decoration: #fff underline;
  }
  .img-line {
    position: absolute;
    top: 45%;
    right: 28%;
    filter: drop-shadow(3px 3px 6px var(--shadow));
  }
  .img-leafman {
    position: absolute;
    bottom: 0;
    left: 63%;
  }
</style>
