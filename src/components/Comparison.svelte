<script>
  import CompTable from './fragments/ComparisonTable.svelte';
  import YellowCircle from './fragments/YellowCircle.svelte';
</script>

<section class="relative">
  <div class="relative z-10">
    <h1>大手サービスとの違い</h1>
    <h2 style="background-image: url(pc/1x/gunya.white.png);">
      OliAnchoはここが違う！
    </h2>

    <CompTable></CompTable>

    <p>
      大手企業は作業をマニュアル化しているため、
      作業は早いが、ありきたりなWEBサイトばかり…
    </p>

    <div>
      <p>
        わたしたち<span>OliAncho</span>は<br />みなさま1人1人と<span>ステキな関係</span>を築き、<br />他にはない<span>あなたにぴったり</span>のWEBサイトをご提案します:)
      </p>
      <img
        src="pc/2x/line.difference.png"
        alt=""
        srcset="pc/1x/line.difference.png 1x, pc/2x/line.difference.png 2x"
      />
    </div>
  </div>

  <YellowCircle top="0" left="-42%"></YellowCircle>
  <img
    src="pc/2x/leaf.man.png"
    alt=""
    srcset="pc/1x/leaf.man.png 1x, pc/2x/leaf.man.png 2x"
    class="absolute"
  />
</section>
