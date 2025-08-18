<script setup lang="ts">

const route = useRoute()
const {data, error, status} = await usePost(+route.params.id!)


useHead({
    titleTemplate: `%s - ${data.value?.title}`,
})

</script>
<template>
    <section>

        <h1 class="text-[80px] pb-9">{{ data?.title }}</h1>

        <div class="pb-10">
            <img class="rounded-md" src="/post-img.svg" alt="post-img">
        </div>

        <div class="pb-8">
            <h4 class="text-[16px]">About</h4>
        </div>

        <div>
            <p>{{ data?.description }}</p>
        </div>

    </section>
</template>


<style scoped>

</style>