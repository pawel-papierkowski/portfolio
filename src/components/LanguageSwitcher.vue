<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { useI18n } from 'vue-i18n';

import { languages } from '@/code/data/const.ts';

import ComboBox from '@/components/common/ComboBox.vue';

const currentLanguage = ref('en');
const systemLanguage = navigator.language.split('-')[0] || 'en';

const { t, locale } = useI18n();

onMounted(() => {
  const saved = localStorage.getItem('app-language') || systemLanguage;
  currentLanguage.value = saved;
  applyLanguage(saved);
});

watch(currentLanguage, (newVal) => {
  setLanguage(newVal);
});

//

const applyLanguage = (langKey: string) => {
  console.info(`applyLanguage('${langKey}') called.`);
  localStorage.setItem('app-language', langKey); // preserve between browser sessions
  locale.value = langKey;
};

const setLanguage = (langKey: string) => {
  console.info(`setLanguage('${langKey}') called.`);
  currentLanguage.value = langKey;
  applyLanguage(langKey);
};
</script>

<template>
  <div class="languageSelector">
    {{t('app.selectLang')}}:
    <ComboBox v-model="currentLanguage" :options="languages" langPrefix="languages" />
  </div>
</template>

<style scoped>
.languageSelector {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
