<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import { projectProp, languages } from '@/code/data/const.ts';

import PortfolioProjects from '@/components/PortfolioProjects.vue';
import ThemeSwitcher from '@/components/ThemeSwitcher.vue';
import LanguageSwitcher from '@/components/LanguageSwitcher.vue';

const { t, locale } = useI18n();

const browserLang = localStorage.getItem('app-language') || 'en';
locale.value = languages.includes(browserLang) ? browserLang : 'en';
</script>

<template>
  <header>
    <h1>{{ projectProp.title }}</h1>
  </header>

  <main>
    <aside class="menu">
      <ThemeSwitcher />
      <LanguageSwitcher />
    </aside>

    <section>
      <PortfolioProjects />
    </section>
  </main>

  <footer>
    <p>
      {{ t('app.repository') }}:
      <a href="https://github.com/pawel-papierkowski/portfolio" target="_blank"
        >https://github.com/pawel-papierkowski/portfolio</a
      >
    </p>
    <p>
      &copy; {{ projectProp.dateRange }} {{ projectProp.author }} | v. {{ projectProp.version }} {{ projectProp.build }}
    </p>
  </footer>
</template>

<style scoped>
section {
  margin: 5px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
}

footer {
  font-size: 11px;
  text-align: center;

  margin: 14px;
  padding: 5px;

  border: var(--footer-border);
  border-radius: var(--footer-border-radius);
  background: var(--footer-background);
  box-shadow: var(--footer-box-shadow);
}

.menu {
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 4px;
  padding-bottom: 10px;
}
</style>
