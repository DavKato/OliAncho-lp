<script>
  import Btn from '../fragments/Btn.svelte'
</script>

<section id="features">
  <div class="container">
    <img
      src="pc/2x/leaf2.png"
      alt=""
      srcset="pc/1x/leaf2.png 1x, pc/2x/leaf2.png 2x"
      class="leaf1"
    />
    <img
      src="pc/2x/leaf4.png"
      alt=""
      srcset="pc/1x/leaf4.png 1x, pc/2x/leaf4.png 2x"
      class="leaf2"
    />
    <div class="fairy-box">
      <img
        src="pc/2x/leaves.man.png"
        alt=""
        srcset="pc/1x/leaves.man.png 1x, pc/2x/leaves.man.png 2x"
        class="img-fairy"
      />
      <img
        src="pc/2x/words.red.png"
        alt=""
        srcset="pc/1x/words.red.png 1x, pc/2x/words.red.png 2x"
        class="img-fairy-words"
      />
    </div>

    <h1>OliAncho<span class="title-span">あんしんの理由</span></h1>
    <div class="title-box">
      <img
        src="pc/2x/words.redblack.png"
        alt=""
        srcset="pc/1x/words.redblack.png 1x, pc/2x/words.redblack.png 2x"
        class="img-title"
      />
      <img
        src="pc/2x/line.reason.png"
        alt=""
        srcset="pc/1x/line.reason.png 1x, pc/2x/line.reason.png 2x"
        class="img-line"
      />
    </div>
    <dl>
      <div class="caption-box caption-box1">
        <span class="deco-num deco-num1">1</span>
        <dt>
          <h2>
            <span class="dt-span dt1-1">1人1人に合わせた</span><br /><span
              class="dt-span dt1-2"
              >デザインをご提案！</span
            >
          </h2>
        </dt>
        <dd>
          わたしたちは既存のテンプレートに頼りません！みなさまのご状況やご要望をしっかりと伺い、あなたにピッタリの、世界に1つだけのWEBサイトをご提案します。<br />一緒にステキなWEBサイトを作りましょう！
        </dd>
      </div>
      <div class="caption-box caption-box2">
        <span class="deco-num deco-num2">2</span>
        <dt>
          <h2>
            <span class="dt-span dt2-1">WEB初心者さんにも</span><br /><span
              class="dt-span dt2-2"
              >わかりやすい説明を！</span
            >
          </h2>
        </dt>
        <dd>
          WEBの専門用語って、難しくて分かりづらいですよね…でも大丈夫！私たちは分かりやすい言葉でしっかり説明することを心掛けています。<br />みなさま1人1人とステキな関係を築きたいと思っていますので、わからないことがあればお気軽にお尋ねください♪
        </dd>
      </div>
      <div class="caption-box caption-box3">
        <span class="deco-num deco-num3">3</span>
        <dt>
          <h2 class="last-h2">
            <span class="dt-span dt3-1">納品後1ヶ月の</span><br /><span
              class="dt-span dt3-2"
              >うれしい保証付き！</span
            >
          </h2>
        </dt>
        <dd>
          「納品したら、さようなら〜」そんなことでは困りますよね。わたしたちは納品後1ヶ月、無償でサポートをさせていただきます。<br />使用方法についてのアドバイスやフォローはもちろんのこと、納品後の配置変更や調整も小規模であれば喜んで対応させていただきます！
        </dd>
      </div>
    </dl>
  </div>
  <p>わたしたちはWEBクリエイターとして夫婦で活動しています。</p>
  <p>いつでもお気軽にお問い合わせください :)</p>
  <a href="#contact">
    <Btn text="ご依頼・ご相談はこちらから" m0a>
      <img
        src="pc/2x/davigobu.small.png"
        alt=""
        srcset="pc/1x/davigobu.small.png 1x, pc/2x/davigobu.small.png 2x"
        class="img-davigobu"
        slot="pre-img"
      />
      <img
        src="pc/2x/line.button.png"
        alt=""
        srcset="pc/1x/line.button.png 1x, pc/2x/line.button.png 2x"
        class="img-deco-btn"
        slot="post-img"
      />
    </Btn>
  </a>
