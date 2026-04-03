<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { projectProp } from '@/code/data/const.ts';

import PortfolioProject from '@/components/projects/PortfolioProject.vue';

import type { ArticleGroup } from '@/code/data/types.ts';

const props = defineProps<{
  group: ArticleGroup;
}>();

const { t } = useI18n();

function canShow(): boolean {
  if (!props.group.showProd && projectProp.build === 'PROD') return false;
  return true;
}

function getClass(): string {
  if (props.group.groupingPresent) return "present";
  return "";
}

</script>

<template>
  <section v-if="canShow()" v-bind:class="getClass()">
    <template v-if="group.groupingPresent">
      <div class="groupText">
        <h2>{{ t('articleGroups.'+group.key+'.title') }}</h2>
        <div v-html="t('articleGroups.'+group.key+'.descr')"></div>
      </div>
    </template>

    <div class="groupArticles">
      <template v-for="entry in group.articles" :key="entry.key">
        <PortfolioProject :entry="entry" />
      </template>
    </div>
  </section>
</template>

<style scoped></style>
