<script setup lang="ts">


type LinksProps = Array<{id: string, title: string, link: string}>

const appLinks  = shallowRef<LinksProps>([
    {
        id: crypto.randomUUID(),
        title: 'Works',
        link: '/works'
    },
    {
        id: crypto.randomUUID(),
        title: 'About',
        link: '/about'
    }
])

</script>
<template>
    <nav class="flex items-center justify-between flex-wrap">

        <div class="app-logo">
            <NuxtLink :to="{name: 'index'}">
                <img src="/Qtim.svg" alt="logo">
            </NuxtLink>
        </div>

        <div class="app-links-controls flex items-center gap-[150px]">
            <div>
                <ul class="flex items-center justify-between gap-[50px]">
                    <li :key="link.id" v-for="link in appLinks">
                        <NuxtLink active-class="active-link" :to="link.link">
                            {{ link.title }}
                        </NuxtLink>
                    </li>
                </ul>
            </div>
            <div class="flex items-center gap-4">
                <div class="language-selector">
                    <img src="/language.svg" alt="language">
                
                </div>

                <UiButton  :border-radius="403">Let's work</UiButton>
            </div>
        </div>

    </nav>
</template>


<style scoped>

.active-link {
    @apply text-[#E2BEFF];
    @apply transition-all duration-300;
    @apply will-change-contents;
}

</style>