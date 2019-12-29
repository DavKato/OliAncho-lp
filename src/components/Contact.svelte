<script>
  import YellowCircle from '../components/fragments/YellowCircle.svelte';

  let name = '';
  let email = '';
  let message = '';
  let dummy = '';

  let isValid = {
    name: false,
    email: false,
    message: false,
  };

  $: validForm = Object.values(isValid).every(el => el === true);

  const validateName = e => {
    e.target.value
      ? (isValid = { ...isValid, name: true })
      : (isValid = { ...isValid, name: false });
  };

  const validateEmail = e => {
    const email = e.target.value;
    if (email) {
      const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      pattern.test(email)
        ? (isValid = { ...isValid, email: true })
        : (isValid = { ...isValid, email: false });
    }
    isValid.email = false;
  };

  const validateMsg = e => {
    const msg = e.target.value;
    msg && msg.length <= 300
      ? (isValid = { ...isValid, message: true })
      : (isValid = { ...isValid, message: false });
  };

  const formInit = () => {
    name = '';
    email = '';
    message = '';
  };

  const sendRequest = async (url, data) => {
    try {
      return await fetch(url, {
        method: 'POST',
        //TODO: delete below on prod
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
    } catch (err) {
      return err;
    }
  };

  const handleSubmit = async () => {
    let data = { name, email, message };
    try {
      const res = await sendRequest(
        'https://hook.integromat.com/c4imvqj7kp8ixzlkkzzqarr5urqqm16y',
        data
      );

      console.log('success:', res);
      formInit();
      return null;
    } catch (err) {
      data = {
        location: 'OliAncho-LP',
        statusCode: err.status,
        message: err.body,
        data,
      };
      const errorHandleRes = await sendRequest(
        'https://hook.integromat.com/gw1p8kleez6bnajn4ehglfrxo9kxjvcz',
        data
      );

      alert(errorHandleRes);
      return null;
    }
  };
</script>

<section class="relative">
  <div class="relative z-10">
    <h1>お問い合わせ</h1>
    <p>
      ヒアリングからお見積もりまで<strong>無料</strong>で受け付けております!<br />お気軽にご連絡ください
      :）
    </p>
  </div>

  <form
    method="post"
    on:submit|preventDefault="{handleSubmit}"
    novalidate="true"
    class="relative z-10"
  >
    <ul>
      <li class="invisible">
        <label>ここには入力しないでください。</label>

        <input id="dummy" bind:value="{dummy}" for="dummy" />
      </li>

      <li>
        <label for="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          bind:value="{name}"
          class:invalid="{ !isValid.name }"
          on:change="{ validateName }"
        />
      </li>

      <li>
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          bind:value="{email}"
          class:invalid="{ !isValid.email }"
          on:change="{ validateEmail }"
        />
      </li>

      <li>
        <label for="message">Message</label>
        <textarea
          name="message"
          id="message"
          bind:value="{message}"
          class:invalid="{ !isValid.message }"
          on:change="{ validateMsg }"
        ></textarea>
      </li>

      <li>
        <button type="submit" disabled="{validForm}">
          <span>送信する</span>
          <img
            src="pc/2x/callout.button.png"
            alt=""
            srcset="pc/1x/callout.button.png 1x, pc/2x/callout.button.png 2x"
          />
        </button>
      </li>
    </ul>
  </form>

  <YellowCircle top="-5%" right="5%"></YellowCircle>
  <div>
    <div>
      <img
        src="pc/2x/leaf3.png"
        alt=""
        srcset="pc/1x/leaf3.png 1x, pc/2x/leaf3.png 2x"
      />
    </div>
    <div>
      <img
        src="pc/2x/leaf3.png"
        alt=""
        srcset="pc/1x/leaf3.png 1x, pc/2x/leaf3.png 2x"
      />
    </div>
    <div>
      <img
        src="pc/2x/leaf3.png"
        alt=""
        srcset="pc/1x/leaf3.png 1x, pc/2x/leaf3.png 2x"
      />
    </div>
  </div>
</section>
