<script>
  import {
    validateName,
    validateEmail,
    validateMsg,
  } from '../helpers/validation.js'
  import { handleSubmit } from '../helpers/http.js'
  import YellowCircle from '../materials/YellowCircle.svelte'
  import Btn from '../fragments/Btn.svelte'
  import FlowerBox from '../fragments/FlowerBox.svelte'
  import Dot from '../materials/Dot.svelte'

  let name = ''
  let email = ''
  let message = ''
  let dummy = ''

  $: isValid = [validateName(name), validateEmail(email), validateMsg(message)]
  $: validInput = isValid.every(el => el === true)

  const sendMessage = () => {
    if (dummy) return formInit()
    try {
      handleSubmit({ name, email, message }, formInit)
    } catch (err) {
      alert(
        '何らかの理由で送信に失敗しました。\n恐れ入りますが、通信状況を確認して再度お送り頂くか、\nSNSよりご連絡ください。',
      )
    }
  }
  const formInit = () => {
    name = ''
    email = ''
    message = ''
    dummy = ''
  }
</script>

<section id="contact">
  <YellowCircle top="-8%" left="-22%" big></YellowCircle>
  <div class="h-box">
    <h1>
      お問い合わせ
      <Image
        src="pc/2x/line.contact.png"
        alt=""
        class="contact-line d-shadow-light"
      ></Image>
    </h1>
    <p class="title-p">
      ヒアリングからお見積もりまで<strong
        ><Dot sentence="無料" color="#fff" top="-8px"></Dot></strong
      >で受け付けております!<br />お気軽にご連絡ください :）
    </p>
  </div>

  <form on:submit|preventDefault="{ sendMessage }" novalidate="true">
    <FlowerBox isValidArr="{isValid}"></FlowerBox>

    <ul>
      <li class="hidden">
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
        />
      </li>

      <li>
        <label for="message">Message</label>
        <textarea
          name="message"
          id="message"
          rows="11"
          bind:value="{message}"
          class:invalid="{ !isValid.message }"
        ></textarea>
      </li>

      <li>
        <Btn
          text="送信する"
          type="submit"
          disabled="{!validInput || dummy}"
        ></Btn>
      </li>
    </ul>
  </form>
</section>

<style>
  section {
    position: relative;
    margin-top: -1rem;
  }
  .h-box {
    position: relative;
    margin: 0 auto;
    width: 38rem;
    left: 8%;
  }
  h1 {
    position: relative;
    margin-left: 11rem;
    display: inline-block;
    font-size: 2.2rem;
    line-height: 1.3;
    font-weight: 700;
  }
  :global(.contact-line) {
    position: absolute;
    width: 17.1rem;
    bottom: -182%;
    right: 4%;
  }
  .title-p {
    font-size: 1.3rem;
    line-height: 2.1;
    margin-top: 5rem;
  }

  form {
    position: relative;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    left: 2%;
  }
  ul {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  .hidden {
    display: none;
  }
  li {
    position: relative;
    margin-bottom: 34px;
    display: flex;
    align-items: flex-start;
    font-family: var(--times);
  }
  li:last-child {
    align-self: center;
    margin: 10px 0 0 9.8rem;
  }
  label {
    margin-right: 34px;
    font-size: 2.2rem;
  }
  input,
  textarea {
    padding: 0.7rem 1.2rem;
    width: 51vw;
    font-size: 1.8rem;
    border: none;
  }
  textarea {
    resize: none;
  }
  input:focus,
  textarea:focus {
    outline: solid 2px var(--wine);
  }
  li:focus-within:after {
    content: url('../svg/left-arrow.svg');
    width: 34px;
    height: 39px;
    position: absolute;
    right: -50px;
    top: 50%;
    transform: translateY(-50%);
    filter: drop-shadow(0, 5px, 6px, var(--d-shadow));
  }
</style>
