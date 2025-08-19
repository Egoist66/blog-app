<script setup lang="ts"></script>
<template>
  <section>
    <div class="flex items-baseline justify-between pb-[140px] flex-wrap">
      <div>
        <h2 class="pb-14">Is there a project?</h2>

        <div>
          <img src="/letswork.svg" alt="let's work" />
        </div>
      </div>

      <div class="contacts">
        <div class="pb-9">
          <p class="pb-3">For all questions</p>
          <p><a href="tel:+7 (920) 278—00—68">+7 (920) 278—00—68</a></p>
          <p><a href="mailto:qtim@agency.com">qtim@agency.com</a></p>
        </div>

        <div class="pb-9">
            <p class="pb-3">Office in Russia</p>
            <p>139 Ruben Station Lake</p>
            <p class="pb-2">Drew, NM 52678</p>
            <UiButton class="flex items-center justify-center"  :width="37" :border-radius="9999">
                <img class="" src="/telegram.svg" alt="telegram">
            </UiButton>
        </div>
        <div class="pb-9">
            <p class="pb-3">Office in Dubai</p>
            <p>139 Ruben Station Lake</p>
            <p class="pb-2">Drew, NM 52678</p>
            <UiButton class="flex items-center justify-center"  :width="37" :border-radius="9999">
                <img class="" src="/telegram.svg" alt="telegram">
            </UiButton>
        </div>
      </div>
    </div>
    <LayoutFooterNavigation />
  </section>
</template>

<style scoped lang="scss">


</style>
