<script>
  const list = [
    {
      heading: '無料相談・お見積もり',
      content:
        'どんな些細なことでも無料でご相談承ります！ その後\nヒアリング内容を元にお見積もりをさせていただきます。',
    },
    {
      heading: 'ご契約',
      content:
        'ご納得いただけた段階でご契約。\nわかりやすい言葉でしっかり説明しますので、ご安心ください。',
    },
    {
      heading: '作業開始',
      content:
        'ここからは夫婦二人三脚の作業です！\n基本的にデザインはGobu、コーディングはDavideが担当いたします。',
    },
    {
      heading: 'ご相談・ご確認',
      content:
        '作業開始から納品まで、随時お客様に確認していただきながら作業を\n進めていきます。だからご希望に合ったサイトを作れるんです！',
    },
    {
      heading: '納品',
      content:
        '最終確認でご納得いただければ、納品となります。\nその後1ヶ月の無料サポートもありますのでご安心ください。',
    },
  ];
</script>

<section>
  <div>
    <h1>ご納品までの流れ</h1>
    <img src="pc/1x/line.flow.png" alt="" />
  </div>

  <dl>
    {#each list as item, i}
    <div>
      <span>STEP</span>
      <div>{i}</div>
    </div>
    <dt>{item.heading}</dt>
    <dd>{item.content}</dd>
    {/each}
  </dl>

  <div class="absolute z-0">
    <img
      src="pc/2x/line.flow.png"
      alt=""
      srcset="pc/1x/line.flow.png 1x, pc/2x/line.flow.png 2x"
    />
  </div>
  <img
    src="pc/2x/leaf3.png"
    alt=""
    srcset="pc/1x/leaf3.png 1x, pc/2x/leaf3.png 2x"
  />
  <img
    src="pc/2x/leaf3.png"
    alt=""
    srcset="pc/1x/leaf3.png 1x, pc/2x/leaf3.png 2x"
    class="absolute"
  />
  <img
    src="pc/2x/leaf3.png"
    alt=""
    srcset="pc/1x/leaf3.png 1x, pc/2x/leaf3.png 2x"
    class="absolute"
  />
  <img
    src="pc/2x/leaf3.png"
    alt=""
    srcset="pc/1x/leaf3.png 1x, pc/2x/leaf3.png 2x"
    class="absolute"
  />
</section>
