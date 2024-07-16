<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
.button {
  background-color: #ee325c;
  color: white;
  border: none;
  padding: 0 15px;
  font-size: 14px;
  font-weight: bold;
  line-height: 52px;
  cursor: pointer;
  border-radius: 10px;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #ff4d80;
}
</style>
