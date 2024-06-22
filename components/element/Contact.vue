<script setup lang="ts">
defineProps<{
    label: string,
    name: string,
    to?: string
}>();
</script>

<template>
    <div>
        <div class="flex flex-row gap-2 items-center justify-center">
            <slot name="icon"></slot>
            <h5 class="font-bold md:text-xl uppercase font-oswald">{{ label }}</h5>
        </div>
        <div class="font-josefin">
            <slot>
                <p v-if="!to" class="text-xl md:text-2xl">{{ name }}</p>
                <LinkPink v-else :href="to" target="_blank" class="text-xl md:text-2xl">
                    {{ name }}
                </LinkPink>
            </slot>
        </div>
    </div>
</template>

<style scoped>

</style>