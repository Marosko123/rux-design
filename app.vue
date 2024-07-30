<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

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
  ogImage: "/public/logo.png",
  ogType: "website",
});
</script>
