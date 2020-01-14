<script>
  const list = [
    {
      heading: '無料相談・お見積もり',
      content:
        'どんな些細なことでも無料でご相談承ります！\nその後、ヒアリング内容を元にお見積もりをさせていただきます。',
    },
    {
      heading: 'ご契約',
      content:
        'ご納得いただけた段階でご契約。\nわかりやすい言葉でしっかり説明しますので、ご安心ください。',
    },
    {
      heading: '作業開始',
      content:
        'ここからは夫婦二人三脚の作業です！\n基本的にデザインはGobu、コーディングはDavideが担当いたします。',
    },
    {
      heading: 'ご相談・ご確認',
      content:
        '作業開始から納品まで、随時お客様に確認していただきながら作業を\n進めていきます。だからご希望に合ったサイトを作れるんです！',
    },
    {
      heading: '納品',
      content:
        '最終確認でご納得いただければ、納品となります。\nその後1ヶ月の無料サポートもありますのでご安心ください。',
    },
  ]
</script>

<section id="flow">
  <!-- Deco -->
  <img
    src="pc/2x/olivetree.png"
    alt=""
    srcset="pc/1x/olivetree.png 1x, pc/2x/olivetree.png 2x"
    class="img-tree"
  />
  <img
    src="pc/2x/leaf3.png"
    alt=""
    srcset="pc/1x/leaf3.png 1x, pc/2x/leaf3.png 2x"
    class="drop-shadow img-leaf1"
  />
  <img
    src="pc/2x/leaf3.png"
    alt=""
    srcset="pc/1x/leaf3.png 1x, pc/2x/leaf3.png 2x"
    class="drop-shadow img-leaf2"
  />
  <img
    src="pc/2x/leaf3.png"
    alt=""
    srcset="pc/1x/leaf3.png 1x, pc/2x/leaf3.png 2x"
    class="drop-shadow img-leaf3"
  />
  <!-- /Deco -->

  <div class="container">
    <h1>
      ご納品までの流れ
      <img
        src="pc/2x/line.flow.png"
        srcset="pc/1x/line.flow.png 1x, pc/2x/line.flow.png 2x"
        alt=""
        class="img-line"
      />
    </h1>

    <dl>
      {#each list as item, i}
      <div class="list-container">
        <div class="step-box">
          <span class="step-span step-step">STEP</span>
          <div class="step-span step-num">{i+1}</div>
        </div>
        <dt>{item.heading}</dt>
        <dd>{item.content}</dd>
      </div>
      {/each}
    </dl>
  </div>
</section>

<style>
  img {
    position: absolute;
  }

  section {
    margin-top: 20rem;
    position: relative;
    padding-bottom: 6rem;
  }
  .container {
    width: 68%;
    margin-left: auto;
  }
  h1 {
    position: relative;
    display: inline-block;
    font-size: 2.5rem;
    line-height: 1.3;
    font-weight: 700;
  }
  .img-line {
    position: absolute;
    bottom: -204%;
    right: 7.5%;
    filter: drop-shadow(0px 3px 6px var(--d-shadow));
  }
  dl {
    margin-top: 5rem;
  }
  .list-container {
    background-color: rgba(245, 244, 242, 0.8);
    box-shadow: 5px 5px 6px var(--shadow);
    padding: 1.7rem 0 1rem 10%;
    position: relative;
    margin-bottom: 2.8rem;
  }
  .list-container:last-child > div {
    background-color: var(--ocher);
    color: #000;
  }
  .list-container:last-child > dt {
    border-bottom: 3px solid var(--ocher);
  }
  .step-box {
    width: 7.6rem;
    height: 7.6rem;
    border-radius: 50%;
    background-color: var(--wine);
    color: #fff;
    font-family: var(--times);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    line-height: 0.9;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-50%, -50%);
    box-shadow: 3px 3px 6px var(--shadow);
  }
  .step-step {
    font-size: 1.875rem;
  }
  .step-num {
    font-size: 3.75rem;
  }
  dt {
    font-weight: 700;
    font-size: 1.875rem;
    border-bottom: 3px solid var(--wine);
    display: inline-block;
    padding: 0 1rem 0 4rem;
    margin-left: -4rem;
  }
  dd {
    font-size: 1.25rem;
    margin: 0.5rem 0 0;
    white-space: pre;
    line-height: 1.9;
  }

  .img-tree {
    left: 0;
    bottom: 0;
    transform: translateX(-45%);
  }
  .drop-shadow {
    filter: drop-shadow(5px 5px 6px var(--shadow));
  }
  .img-leaf1 {
    width: 472px;
    top: -25%;
    right: -5%;
    transform: rotate(-48deg);
  }
  .img-leaf2 {
    width: 438px;
    top: 63%;
    right: -3%;
  }
  .img-leaf3 {
    width: 456px;
    top: 0;
    left: -6%;
    transform: rotate(129deg);
  }
</style>
