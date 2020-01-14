<script>
  import LabelSeal from '../materials/LabelSeal.svelte'
  import QAList from '../fragments/QAList.svelte'
</script>

<section id="qa">
  <LabelSeal></LabelSeal>
  <LabelSeal rotate></LabelSeal>

  <div class="container">
    <div class="h-box">
      <span class="qa">QA</span>
      <h1>
        よくある質問
      </h1>
    </div>

    <QAList></QAList>
  </div>
</section>

<style>
  /* TODO: media query needed around < 900px */
  section {
    margin-top: 3rem;
    min-height: 1300px;
    height: calc(375px + 1250px - (100vw / 5));
    position: relative;
    overflow: hidden;
    transform: rotate(-11deg);
  }
  .container {
    margin-top: 4rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: rotate(11deg);
  }
  .h-box {
    position: relative;
  }
  .qa {
    font-family: var(--times);
    font-size: 7.8rem;
    color: rgba(132, 39, 18, 0.2);
  }
  h1 {
    position: absolute;
    font-size: 2.2rem;
    left: 50%;
    top: 41%;
    transform: translateX(-50%);
    white-space: nowrap;
  }
</style>
