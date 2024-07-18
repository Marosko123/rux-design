<template>
  <div class="reviews-list">
    <Review :review="review" v-for="(review, key) of reviews" :key="key" />
  </div>
</template>

<script setup lang="ts">
import UserReview from "@/types/user-review";

const props = defineProps({
  reviews: {
    type: Array as PropType<UserReview[]>,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.reviews-list {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 100px;
}

@media (max-width: 425px) {
  .reviews-list {
    flex-direction: column;
    gap: 80px;
    width: 100%;
    margin-bottom: 50px;
  }
}
</style>
