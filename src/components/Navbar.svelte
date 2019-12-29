<script>
  const list = [
    {
      id: 'features',
      name: '特徴',
    },
    {
      id: 'comparison',
      name: '大手サービスとの比較',
    },
    {
      id: 'flow',
      name: '納品までの流れ',
    },
    {
      id: 'price',
      name: 'お値段',
    },
    {
      id: 'qa',
      name: 'よくある質問',
    },
  ]
</script>

<nav>
  <h1>OliAncho</h1>
  <ul>
    {#each list as item}
    <li>
      <a href="#{item.id}" class="nav-link">{item.name}</a>
    </li>
    {/each}
  </ul>
  <a href="#contact" class="contact-link">
    <img
      srcset="pc/1x/callout.header.png 1x, pc/2x/callout.header.png 2x"
      src="pc/2x/callout.header.png"
      alt="FREE"
      class="callout"
    />
    <img
      srcset="pc/1x/mail.png 1x, pc/2x/mail.png 2x"
      src="pc/2x/mail.png"
      alt="ご依頼・ご相談"
    />
  </a>
</nav>

<style>
  nav {
    height: 3.6rem;
    background-color: rgba(130, 38, 18, 0.9);
    position: fixed;
    width: 100%;
    display: flex;
    align-items: center;
    color: white;
    box-shadow: 0 5px 6px rgba(0, 0, 0, 0.2);
    z-index: 100;
  }
  h1 {
    font-family: var(--times);
    font-size: 2.6rem;

    /* class="font-serif text-4xl ml-6" */
  }
  ul {
    /* class="font-noto h-full flex flex-row items-center ml-20" */
  }
  li {
    /* class="h-full mr-12" */
  }
  .nav-link {
    /* class="h-full flex flex-row items-center */
  }
  .contact-link {
    /* class="flex flex-row items-center ml-auto mr-6"  */
  }
  .callout {
    /* mr-2 mt-5 */
  }
</style>
