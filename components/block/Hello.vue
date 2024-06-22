<script setup lang="ts">
</script>

<template>
    <div>
        <h1 class="text-2xl md:text-4xl text-center font-gothic">AssunaYuuki</h1>

        <div class="mt-5 text-xl md:text-2xl font-caveat">
            <img src="/img/fennec.png" alt="Fennec"
                 class="h-full object-cover md:h-64 float-start mb-5 md:me-5 md:mb-2"/>

            <p>
                {{ $t('hello_1') }}
            </p>

            <p class="mt-5">
                {{ $t('hello_2')}}
            </p>

            <p class="mt-5">
                {{ $t('hello_3')}}
            </p>

            <p class="mt-5">
                {{ $t('hello_4')}}
            </p>

            <p class="mt-5">
                {{ $t('hello_5')}}
            </p>
        </div>
    </div>
</template>

<style scoped>

</style>