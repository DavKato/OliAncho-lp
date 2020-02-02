<script>
  import Navbar from '../components/layouts/Navbar.svelte'
  import Hero from '../components/layouts/Hero.svelte'
  import Intro from '../components/layouts/Intro.svelte'
  import Features from '../components/layouts/Features.svelte'
  import Comparison from '../components/layouts/Comparison.svelte'
  import Flow from '../components/layouts/Flow.svelte'
  import Price from '../components/layouts/Price.svelte'
  import QA from '../components/layouts/QA.svelte'
  import Contact from '../components/layouts/Contact.svelte'
  import Bottoms from '../components/layouts/Bottoms.svelte'

  import { onMount } from 'svelte'

  let inView = ''
  const cb = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        inView = entry.target.id
      }
    })
  }
  const observer = process.browser
    ? new IntersectionObserver(cb, { threshold: 0.3 })
    : null

  onMount(() => {
    const sections = document.querySelectorAll('section')

    sections.forEach(el => observer.observe(el))
  })
</script>

<Navbar {inView}></Navbar>

<main>
  <Hero></Hero>
  <Intro inview="{inView === 'intro'}"></Intro>
  <Features inview="{inView === 'features'}"></Features>
  <Comparison inview="{inView === 'comparison'}"></Comparison>
  <Flow inview="{inView === 'flow'}"></Flow>
  <Price inview="{inView === 'price'}"></Price>
  <QA inview="{inView === 'qa'}"></QA>
  <Contact inview="{inView === 'contact'}"></Contact>
</main>
<Bottoms></Bottoms>
<style global>
  :root {
    /* colors */
    --wine: #842612;
    --ocher: #d4ca6e;
    --cream: #f5f4ee;
    --shadow: rgba(0, 0, 0, 0.2);
    --d-shadow: rgba(0, 0, 0, 0.3);
    /* fonts */
    --noto: 'Noto Sans', Roboto, sans-serif;
    --gothic: YuGothic, '游ゴシック体', 'Yu Gothic', Roboto, sans-serif;
    --times: 'Times New Roman', Times, serif;
    /* others */
    --skl: 7deg;
    --skr: -4deg;
    scroll-behavior: smooth;
  }
  #sapper {
    font-family: var(--gothic);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow: hidden;
  }
  section:focus {
    outline: none;
  }
  .d-shadow {
    filter: drop-shadow(5px 5px 3px var(--shadow));
  }
  .d-shadow-light {
    filter: drop-shadow(0px 3px 5px var(--d-shadow));
  }
  .abs {
    position: absolute;
  }

  .skl,
  .skr {
    transition: transform 0.2s;
  }
  .skl:hover {
    transform: skew(var(--skl)) scale(1.04);
  }
  .skr:hover {
    transform: skew(var(--skr)) scale(1.01);
  }
</style>
