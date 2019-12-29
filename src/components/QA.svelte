<script>
  import LabelSeal from '../components/fragments/LabelSeal.svelte';

  const list = [
    {
      id: 1,
      q: 'ダミーテキストダミーテキストダミーテキストダミーテキスト',
      a:
        'ダミーテキストダミーテキストダミーテキストダミーテキストダミー ダミーテキストダミーテキストダミーテキストダミーテキストダミー',
      toggled: false,
    },
    {
      id: 2,
      q: 'ダミーテキストダミーテキストダミーテキストダミーテキスト',
      a:
        'ダミーテキストダミーテキストダミーテキストダミーテキストダミー ダミーテキストダミーテキストダミーテキストダミーテキストダミー',
      toggled: false,
    },
    {
      id: 3,
      q: 'ダミーテキストダミーテキストダミーテキストダミーテキスト',
      a:
        'ダミーテキストダミーテキストダミーテキストダミーテキストダミー ダミーテキストダミーテキストダミーテキストダミーテキストダミー',
      toggled: false,
    },
    {
      id: 4,
      q: 'ダミーテキストダミーテキストダミーテキストダミーテキスト',
      a:
        'ダミーテキストダミーテキストダミーテキストダミーテキストダミー ダミーテキストダミーテキストダミーテキストダミーテキストダミー',
      toggled: false,
    },
    {
      id: 5,
      q: 'ダミーテキストダミーテキストダミーテキストダミーテキスト',
      a:
        'ダミーテキストダミーテキストダミーテキストダミーテキストダミー ダミーテキストダミーテキストダミーテキストダミーテキストダミー',
      toggled: false,
    },
    {
      id: 6,
      q: 'ダミーテキストダミーテキストダミーテキストダミーテキスト',
      a:
        'ダミーテキストダミーテキストダミーテキストダミーテキストダミー ダミーテキストダミーテキストダミーテキストダミーテキストダミー',
      toggled: false,
    },
  ];
</script>

<section class="relative flex flex-col items-center overflow-hidden">
  <div class="relative z-10">
    <h1>
      よくある質問
    </h1>
    <span style="color: #842612" class="absolute z-0 font-serif">QA</span>
  </div>

  <dl style="width: 72%;" class="relative z-10">
    {#each list as item, i (item.id)}
    <div on:click="{() => item.toggled = !item.toggled}">
      <dt class="bg-wine text-cream rounded">
        <img src="pc/1x/q{i+1}.png" alt="" /><span>{ item.q }</span>
      </dt>
      {#if item.toggled}
      <dd class="bg-cream rounded-b">
        <img src="pc/1x/a{i+1}.png" alt="" /><span>{ item.a }</span>
      </dd>
      {/if}
    </div>
    {/each}
  </dl>

  <LabelSeal style="transform: rotate(-11deg); height: 100vw;"></LabelSeal>
  <LabelSeal style="transform: rotate(79deg); height: 100vw;"></LabelSeal>
</section>
