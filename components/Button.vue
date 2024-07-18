<template>
  <button
    class="button"
    :class="isCircle ? 'circle' : ''"
    @click="clickCallback()">
    <slot></slot>

    <MdiIcon v-if="icon" class="icon" :icon="icon"></MdiIcon>
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  clickCallback: {
    type: Function,
    required: true,
  },
  icon: {
    type: String as any,
    default: "",
  },
  isCircle: {
    type: Boolean,
    default: false,
  },
});
</script>

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

  &.circle {
    border-radius: 50%;
    padding: 0;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:hover {
    background: var(--pink-hover);
    scale: 1.05;
  }

  &:active {
    background: var(--pink-active);
    scale: 1;
  }

  .icon {
    height: 60% !important;
    width: 60% !important;
  }
}
</style>