</section>

<style>
  section {
    width: 100%;
    margin-top: 4.4rem;
  }
  .container {
    position: relative;
    background-color: var(--cream);
    min-height: 1470px;
    width: 94%;
    margin-left: auto;
    box-shadow: 10px 10px 6px var(--shadow);
    padding-top: 0.1rem;
    padding-bottom: 1rem;
  }
  h1 {
    font-family: var(--times);
    font-size: 2.2rem;
    font-weight: 500;
    margin: 0.4rem 4.2rem;
    line-height: 1.4;
  }
  .title-span {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
  .title-box {
    position: relative;
    text-align: right;
    width: 464px;
    margin-bottom: 3rem;
  }
  .img-title {
    width: 393px;
    height: 65px;
  }
  .img-line {
    width: 488px;
    height: 300px;
    position: absolute;
    top: -105px;
    right: 0;
  }

  dl {
    width: 100%;
  }
  .caption-box {
    position: relative;
    border: 2px solid #000;
    padding: 0 3.2% 2.4rem;
  }
  .caption-box1 {
    width: 41%;
    margin-right: 16%;
    margin-left: auto;
  }
  .caption-box2 {
    width: 45.5%;
    margin-top: -2.7rem;
    margin-right: auto;
    margin-left: 3.5%;
  }
  .caption-box3 {
    width: 47.75%;
    margin-right: 13%;
    margin-left: auto;
    margin-top: -3rem;
  }
  h2 {
    font-weight: 700;
    font-size: 2.2rem;
    margin-bottom: 2rem;
  }
  .dt-span {
    display: inline-block;
    box-shadow: 5px 5px 6px var(--shadow);
    padding: 0.6rem 1.7rem;
  }
  .dt1-1 {
    background-color: var(--wine);
    color: #fff;
    margin-top: 1.4rem;
    margin-left: -6rem;
  }
  .dt1-2 {
    background-color: #fff;
    color: var(--wine);
    margin-left: -1rem;
  }
  .dt2-1 {
    background-color: #fff;
    color: #000;
    margin-top: 2.5rem;
    margin-left: -1rem;
  }
  .dt2-2 {
    background-color: var(--ocher);
    color: #000;
    margin-left: -7rem;
  }
  .last-h2 {
    text-align: right;
    margin-top: -1.7rem;
    margin-right: -1.5rem;
  }
  .dt3-1 {
    background-color: #fff;
    color: var(--wine);
    margin-right: -3rem;
  }
  .dt3-2 {
    background-color: var(--wine);
    color: #fff;
  }
  dd {
    margin: 0;
    font-size: 1.25rem;
    line-height: 2;
  }

  p {
    font-size: 1.6rem;
    text-align: center;
    line-height: 1.6;
    margin: 7.5rem 0 0;
  }
  p:last-of-type {
    margin: 0 0 2.6rem;
  }
  .img-davigobu {
    width: 74px;
    height: 74px;
    margin-right: 0.2rem;
  }
  .img-deco-btn {
    position: absolute;
    left: 105%;
    top: -34%;
  }

  .deco-num {
    position: absolute;
    color: rgba(132, 38, 18, 0.25);
    font-size: 310px;
    font-weight: 900;
  }
  .deco-num1 {
    bottom: 32%;
    left: 89%;
  }
  .deco-num2 {
    bottom: 83%;
    left: 2%;
  }
  .deco-num3 {
    top: 29%;
    left: 90%;
  }
  .leaf1 {
    position: absolute;
    width: 303px;
    top: 10%;
    left: 14%;
    transform: rotate(24deg);
  }
  .leaf2 {
    position: absolute;
    width: 521px;
    transform: rotate(-40deg);
    top: 42%;
    left: 56%;
  }
  .fairy-box {
    position: absolute;
    top: 62%;
    right: 53%;
  }
  .img-fairy-words {
    position: absolute;
    transform: rotate(61deg);
    top: 45%;
    left: 37%;
  }
</style>
