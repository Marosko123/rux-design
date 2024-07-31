<template>
  <div class="logo">
    <img src="/public/logo.png" alt="logo" />

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
  gap: 5px;
  font-size: 20px;
  font-weight: bold;
  color: var(--white);

  img {
    width: 40px;
    height: 48px;
    border-radius: 0;
    transition: var(--goal-transition);
    user-select: none;

    &:hover {
      transform: rotate(360deg);
      scale: 1.2;
    }
  }

  .logo-text {
    .big {
      font-size: 20px;
    }

    .small {
      font-size: 8px;
      position: relative;
      top: -17px;
    }
  }
}
</style>
