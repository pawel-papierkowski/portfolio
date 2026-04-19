<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { projectProp } from '@/code/data/const.ts';

import type { ArticleEntry } from '@/code/data/types.ts';

const props = defineProps<{
  entry: ArticleEntry;
}>();

const { t } = useI18n();

const imageUrl = `${import.meta.env.BASE_URL}articles/${props.entry.key}.svg`;

function canShow(): boolean {
  if (!props.entry.showProd && projectProp.build === 'PROD') return false;
  return true;
}

</script>

<template>
  <article v-if="canShow()">
    <div class="articleContent">
      <div class="articleImage">
        <img :src="imageUrl" />
      </div>

      <div class="articleText">
        <h3>{{ t('articles.'+entry.key+'.title') }}</h3>
        <div v-html="t('articles.'+entry.key+'.content')"></div>
        <p>
          <strong>{{t('article.date')}}</strong>: {{ entry.date }}
        </p>
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
          <template v-if="entry.repository">
            <strong>{{t('article.repository')}}</strong>: <a :href="entry.repository" target="_blank" rel="noopener">{{ entry.repository }}</a>
          </template>
          <template v-else>
            <strong>{{t('article.repository')}}</strong>: -
          </template>
        </p>
      </div>
    </div>
  </article>
</template>

<style scoped></style>
