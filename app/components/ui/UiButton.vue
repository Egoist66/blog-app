<script setup lang="ts">

const {width = 142, borderRadius = 999} = defineProps<{
    width?: number,
    borderRadius?: number
}>()


const computedWidth = computed(() => width + 'px')
const computedBorderRadius = computed(() => borderRadius + 'px')
</script>


<template>
    <button :class="`ui-button cursor-pointer text-white p-4 bg-[#101010]`">
        <slot/>
    </button>
</template>


<style scoped>


.ui-button {
    width: v-bind(computedWidth);
    border-radius: v-bind(computedBorderRadius);
}

</style>