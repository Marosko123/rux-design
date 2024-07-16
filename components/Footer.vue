<template>
  <div class="footer big-padding color-gradient-to-right-bottom">
    <div class="title-wrapper">
      <h1 class="title">Máte otázky? Jednoducho sa spýtajte.</h1>
    </div>

    <div class="contact-line">
      <span class="phone">+421 (02) 555 65 726</span>
      <a href="mailto:uxdesign@riesenia.com">uxdesign@riesenia.com</a>
    </div>

    <img class="logo" src="/logo-long.png" alt="Riesenia logo" />
  </div>
</template>

<style scoped lang="scss">
.footer {
  .title-wrapper {
    margin: auto;
    margin-top: 140px;
    width: 650px;
    align-items: center;
    text-align: center;
  }

  .contact-line {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 110px 0;
    gap: 40px;
    font-size: 30px;
    font-weight: 700;
    line-height: 40px;
    text-align: left;
  }

  .logo {
    display: block;
    margin: auto;
    width: 300px;
    height: 50px;
  }
}
</style>
