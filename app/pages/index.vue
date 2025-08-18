<script setup lang="ts">

 useHead({
  titleTemplate: `%s - Home`,
});


const {data, error, status} =  await usePosts()
</script>
<template>

    <section>

        <h1 class="text-[80px]">Articles</h1>

        <h2>{{ status }}</h2>
        <pre>
            {{ data }}
        </pre>
    </section>
</template>


<style scoped>

</style>