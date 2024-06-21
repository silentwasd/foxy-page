<script setup lang="ts">
</script>

<template>
    <div class="overflow-hidden relative w-dvh h-dvh">
        <Head>
            <title>Главная</title>
        </Head>

        <BackgroundFixed class="bg-fuchsia-300"/>

        <div class="overflow-auto w-full h-full">
            <div class="container mx-auto max-w-4xl flex flex-col gap-10">
                <div id="vhs">
                    <div class="scan-lines"></div>
                    <div class="vhs-wrap">
                        <div class="vhs-meta">
                        </div>
                    </div>
                </div>

                <BlockSwitchLanguage/>

                <DecoratorRgbBorder>
                    <DecoratorOpacityBackground :opacity="0.8">
                        <BlockHello class="p-10"/>
                    </DecoratorOpacityBackground>
                </DecoratorRgbBorder>
            </div>
        </div>
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Amaranth:ital,wght@0,400;0,700;1,400;1,700&family=Caveat:wght@400..700&family=Dela+Gothic+One&display=swap&family=Oswald:wght@200..700&display=swap&family=Josefin+Sans:ital,wght@0,100..700;1,100..700');

.font-amaranth {
    font-family: 'Amaranth', serif;
}

.font-caveat {
    font-family: 'Caveat', sans-serif;
}

.font-gothic {
    font-family: 'Dela Gothic One', serif;
}

.font-oswald {
    font-family: 'Oswald', sans-serif;
}

.font-josefin {
    font-family: 'Josefin Sans', sans-serif;
}
</style>