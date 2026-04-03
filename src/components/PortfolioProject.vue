<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import type { ArticleEntry } from '@/code/data/types.ts';

const props = defineProps<{
  entry: ArticleEntry;
}>();

const { t } = useI18n();

const imageUrl = `${import.meta.env.BASE_URL}icons/${props.entry.key}.svg`;

</script>

<template>
  <article>
    <div class="articleContent">
      <div class="articleImage">
        <img :src="imageUrl" />
      </div>

      <div class="articleText">
        <h2>{{ t('articles.'+entry.key+'.title') }}</h2>
        <div v-html="t('articles.'+entry.key+'.content')"></div>
        <p>
          <strong>{{t('article.techStack')}}</strong>: {{ entry.techStack }}
        </p>
        <p>
          <template v-if="entry.webpage">
            <strong>{{t('article.webpage')}}</strong>: <a :href="entry.webpage" target="_blank" rel="noopener">{{ entry.webpage }}</a>
          </template>
          <template v-else>
            <strong>{{t('article.webpage')}}</strong>: -
          </template>
        </p>
        <p>
          <strong>{{t('article.repository')}}</strong>: <a :href="entry.repository" target="_blank" rel="noopener">{{ entry.repository }}</a>
        </p>
      </div>
    </div>
  </article>
</template>

<style scoped></style>
