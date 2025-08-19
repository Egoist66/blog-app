<script setup lang="ts">
import type { PostsResponse } from "~/entities/posts.types";

const { data, activePage, pages } = defineProps<{
  data: PostsResponse;
  activePage: number;
  pages: number;
}>();

defineEmits<{
  (e: "setActivePage", page: number): void;
}>();


// v-for="(page, i) in activePage + 4 > pages ? pages : activePage + 4"
//another way for pagination

</script>

<template>
  <div  class="posts-paginator flex items-center gap-3">
    <template v-if="data?.length">
      <UiButton
        text-color="#101010"
        title="You can also use keyboard arrows"
        variant="primary"
        :class="{ 'active-page': activePage === page }"
        class="flex items-center text-black justify-center"
        :height="40"
        :width="44"
        :border-radius="12"
        v-for="(page, i) in pages >= activePage ? 5 : pages"

        @click="$emit('setActivePage', page)"
      >
        {{ page }}
      </UiButton>

      <UiButton
      @click="$emit('setActivePage', activePage + 1)"
        class="flex items-center border text-black justify-center"
        :class="{ 'disabled-arrow': activePage === pages }"
        variant="default"
        :disabled="activePage === pages"
        :height="40"
        :width="44"
        :border-radius="12"
      >
        <img src="/arrow.svg" alt="arrow-right" />
      </UiButton>

      <p v-if="activePage > 5" class="text-[16px] font-semibold mx-4">Current page: {{ activePage }}</p>
    </template>
  </div>
</template>

<style scoped>
.active-page {
  background-color: #101010;
  color: #f3f3f3;
}
.disabled-arrow {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
