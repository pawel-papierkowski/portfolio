<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { useI18n } from 'vue-i18n';

import { languages, fallbackLang } from '@/code/data/const.ts';

import ComboBox from '@/components/common/ComboBox.vue';

const currentLanguage = ref(fallbackLang);
const systemLanguage = navigator.language.split('-')[0] || fallbackLang;

const { t, locale } = useI18n();

onMounted(() => { // Triggered on beginning.
  const savedLang = localStorage.getItem('app-language') || systemLanguage;
  setLanguage(savedLang);
});

watch(currentLanguage, (newVal) => { // Triggered when value of currentLanguage changes.
  applyLanguage(newVal);
});

//

// Set new language. Triggers watch.
const setLanguage = (langKey: string) => {
  //console.info(`setLanguage('${langKey}') called.`);
  currentLanguage.value = langKey;
};

// Apply given language. Saves language code to storage and updates all texts on page to new language.
const applyLanguage = (langKey: string) => {
  //console.info(`applyLanguage('${langKey}') called.`);
  localStorage.setItem('app-language', langKey); // preserve between browser sessions
  locale.value = langKey;
};
</script>

<template>
  {{t('app.selectLang')}}:
  <ComboBox v-model="currentLanguage" :options="languages" langPrefix="languages" />
</template>

<style scoped>
</style>
