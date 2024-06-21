<template>
    <div class="overflow-hidden relative w-dvh h-dvh">
        <Head>
            <title>Главная</title>
        </Head>

        <div class="bg bg-fuchsia-300 w-dvw h-dvh fixed -z-10"></div>

        <div class="overflow-auto w-full h-full">

            <div class="container mx-auto max-w-4xl">
                <div id="vhs">
                    <div class="scan-lines"></div>
                    <div class="vhs-wrap">
                        <div class="vhs-meta">
                        </div>
                    </div>
                </div>

                <HelloBlock class="second-bg md:rounded-2xl p-10 md:my-10"/>
            </div>
        </div>
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Amaranth:ital,wght@0,400;0,700;1,400;1,700&family=Caveat:wght@400..700&family=Dela+Gothic+One&display=swap&family=Oswald:wght@200..700&display=swap&family=Josefin+Sans:ital,wght@0,100..700;1,100..700');

.second-bg {
    background-color: rgba(255, 255, 255, .8);
    clip-path: inset(0px round 5px);
    animation: 10s rotate linear infinite;
    border: 5px solid;
    --angle: 0deg;
    border-image: conic-gradient(from var(--angle), #1b1641, #3c249c, #832ad0, #47ffbf, #35dece, #2d9abb,#2de2e6,#035ee8,#f6019d,#d40078,#9700cc) 1;
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