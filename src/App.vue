<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import { projectProp, languages, fallbackLang } from '@/code/data/const.ts';

import PortfolioOptions from '@/components/layout/PortfolioOptions.vue';
import PortfolioGroups from '@/components/projects/PortfolioGroups.vue';
import PortfolioFooter from '@/components/layout/PortfolioFooter.vue';

const { t, locale } = useI18n();

// Find out current language - either from storage, system language or fallback.
const systemLanguage = navigator.language.split('-')[0] || fallbackLang;
const browserLang = localStorage.getItem('app-language') || systemLanguage;
locale.value = languages.includes(browserLang) ? browserLang : fallbackLang;
</script>

<template>
  <header>
    <h1>{{ projectProp.title }}</h1>
  </header>

  <main>
    <PortfolioOptions />
    <div class="onpage-msg info">{{ t('general.info') }}</div>
    <PortfolioGroups />
  </main>

  <PortfolioFooter />
</template>

<style scoped>
.onpage-msg {
  border-radius: 5px;

  margin: 10px;
  padding: 2px;
  font-size: 0.9em;
}

.onpage-msg.info::before {
  content: 'ℹ️ ';
}
</style>
