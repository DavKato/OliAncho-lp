<footer>
  <div>
    <a
      href="https://www.instagram.com/oliancho/"
      target="_blank"
      rel="noreferrer noopener"
    >
      <img
        srcset="pc/1x/instagram.png 1x, pc/2x/instagram.png 2x"
        src="pc/2x/instagram.png"
        alt="Instagramへ"
        class="link"
      />
    </a>

    <a
      href="https://www.youtube.com/channel/UCzTW_KyoA5BrI53ikFUdMGA"
      target="_blank"
      rel="noreferrer noopener"
    >
      <img
        srcset="pc/1x/youtube.png 1x, pc/2x/youtube.png 2x"
        src="pc/2x/youtube.png"
        alt="Instagramへ"
        class="link"
      />
    </a>

    <a
      href="https://twitter.com/DOKs62"
      target="_blank"
      rel="noreferrer noopener"
    >
      <img
        srcset="pc/1x/twitter.png 1x, pc/2x/twitter.png 2x"
        src="pc/2x/twitter.png"
        alt="Instagramへ"
        class="link"
      />
    </a>
  </div>

  <div class="davigobu-box">
    <img
      srcset="pc/1x/about-davigobu.png 1x, pc/2x/about-davigobu.png 2x"
      src="pc/2x/about-davigobu.png"
      alt="Instagramへ"
      class="img-davigobu"
    />
    <div class="balloon-box">
      <img
        srcset="pc/1x/callout.footer.png 1x, pc/2x/callout.footer.png 2x"
        src="pc/2x/callout.footer.png"
        alt="Instagramへ"
        class="img-balloon"
      />
      <p class="balloon-text">海外での ノマド生活について 配信しています♪</p>
    </div>
  </div>

  <p class="copy-right">oliancho&copy;2020</p>
</footer>

<style>
  footer {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    padding-top: 60px;
    margin-top: 70px;
  }
  .link {
    width: 50px;
    filter: drop-shadow(5px 5px 6px var(--d-shadow));
  }
  a:not(:last-child) {
    margin-right: 28px;
  }
  .davigobu-box {
    position: relative;
  }
  .img-davigobu {
    width: 188px;
  }
  .balloon-box {
    width: 112px;
    height: 69px;
    position: absolute;
    top: 20px;
    left: 100%;
  }
  .img-balloon {
    width: 112px;
    position: absolute;
    top: 0;
    left: 0;
  }
  .balloon-text {
    position: relative;
    font-size: 9px;
    padding: 17px 7px 15px 33px;
    line-height: 1.4;
  }
  .copy-right {
    width: 100%;
    text-align: center;
    padding: 0.2rem 0;
    margin-top: -28px;
    color: #fff;
    background-color: var(--wine);
  }
</style>
