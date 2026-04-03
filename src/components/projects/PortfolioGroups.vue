<script setup lang="ts">
import { articleGroups } from '@/code/data/data.ts';

import PortfolioGroup from '@/components/projects/PortfolioGroup.vue';
</script>

<template>
  <template v-for="group in articleGroups" :key="group.key">
    <PortfolioGroup :group="group" />
  </template>
</template>

<style scoped></style>
