<template>
  <div class="header big-padding color-gradient-to-right-bottom">
    <div class="top-line">
      <Logo />
      <ControlsButton class="register-button" :click-callback="showApplyDialog">
        Mám záujem o UX audit
      </ControlsButton>
    </div>

    <div class="title-wrapper">
      <h1 class="heading-header">
        Zvýšte svoje zisky optimalizáciou vášho eshopu.
      </h1>
    </div>
  </div>
</template>

<script setup lang="ts">
const showApplyDialog = () => {
  window.postMessage("open-dialog");
};
</script>

<style scoped lang="scss">
.header {
  background: var(--linear-gradient-header);
  width: 100vw;

  .top-line {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 250px;
  }

  .title-wrapper {
    margin: 75px auto;
    width: 690px;
    align-items: center;
    text-align: center;
  }
}

@media (max-width: 426px) {
  .header {
    .top-line {
      padding: 0;

      .register-button {
        position: absolute;
        top: 350px;
        left: calc(50% - 100px);
      }
    }

    .title-wrapper {
      margin-top: 40px;
      margin-bottom: 130px;
      width: 100%;
      padding: 0 20px;
    }
  }
}
</style>
