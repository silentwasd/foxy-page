<template>
    <div class="rgb-border">
        <slot></slot>
    </div>
</template>

<style scoped>
.rgb-border {
    clip-path: inset(0px round 5px);
    animation: 10s rotate linear infinite;
    border: 5px solid;
    --angle: 0deg;
    border-image: conic-gradient(from var(--angle), #1b1641, #3c249c, #832ad0, #47ffbf, #35dece, #2d9abb, #2de2e6, #035ee8, #f6019d, #d40078, #9700cc) 1;
}

@keyframes rotate {
    to {
        --angle: 360deg;
    }
}

@property --angle {
    syntax: '<angle>';
    initial-value: 0deg;
    inherits: false;
}
</style>