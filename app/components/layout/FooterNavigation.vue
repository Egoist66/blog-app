import { Post } from '../../entities/posts.types';
<script setup lang="ts"></script>

<template>
    <nav class=" flex items-center justify-center gap-28 absolute bottom-[0px] left-0 right-0">
    <div class="flex items-center gap-8">
      <NuxtLink target="_blank" class="border-b border-black" to="https://www.facebook.com">Facebook</NuxtLink>
      <NuxtLink target="_blank" class="border-b border-black" to="https://www.instagram.com">Instagram</NuxtLink>
      <NuxtLink target="_blank" class="border-b border-black" to="https://www.telegram.org">Telegram</NuxtLink>
    </div>

    <button class="flex items-center justify-center">
      <img src="/go.svg" alt="go" />
    </button>

    <div class="flex items-center gap-8">
      <NuxtLink target="_blank" class="border-b border-black" to="https://www.behance.net">Behance</NuxtLink>
      <NuxtLink target="_blank" class="border-b border-black" to="https://www.linkedin.com">LinkedIn</NuxtLink>
      <NuxtLink target="_blank" class="border-b border-black" to="/privacy-policy">Privacy Policy</NuxtLink>
    </div>
  </nav>
</template>

<style scoped>

 @media(max-width: 1220px){
    nav {
        flex-direction: column;
        gap: 10px;
    }
 }

</style>
