<script setup lang="ts">
import type { Post } from "~/entities/posts.types";

const { data } = defineProps<{
  data: Post;
}>();
</script>

<template>
  <NuxtLink :to="{name: 'article-id', params: {id: data.id}}">
    <article :id="`post-${data.id}`">
    <div class="post-image">
      <img :src="data.image" :alt="data.title" />
    </div>

    <div>
      <h3>
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
