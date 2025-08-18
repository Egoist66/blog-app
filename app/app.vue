<script setup lang="ts"></script>
<template>
  <NuxtRouteAnnouncer />
  <NuxtLoadingIndicator  :height="4" color="#E8BFFF" :duration="2000" />

  <NuxtLayout>
    <template #header-navigation>
      <LayoutNavigation />
    </template>
    <NuxtPage />
  </NuxtLayout>
</template>

<style scoped></style>
