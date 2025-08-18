<script setup lang="ts">
useHead({
  titleTemplate: `%s - Home`,
});

const { data, error, status } = await usePosts();
</script>
<template>
  <section>
    <h1 class="text-[80px] pb-9">Articles</h1>


    <NuxtErrorBoundary>
      <template #error="{ error }">
        <p>Something went wrong: {{ error.message }}</p>
      </template>

      <h2 class="text-center" v-if="status === 'pending'">Loading...</h2>
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
        <UiPostCard v-for="post in data" :key="post.id" :data="post" />
      </div>
    </NuxtErrorBoundary>
  </section>
</template>

<style scoped></style>
