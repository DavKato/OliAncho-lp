<script>
  import DownArrow from '../components/fragments/DownArrow.svelte'

  const list = [
    { text: '誰に何を頼めばいいか', strong: '分からない！' },
    { text: 'WEBに疎いから', strong: '不安でいっぱい！' },
    { text: '納品後もサポートしてくれなきゃ', strong: '困る！' }
  ]
</script>

<section>
  <div class="bg-ocher">
    <h1 class="">
      WEBサイトを作りたい！<br />
      <span>でもこんなお悩みはありませんか？</span>
    </h1>

    <div>
      {#each list as item}
      <p class="font-noto">{ item.text }<span>{ item.strong }</span></p>
      {/each}
      <div>
        <span>?</span><span>?</span><span>?</span>
        <img
          src="pc/2x/gentleman.black.png"
          alt=""
          srcset="pc/1x/gentleman.black.png 1x, pc/2x/gentleman.black.png 2x"
        />
      </div>

      <DownArrow></DownArrow>
    </div>
  </div>
  <div>
    <p>もう大丈夫！</p>
    <p>わたしたち <span>OliAncho(おりあんちょ)</span>にお任せください！</p>
  </div>
</section>
