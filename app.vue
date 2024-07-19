<template>
  <div>
    <NuxtPage />

    <ControlsDialog />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "RUX Design",
  ogTitle: "RUX Design",
  description:
    "This app was created to showcase my skill in design and development.",
  ogDescription:
    "This app was created to showcase my skill in design and development.",
  ogImage: "./logo.png",
  ogType: "website",
});
</script>
