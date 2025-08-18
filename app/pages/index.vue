<script setup lang="ts">
useHead({
  titleTemplate: `%s - Home`,
});

const { data, error, status } = await usePosts();
</script>
<template>
  <section>
    <h1 class="text-[80px]">Articles</h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
      <UiPostCard v-for="post in data" :key="post.id" :data="post" />
    </div>
  </section>
</template>

<style scoped></style>
