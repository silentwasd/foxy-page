<script setup lang="ts">
const {setLocale} = useI18n();
const locale = useCookie('locale');
setLocale(locale.value ?? 'ru-RU');

function switchLang(on: string) {
    setLocale(on);
    locale.value = on;
}
</script>

<template>
    <div class="grid grid-cols-3 gap-5">
        <button class="bg-pink-800 px-3 py-2 rounded-xl text-white text-lg hover:bg-pink-700"
                :class="{'bg-pink-950': locale === 'en-US'}"
                @click="switchLang('en-US')">English</button>
        <button class="bg-pink-800 px-3 py-2 rounded-xl text-white text-lg hover:bg-pink-700"
                :class="{'bg-pink-950': locale === 'ru-RU'}"
                @click="switchLang('ru-RU')">Русский</button>
        <button class="bg-pink-800 px-3 py-2 rounded-xl text-white text-lg hover:bg-pink-700"
                :class="{'bg-pink-950': locale === 'ja-JP'}"
                @click="switchLang('ja-JP')">日本語</button>
    </div>
</template>

<style scoped>

</style>