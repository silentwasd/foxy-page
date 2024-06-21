<script setup lang="ts">
defineProps<{
    opacity: number
}>();
</script>

<template>
    <div :style="`background-color: rgba(255, 255, 255, ${opacity})`">
        <slot></slot>
    </div>
</template>

<style scoped>
</style>