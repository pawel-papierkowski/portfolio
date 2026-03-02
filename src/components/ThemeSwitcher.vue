<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { useI18n } from 'vue-i18n';

import { themes, defaultTheme } from '@/code/data/const.ts';

import ComboBox from '@/components/common/ComboBox.vue';

const currentTheme = ref('light');

const { t } = useI18n();

onMounted(() => {
  const saved = localStorage.getItem('app-theme') || defaultTheme;
  currentTheme.value = saved;
  applyTheme(saved);
});

watch(currentTheme, (newVal) => {
  setTheme(newVal);
});

//

const applyTheme = (themeKey: string) => {
  localStorage.setItem('app-theme', themeKey); // preserve between browser sessions
  document.documentElement.setAttribute('data-theme', themeKey);
};

const setTheme = (themeKey: string) => {
  currentTheme.value = themeKey;
  applyTheme(themeKey);
};
</script>

<template>
  <div class="themeSelector">
    {{t('app.selectTheme')}}:
    <ComboBox v-model="currentTheme" :options="themes" langPrefix="themes" />
  </div>
</template>

<style scoped>
.themeSelector {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
