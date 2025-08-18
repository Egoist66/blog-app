<script setup lang="ts"></script>

<template>
  <div id="app-layout">
    <header  v-if="$slots['header-navigation']" class="header pt-[47px] pb-[120px]">
      <div class="app-container px-10">
     
        <slot name="header-navigation" />
      </div>
    </header>

    <main>
      <div class="app-container max-w-[1217px] px-10">
        <slot />
      </div>
    </main>

    <footer v-if="$slots.footer">
     <div class="app-container max-w-[1217px] px-10">
        <slot name="footer" />
     </div>
    </footer>
  </div>
</template>

<style scoped lang="postcss">

    .app-container {
        @apply mx-auto w-full 
    }

</style>
