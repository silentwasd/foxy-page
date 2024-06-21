<script setup lang="ts">

</script>

<template>
    <div class="background">
        <div class="line"></div>
    </div>
</template>

<style scoped>
.line {
    position: fixed;
    left: 0;
    top: 0;
    width: 100dvw;
    height: 100dvh;
    pointer-events: none;
    opacity: 0.6;
}

.line::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    background: linear-gradient(
        to bottom,
        transparent 50%,
        rgba(0, 0, 0, 0.5) 51%
    );
    background-size: 100% 4px;
    will-change: background, background-size;
    animation: flicker 0.2s linear infinite;
}

@keyframes flicker {
    from {
        background: linear-gradient(
            to bottom,
            transparent 50%,
            rgba(0, 0, 0, 0.5) 51%
        );

        background-size: 100% 5px;
    }

    to {
        background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.5) 50%,
            transparent 51%
        );

        background-size: 100% 5px;
    }
}
</style>