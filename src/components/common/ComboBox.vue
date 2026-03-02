<script setup lang="ts">
// We need to use custom combobox implementation because for some reason <select> and <option>
// have very bad CSS support for dropdown list among browsers.

import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const props = defineProps({
  modelValue: String,
  options: {
    type: Array<string>,
    default: () => []
  },
  langPrefix: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: 'tags.combobox.placeholder'
  }
});

const emit = defineEmits(['update:modelValue']);

const isOpen = ref(false);
const arrowClass = computed(() => ({ open: isOpen.value }))

const selectedOption = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
});

const selectOption = (option: string) => {
  selectedOption.value = option;
  isOpen.value = false;
}
</script>

<template>
  <div class="combobox" ref="combobox" tabindex="0" @blur="isOpen = false">
    <div class="selected" @click="isOpen = !isOpen">
      <span class="selected-text">{{ t(langPrefix+'.'+selectedOption) || t(placeholder) }}</span>
      <span class="arrow" :class="arrowClass"></span>
    </div>
    <div class="options" v-show="isOpen">
      <div v-for="option in options" :key="option" class="option"
        @click="selectOption(option)">
        {{ t(langPrefix+'.'+option) }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.combobox {
  position: relative;
  display: inline-block;

  margin-left: 5px;
  padding: 0px;

  color: var(--combobox-text);
  background: var(--combobox-background);

  border: var(--combobox-border);
  border-radius: 5px;
  min-width: 125px;
  z-index: 10000;
}

/**/

.selected {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2px 4px;
  cursor: pointer;
}

.selected-text {
  flex: 1;
}

.arrow {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 6px solid var(--combobox-text);
  transition: transform 0.2s;
}

.arrow.open {
  transform: rotate(180deg);
}

/**/

.options {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;

  border: var(--combobox-border);
  border-radius: 5px;
  background: var(--combobox-background);

  min-width: 150px;
  max-height: 300px;
  overflow-y: auto;
  z-index: 10010;
}

.option {
  padding: 4px;
  cursor: pointer;
}

.option:hover {
  background-color: var(--combobox-hover-background);
}
</style>
