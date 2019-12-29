<script>
  import Navbar from '../components/Navbar.svelte'
  import Hero from '../components/Hero.svelte'
  import Intro from '../components/Intro.svelte'
  import Features from '../components/Features.svelte'
  import Comparison from '../components/Comparison.svelte'
  import Flow from '../components/Flow.svelte'
  import Price from '../components/Price.svelte'
  import QA from '../components/QA.svelte'
  import Contact from '../components/Contact.svelte'
  import Bottoms from '../components/Bottoms.svelte'
</script>

<style global>
  @import '../normalize.css';

  :root {
    /* colors */
    --wine: #842612;
    --ocher: #d4ca6e;
    --cream: #f5f4ee;
    /* fonts */
    --noto: 'Noto Sans', Roboto, sans-serif;
    --gothic: '游ゴシック体', 'Yu Gothic', YuGothic, Roboto, sans-serif;
    --times: 'Times New Roman', Times, serif;
  }
  body {
    max-width: 1440px;
    min-height: 100vh;
    overflow: hidden;
    background-color: #fcfcfc;
  }
</style>

<Navbar></Navbar>

<Hero></Hero>
<Intro></Intro>
<main>
  <Features></Features>
  <Comparison></Comparison>
  <Flow></Flow>
  <Price></Price>
  <QA></QA>
  <Contact></Contact>
</main>
<Bottoms></Bottoms>
