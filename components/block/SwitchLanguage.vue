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
    <div class="grid grid-cols-3 gap-2.5 md:gap-5">
        <ButtonPrimary :active="locale === 'en-US'" @click="switchLang('en-US')">
            English
        </ButtonPrimary>

        <ButtonPrimary :active="locale === 'ru-RU'" @click="switchLang('ru-RU')">
            Русский
        </ButtonPrimary>

        <ButtonPrimary :active="locale === 'ja-JP'" @click="switchLang('ja-JP')">
            日本語
        </ButtonPrimary>
    </div>
</template>

<style scoped>

</style>