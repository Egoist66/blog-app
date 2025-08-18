<script setup lang="ts">
import type { NuxtError } from "#app";



const { error } = defineProps<{ error: NuxtError }>();

useHead({
  title: `Error ${error.statusCode} - ${error.message}`,
})

const computedEmoji = computed(() => {
  switch (error.statusCode) {
    case 404:
      return "👀";
    case 500:
      return "🤯";
    default:
      return "😔";
  }
});

const computedMessage = computed(() => {
  switch (error.statusCode) {
    case 404:
      return "Page not found - please try to go to the main page";
    case 500:
      return "Something went wrong";
    case 403:
      return "Access denied";
    case 503:
      return "Service temporarily unavailable";
    default:
      return "Something went wrong";
  }
});


</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <h1 class="text-5xl text-center pb-3">  {{ computedEmoji }} {{ error?.statusCode }} - Error</h1>
    <h3 class="pb-10 text-[#222]">{{ computedMessage }}</h3>

    <button class="bg-black text-white rounded-md p-2 w-[250px]" @click="$router.replace('/')" color="ghost"
      >To Home page</button
    >
  </div>
</template>
