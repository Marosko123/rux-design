<template>
  <div class="footer big-padding">
    <div class="title-wrapper">
      <h1 class="heading-footer">Máte otázky? Jednoducho sa spýtajte.</h1>
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
  background: var(--linear-gradient-footer);

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
    color: var(--white);
  }

  .logo {
    display: block;
    margin: auto;
    width: 300px;
    height: 50px;
    user-select: none;
    margin-bottom: 100px;
  }
}

@media (max-width: 425px) {
  .footer {
    .title-wrapper {
      margin-top: 40px;
      margin-bottom: 40px;
      width: 100%;
      padding: 0 20px;
    }

    .contact-line {
      flex-direction: column;
      gap: 20px;
      font-size: 20px;
      line-height: 30px;
      text-align: center;
    }

    .logo {
      width: 200px;
      height: 33px;
      margin-bottom: 30px;
    }
  }
}
</style>
