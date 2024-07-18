<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
.button {
  background-color: var(--pink);
  color: var(--white);
  border: none;
  padding: 0 15px;
  font-size: 14px;
  font-weight: bold;
  line-height: 52px;
  cursor: pointer;
  border-radius: 10px;
  transition: var(--btn-transition);
  user-select: none;

  &:hover {
    background: var(--pink-hover);
    scale: 1.05;
  }

  &:active {
    background: var(--pink-active);
    scale: 1;
  }
}
</style>
