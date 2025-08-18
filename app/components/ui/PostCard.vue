<script setup lang="ts">
import type { Post } from "~/entities/posts.types";

const { data } = defineProps<{
  data: Post;
}>();
</script>

<template>
  <NuxtLink :to="{name: 'article-id', params: {id: data.id}}" class="shadow-md block rounded-md ">
    <article :id="`post-${data.id}`" class="rounded-md">
    <div class="post-image pb-6">
      <img class="rounded-t-md" :src="'https://t3.ftcdn.net/jpg/07/86/72/92/360_F_786729270_zRVnfyxvQgOIPrGYzCweGV1bi5X9fgSz.jpg'" :alt="data.title" />
    </div>

    <div class="p-3">
      <h3 class="font-semibold pb-3">
        {{ data.title }}
      </h3>

      <p>
        {{ data.description }}
      </p>
    </div>
  </article>
  </NuxtLink>
</template>

<style scoped></style>
