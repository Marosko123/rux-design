<template>
  <div class="text">
    <MdiIcon v-if="icon" class="icon" :icon="icon" :style="getIconStyle()" />
    <span class="value">{{ value }}</span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  value: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    default: "",
  },
  iconColor: {
    type: String,
    default: "black",
  },
});

const getIconStyle = () => {
  return {
    color: props.iconColor,
    height: "24px",
  };
};
</script>

<style scoped lang="scss">
.text {
  display: flex;
  gap: 20px;
  align-items: center;

  .icon {
    width: 24px !important;
    height: 24px;
    font-size: 24px;
  }

  .value {
    font-size: 18px;
    font-weight: 600;
    line-height: 27px;
    text-align: left;
    width: 100%;
  }
}
</style>
