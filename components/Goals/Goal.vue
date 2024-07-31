<template>
  <div :id="getId()" :class="getClassList()">
    <GoalsGoalArrow
      v-if="isRight() && !isLast()"
      class="arrow"
      :isRight="isRight()" />

    <GoalsGoalNumber :number="props.number" />

    <div class="content">
      <span class="title">{{ title }}</span>
      <p class="text" />
    </div>

    <GoalsGoalArrow
      v-if="!isRight() && !isLast()"
      class="arrow"
      :isRight="isRight()" />
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

  if (isLast()) {
    classList.push("goal-last");
  }

  return classList.join(" ");
};

const insertText = () => {
  const goalElement = document.querySelector(`#${getId()}`) as HTMLElement;
  const textElement = goalElement?.querySelector(".text") as HTMLElement;
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
  transition: $goal-transition;
  margin-bottom: 20px;

  &.goal-right {
    margin-left: 350px;

    &.goal-last {
      justify-content: right;
    }
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
      font-weight: 700;
      line-height: 28px;
      text-align: left;
    }
  }
}

@media (max-width: 426px) {
  .goal {
    gap: 20px;
    height: 100px;
    width: 100%;
    margin-bottom: 100px;

    &.goal-right {
      margin-left: 0;
    }

    .arrow {
      display: none;
    }

    .content {
      width: 100%;

      .title {
        font-size: 20px;
        line-height: 25px;
      }

      .text {
        font-weight: 400;
      }
    }
  }
}
</style>
