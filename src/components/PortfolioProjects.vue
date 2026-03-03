<script setup lang="ts">
import { articleEntries } from '@/code/data/const.ts';
import PortfolioProject from '@/components/PortfolioProject.vue';
</script>

<template>
  <section>
    <template v-for="entry in articleEntries" :key="entry.key">
      <PortfolioProject :entry="entry" />
    </template>
  </section>
</template>

<style scoped></style>
