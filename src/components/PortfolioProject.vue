<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { useI18n } from 'vue-i18n';

import type { ArticleEntry } from '@/code/data/types.ts';

const props = defineProps<{
  entry: ArticleEntry;
}>();

const { t, locale } = useI18n();

const articleContent = ref('');
let articleUrl = `${import.meta.env.BASE_URL}articles/${locale.value}/${props.entry.key}.html`;

onMounted(() => {
  loadArticleContent();
});

// Runs every time language changes.
watch(locale, () => {
  // We need to manually reload main content of article.
  articleUrl = `${import.meta.env.BASE_URL}articles/${locale.value}/${props.entry.key}.html`;
  loadArticleContent();
})

const loadArticleContent = async () => {
  try {
    const response = await fetch(articleUrl);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const content = await response.text();
    articleContent.value = content;
  } catch (err) {
    console.error('Failed to load article!', err);
  }
};
</script>

<template>
  <article>
    <div class="content">
      <h2>{{ t('articles.'+entry.key+'.title') }}</h2>
      <div v-html="articleContent"></div>
      <p>
        <strong>{{t('article.webpage')}}</strong>: <a :href="entry.webpage" target="_blank" rel="noopener">{{ entry.webpage }}</a>
      </p>
      <p>
        <strong>{{t('article.repository')}}</strong>: <a :href="entry.repository" target="_blank" rel="noopener">{{ entry.repository }}</a>
      </p>
    </div>
  </article>
</template>

<style scoped></style>
