<script>
  export let comp = false,
    price = false,
    contact = false
</script>
<div class:comp class:price class:contact></div>

<style>
  div {
    width: 1506px;
    height: 1506px;
    background-color: var(--ocher);
    border-radius: 50%;
    position: absolute;
  }
  .comp {
    top: -15.5%;
    right: 30%;
  }
  .price {
    top: -20%;
    left: 36%;
  }
  .contact {
    top: 0;
    left: -22%;
    width: 140vw;
    min-width: 1900px;
    height: 100vw;
    min-height: 1500px;
  }

  @media (max-width: 1150px) {
    .contact {
      left: -30%;
    }
  }
  @media (max-width: 1000px) {
    .comp {
      right: 27%;
    }
    .contact {
      left: -50%;
    }
  }
  @media (max-width: 890px) {
    .comp {
      top: -18%;
      right: 19%;
      width: 1400px;
      height: 1400px;
    }
    .price {
      top: -14%;
      left: 25%;
    }
    .contact {
      display: none;
    }
  }
  @media (max-width: 720px) {
    .comp {
      top: -21%;
      width: 1100px;
      height: 1100px;
    }
  }
  @media (max-width: 580px) {
    .comp {
      top: -16%;
      width: 970px;
      height: 970px;
    }
  }
  @media (max-width: 460px) {
    .comp {
      top: -19%;
    }
  }
</style>
