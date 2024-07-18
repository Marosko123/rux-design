<template>
  <div class="review">
    <div class="text-with-quotes">
      <svg
        class="quotes"
        width="43"
        height="36"
        viewBox="0 0 43 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          id="Combined Shape"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M19.5831 36V16.4781H10.6723C11.5703 13.3294 13.9189 9.72597 17.7181 5.66764L10.6723 0C6.804 3.98836 4.05824 7.81922 2.43494 11.4927C0.811639 15.1662 0 19.2769 0 23.8251V36H19.5831ZM43 36V16.4781H34.0892C34.9872 13.3294 37.3357 9.72597 41.1349 5.66764L34.0892 0C30.2209 3.98836 27.4751 7.81922 25.8518 11.4927C24.2285 15.1662 23.4169 19.2769 23.4169 23.8251V36H43Z"
          fill="#080809" />
      </svg>

      <div class="text">
        {{ truncatedText
        }}<a class="read-more" v-if="isTextTruncated" @click="readMore()">
          čítať viac
        </a>
      </div>
    </div>

    <div class="author-row">
      <img
        :src="review.logo"
        :alt="`Logo ${review.company}`"
        height="64"
        width="64" />
      <div class="company-data">
        <span class="author">{{ review.author }}</span>
        <br />
        <span class="position">{{ review.position + " " }}</span>
        <a :href="`https://${review.company}`" target="_blank">{{
          review.company
        }}</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import UserReview from "@/types/user-review";

const props = defineProps({
  review: {
    type: Object as PropType<UserReview>,
    required: true,
  },
  maxCharacters: {
    type: Number,
    default: 286,
  },
});

const truncatedText = computed(() => {
  const text = props.review.text;
  return text.length > props.maxCharacters
    ? text.slice(0, props.maxCharacters) + "... "
    : text;
});

const isTextTruncated = computed(() => {
  return props.review.text.length > props.maxCharacters;
});

const readMore = () => {
  console.log("read more");
};
</script>

<style scoped lang="scss">
.review {
  height: 400px;
  width: 420px;

  .text-with-quotes {
    border: var(--border-light);
    height: 290px;
    margin-bottom: 20px;

    .quotes {
      position: relative;
      top: -28px;
      left: 30px;
    }

    .text {
      width: 361px;

      font-size: 16px;
      font-weight: 400;
      line-height: 32px;
      text-align: left;

      margin: auto;
    }

    .read-more {
      font-size: 16px;
      font-weight: 700;
      line-height: 32px;
      text-align: left;
      cursor: pointer;
      user-select: none;
    }
  }

  .author-row {
    display: flex;
    gap: 20px;

    img {
      user-select: none;
    }

    .company-data {
      height: 65px;
      align-content: center;

      .author {
        font-size: 16px;
        font-weight: 900;
        line-height: 22px;
        text-align: left;
      }
    }
  }
}
</style>
