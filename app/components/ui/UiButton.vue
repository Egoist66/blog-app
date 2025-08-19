<script setup lang="ts">

const {width = 142, borderRadius = 999, height, variant = 'secondary', textColor = '#ffff'} = defineProps<{
    width?: number,
    height?: number,
    textColor?: string,
    variant?: 'primary' | 'secondary' | 'default',
    borderRadius?: number
}>()


const computedWidth = computed(() => width + 'px')
const computedBorderRadius = computed(() => borderRadius + 'px')
const computedHeight = computed(() => height + 'px')


const computedButtonColor = computed(() => {
    switch (variant) {
        case 'primary':
            return '#F3F3F3'
        case 'secondary':
            return '#101010'
        default:
            return '#fff'
    }
})
</script>


<template>
    <button :class="`ui-button cursor-pointe p-4`">
        <slot/>
    </button>
</template>


<style scoped>


.ui-button {
    width: v-bind(computedWidth);
    border-radius: v-bind(computedBorderRadius);
    height: v-bind(computedHeight);
    background-color: v-bind(computedButtonColor);
    color: v-bind(textColor);
}

</style>