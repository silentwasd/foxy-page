<script setup lang="ts">
import rPlayer from '@davland7/rplayer';

const audio    = ref<rPlayer>();
const canvas   = ref<HTMLCanvasElement | null>();
const played   = ref<boolean>(false);
const analyzer = ref<any>(null);

onMounted(() => {
    audio.value = new rPlayer();
});

function play() {
    if (!analyzer.value) {
        const context  = new AudioContext();
        const source   = context.createMediaElementSource(audio.value);
        analyzer.value = context.createAnalyser();

        source.connect(analyzer.value);
        analyzer.value.connect(context.destination);

        analyzer.value.fftSize = 256;

        if (!canvas.value)
            return;

        const rect = canvas.value.getBoundingClientRect();

        canvas.value.width  = rect.width * devicePixelRatio;
        canvas.value.height = rect.height * devicePixelRatio;

        canvas.value.getContext('2d').scale(devicePixelRatio, devicePixelRatio);

        canvas.value.style.width  = rect.width + 'px';
        canvas.value.style.height = rect.height + 'px';
    }

    if (audio.value.playing) {
        audio.value.stop();
        played.value = false;
    } else {
        audio.value.playSrc('https://stream.nightride.fm:8443/nightride/nightride.m3u8');
        played.value = true;
        renderFrame();
    }
}

function renderFrame() {
    if (played.value)
        requestAnimationFrame(renderFrame);
    else
        return;

    const bufferLength = analyzer.value.frequencyBinCount / 2;
    const dataArray    = new Uint8Array(bufferLength);

    const canvasWidth   = canvas.value.width;
    const canvasHeight  = canvas.value.height;
    const canvasContext = canvas.value.getContext('2d');

    analyzer.value.getByteFrequencyData(dataArray);

    canvasContext.fillStyle = 'rgba(255, 255, 255, 0)';
    canvasContext.fillRect(0, 0, canvasWidth, canvasHeight);
    canvasContext.reset();

    let x = 0;

    for (let i = 0; i < bufferLength; i++) {
        const barWidth  = (canvasWidth / bufferLength);
        const barHeight = dataArray[i] * canvasHeight / 256;

        const r = barHeight + (25 * (i / bufferLength));
        const g = 250 * (i / bufferLength);
        const b = 50;

        canvasContext.fillStyle = `rgb(${r}, ${g}, ${b})`;
        canvasContext.fillRect((x * (barWidth + 1)) + (canvasWidth / 2) - 5, canvasHeight - barHeight, barWidth, barHeight);
        canvasContext.fillRect((canvasWidth / 2) - (x * (barWidth + 1)) - 5, canvasHeight - barHeight, barWidth, barHeight);

        x++;
    }
}
</script>

<template>
    <div class="relative">
        <div class="absolute top-0 w-full h-full flex items-center justify-center">
            <button class="text-pink-800 hover:text-pink-600 relative z-10" @click="play">
                <span class="absolute top-5 left-4 w-16 h-16 rounded-full bg-white -z-10"></span>
                <IconPause v-if="played" :size="100"/>
                <IconPlay v-else :size="100"/>
            </button>
        </div>

        <canvas ref="canvas" class="w-full h-48" :class="{'invisible': !played}"></canvas>
    </div>
</template>

<style scoped>

</style>