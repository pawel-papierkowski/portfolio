<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import { projectProp, languages } from '@/code/data/const.ts';

import PortfolioOptions from '@/components/PortfolioOptions.vue';
import PortfolioProjects from '@/components/PortfolioProjects.vue';
import PortfolioFooter from '@/components/PortfolioFooter.vue';

const { locale } = useI18n();

const browserLang = localStorage.getItem('app-language') || 'en';
locale.value = languages.includes(browserLang) ? browserLang : 'en';
</script>

<template>
  <header>
    <h1>{{ projectProp.title }}</h1>
  </header>

  <main>
    <PortfolioOptions />
    <PortfolioProjects />
  </main>

  <PortfolioFooter />
</template>

<style scoped>
</style>
