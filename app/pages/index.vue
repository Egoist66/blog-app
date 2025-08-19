<script setup lang="ts">
useHead({
  titleTemplate: `%s - Home`,
});

const {
  dataPagination,
  error,
  status,
  activePage,
  pages,
  setActivePage,
  paginateWithKeyboard,
} = await usePosts();

onMounted(() => {
  document.addEventListener("keydown", paginateWithKeyboard);
});

onBeforeUnmount(() => {
  document.removeEventListener("keydown", paginateWithKeyboard);
});
</script>
<template>
  <section>
    <h1 class="text-[80px] pb-9">Articles</h1>

    <NuxtErrorBoundary>
      <template #error="{ error }">
        <p>Something went wrong: {{ error.message }}</p>
      </template>

      <h2 class="text-center" v-if="status === 'pending'">Loading...</h2>
      <div
        v-else
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 posts-grid pb-5"
      >
        <UiPostCard v-for="post in dataPagination" :key="post.id" :data="post" />
      </div>

      <UiPostPaginator
        @set-active-page="setActivePage"
        :active-page="activePage"
        :data="dataPagination ? dataPagination : []"
        :pages="pages"
      />
    </NuxtErrorBoundary>
  </section>
</template>

<style scoped></style>
