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
