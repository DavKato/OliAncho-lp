<script>
  import { slide, fly } from 'svelte/transition'
  import { flip } from 'svelte/animate'
  import { quintOut } from 'svelte/easing'

  import FoldIcon from '../materials/FoldIcon.svelte'

  let expanded = null
  const toggle = i => () => {
    if (expanded !== null) {
      list[expanded].toggled = false
      if (expanded === i) {
        return (expanded = null)
      }
    }
    list[i].toggled = true
    expanded = i
  }

  const list = [
    {
      q: '何日で納品可能ですか。',
      a:
        'ーLP(ランディングページ)であれば、最短14日で納品可能です。ただしご依頼内容や、こちらのスケジュールにもよりますので、お急ぎの方はその旨お気軽にご相談ください。',
      toggled: false,
    },
    {
      q: '納品後の修正は可能ですか。',
      a:
        'ーもちろん可能です。配置変更や調整も、小規模であれば喜んで対応させていただきます！(ただし、大規模な修正の場合は別途お見積もりさせていただきます。)',
      toggled: false,
    },
    {
      q: '制作費用は支払いはいつですか。',
      a:
        'ーご契約成立時に着手金をお支払いいただき、残りの制作費用は納品後一週間以内にお支払いただきます。\nすべて契約書に記載がございますのでご安心ください。',
      toggled: false,
    },
    {
      q: '料金表にあるメニューしか受け付けていませんか。',
      a:
        'ー記載のあるものはほんの一例です！ご要望やご予算に応じて柔軟に対応させていただきます。お気軽にご相談ください。',
      toggled: false,
    },
    {
      q: '連絡手段は何ですか。',
      a:
        'ー現在海外を転々としているため、基本的にメールや電話でのやりとりとなります。タイミングによっては直接お会いすることも可能ですので、お気軽にご相談ください。',
      toggled: false,
    },
    {
      q: '依頼するかどうかまだ決めていないんですが、見積もりを依頼できますか。',
      a:
        'ーもちろん可能です。ご不明点やご要望を伺い、みなさまにぴったりのご提案をさせていただきます。ステキな関係を築きたいと思っておりますので、どうぞお気軽にご連絡ください。',
      toggled: false,
    },
  ]
</script>

<dl>
  {#each list as item, i (item.q)}
  <div class="list-box" on:click="{toggle(i)}">
    <dt class:dt-expanded="{item.toggled}">
      <img src="pc/1x/q{i+1}.png" alt="" class="img-q" />
      <div class="text-qa">{ item.q }</div>
      <FoldIcon toggled="{item.toggled}"></FoldIcon>
    </dt>
    {#if item.toggled}
    <dd transition:slide="{{easing: quintOut}}">
      <img src="pc/1x/a{i+1}.png" alt="" class="img-a" />
      <div class="text-qa">{ item.a }</div>
    </dd>
    {/if}
  </div>
  {/each}
</dl>

<style>
  img {
    position: absolute;
    filter: drop-shadow(0px 3px 6px var(--d-shadow));
  }

  dl {
    margin: 1.8rem 0 0;
    width: 72.3%;
    position: relative;
  }
  .list-box {
    margin-bottom: 67px;
    cursor: pointer;
    user-select: none;
  }
  dt {
    position: relative;
    background-color: var(--wine);
    color: var(--cream);
    border-radius: 10px;
    font-size: 1.56rem;
    font-weight: 700;
    display: flex;
    align-items: center;
  }
  .dt-expanded {
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }
  .text-qa {
    padding: 1rem 2.4rem 1rem 151px;
    line-height: 1.9;
  }
  .img-q {
    height: 165px;
    top: -60px;
    left: 32px;
  }
  dd {
    position: relative;
    background-color: var(--cream);
    border-radius: 0 0 10px 10px;
    font-size: 1.4rem;
  }
  .img-a {
    height: 119px;
    left: 46px;
    top: 50%;
    transform: translateY(-50%);
  }
</style>
