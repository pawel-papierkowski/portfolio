<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { projectProp } from '@/code/data/const.ts';

const { t } = useI18n();

</script>

<template>
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
    <p>
      <a href="mailto:pawel.papierkowski@gmail.com">pawel.papierkowski@gmail.com</a>
    </p>
  </footer>
</template>

<style scoped></style>
