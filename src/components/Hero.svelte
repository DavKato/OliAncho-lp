<script>
  import DownArrow from '../components/fragments/DownArrow.svelte'
</script>

<header
  id="intro"
  tabindex="-1"
  class="flex flex-row pt-24 min-h-screen w-full"
>
  <div class="h-full w-5/12">
    <div style="max-width: 400px;" class="ml-auto h-full relative">
      <img src="svg/wine.svg" alt="" />
      <img
        src="pc/2x/leaf3.png"
        alt=""
        srcset="pc/1x/leaf3.png 1x, pc/2x/leaf3.png 2x"
        style="top: 21%; left: 24%; transform: rotate(19deg);"
        class="absolute w-32"
      />
      <h2
        style="top: 35%; left: 47%; transform: translateX(-50%)"
        class="absolute font-noto text-white text-3xl font-black whitespace-no-wrap text-center"
      >
        WEBサイト制作<br />承ります
      </h2>
    </div>
  </div>

  <div class="ml-12 bg-yellow-200 w-7/12">
    <h2>
      個人だからこそできる<strong>あなたにぴったりの WEBサイトを！</strong>
    </h2>
    <div>SPIDERS!</div>
  </div>
  <DownArrow></DownArrow>
</header>
