<script setup lang="ts">
defineProps<{
    active?: boolean
}>();
</script>

<template>
    <button class="bg-pink-800 px-3 py-2 rounded-xl text-white text-lg hover:bg-pink-950 active:bg-pink-950 bg-opacity-70 hover:bg-opacity-80 active:bg-opacity-90 font-gothic"
            :class="{'bg-pink-950 bg-opacity-90': active}">
        <slot></slot>
    </button>
</template>

<style scoped>

</style>