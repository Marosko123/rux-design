<template>
  <div class="logo">
    <img src="/logo.png" alt="logo" />

    <div class="logo-text">
      <span class="big">UX Design</span>
      <br />
      <span class="small">RIESENIA.com</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 20px;
  font-weight: bold;
  color: #fff;

  img {
    width: 40px;
    height: 48px;
    border-radius: 0;
  }

  .logo-text {
    .big {
      gap: 0;
      font-size: 20px;
    }

    .small {
      font-size: 8px;
      position: relative;
      top: -10px;
    }
  }
}
</style>
