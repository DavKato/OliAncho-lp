<script>
  import Image from 'svelte-i-pack'
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
  <a href="#hero"> <h1>OliAncho</h1></a>
  <ul>
    {#each list as item}
    <li>
      <a href="#{item.id}" class="nav-link">{item.name}</a>
    </li>
    {/each}
  </ul>
  <a href="#contact" class="contact-link">
    <Image
      src="pc/2x/callout.header.png"
      width="83*2"
      alt="FREE"
      class="nav-callout"
      style="width: 83px;"
    />
    <Image
      src="pc/2x/mail.png"
      width="62*2"
      alt="ご依頼・ご相談"
      style="width: 62px;"
    />
  </a>

  <!-- <MobileMenu></MobileMenu> -->
</nav>

<style>
  nav {
    height: 3.625rem;
    background-color: rgba(130, 38, 18, 0.9);
    position: fixed;
    width: 100%;
    display: flex;
    align-items: center;
    box-shadow: 0 5px 6px var(--shadow);
    z-index: 100;
  }
  a {
    color: white;
    font-weight: 600;
  }
  h1 {
    font-family: var(--times);
    font-size: 2.6rem;
    margin-left: 1.5rem;
  }
  ul {
    height: 100%;
    display: flex;
    align-items: center;
    margin-left: 4%;
  }
  li {
    height: 100%;
    margin-right: 3%;
    white-space: nowrap;
  }
  .nav-link {
    font-size: 1.125rem;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 1rem;
  }
  .contact-link {
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: 1.5rem;
  }
  :global(.nav-callout) {
    margin-right: 0.5rem;
    margin-top: 1.25rem;
  }

  @media screen {
  }
</style>
