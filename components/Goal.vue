<template>
  <div :id="getId()" :class="getClassList()">
    <GoalArrow
      v-if="isRight() && !isLast()"
      class="arrow"
      :isRight="isRight()" />

    <GoalNumber :number="props.number" />

    <div class="content">
      <span class="title">{{ title }}</span>
      <p class="text" />
    </div>

    <GoalArrow v-if="!isRight() && !isLast()" :isRight="isRight()" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  number: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});

const getId = () => `goal-${props.number}`;
const isRight = () => props.number % 2 === 0;
const isLast = () => props.number === 4;

const getClassList = () => {
  const classList = ["goal"];

  classList.push(isRight() ? "goal-right" : "goal-left");

  return classList.join(" ");
};

const insertText = () => {
  const goalElement = document.querySelector(`#${getId()}`) as HTMLElement;
  const textElement = goalElement.querySelector(".text") as HTMLElement;
  textElement.innerHTML = props.text;
};

onBeforeMount(() => {
  insertText();
});
</script>

<style scoped lang="scss">
.goal {
  display: flex;
  gap: 40px;
  height: 140px;
  width: 600px;
  transition: var(--goal-transition);

  &.goal-right {
    margin-left: 350px;
  }

  &:hover {
    scale: 1.05;
  }

  .content {
    width: 380px;
    height: 100px;

    .title {
      font-size: 24px;
      font-weight: 900;
      line-height: 30.12px;
    }

    .text {
      font-size: 16px;
      font-weight: 400;
      line-height: 28px;
      text-align: left;
    }
  }
}
</style>
