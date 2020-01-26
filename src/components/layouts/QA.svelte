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
  section {
    margin-top: 3rem;
    min-height: 1300px;
    height: calc(375px + 1250px - (100vw / 5));
    position: relative;
    overflow: hidden;
    transform: rotate(-11deg);
    padding-top: 4rem;
  }
  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: rotate(11deg);
    margin-left: -6px;
    /* margin-top: 4rem; */
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
  @media (max-width: 1000px) {
    section {
      height: calc(375px + 1120px - (100vw / 5));
    }
    h1 {
      font-size: 2.1rem;
    }
    .qa {
      font-size: 7.3rem;
    }
  }
  @media (max-width: 890px) {
    section {
      min-height: auto;
      overflow: visible;
      height: calc(375px + 910px - (100vw / 5));
      padding-top: 3rem;
    }
    .container {
      margin-top: 0;
    }
    h1 {
      font-size: 2rem;
    }
    .qa {
      font-size: 7rem;
    }
  }
  @media (max-width: 720px) {
    section {
      height: calc(375px + 680px - (100vw / 5));
    }
    h1 {
      font-size: 1.6rem;
    }
    .qa {
      font-size: 5.3rem;
    }
  }
  @media (max-width: 580px) {
    section {
      padding-top: 3rem;
      height: calc(375px + 620px - (100vw / 5));
    }
    h1 {
      font-size: 1.5rem;
    }
    .qa {
      font-size: 4.9rem;
    }
  }
  @media (max-width: 460px) {
    h1 {
      font-size: 1.4rem;
    }
    .qa {
      font-size: 4.5rem;
    }
  }
</style>
