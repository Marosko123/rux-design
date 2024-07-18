<template>
  <div class="header big-padding rows-wrapper color-gradient-to-right-bottom">
    <div class="top-line">
      <Logo />
      <Button :click-callback="showApplyDialog">Mám záujem o UX audit</Button>
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

  .top-line {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 150px;
  }

  .title-wrapper {
    margin: 75px auto;
    width: 690px;
    align-items: center;
    text-align: center;
  }
}
</style>
