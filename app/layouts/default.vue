<script setup lang="ts"></script>

<template>
  <div id="app-layout">
    <header v-if="$slots['header-navigation']" class="header pt-[47px] pb-[120px]">
      <div class="app-container px-10">
        <slot name="header-navigation" />
      </div>
    </header>

    <main>
      <div class="app-container max-w-[1217px] px-10">
        <slot />
      </div>
    </main>

    <footer class="pt-[140px]" v-if="$slots.footer">
      <div class="app-container max-w-[1217px] px-10">
        <slot name="footer" />
      </div>
    </footer>
  </div>
</template>

<style scoped lang="scss">

  @import "~/assets/css/colors.scss";



  footer {
    background-color:  map-get($colors, 'app-pink');
  }

</style>
