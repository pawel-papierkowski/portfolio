import { describe, it, expect } from 'vitest'
import { createI18n } from 'vue-i18n'

import { mount } from '@vue/test-utils'
import App from '../App.vue'

// Create a test i18n instance.
const i18n = createI18n({
  legacy: false, // Must be false to support the Composition API (useI18n).
  locale: 'en',
  messages: {
    en: {
      // Add any mocked translation keys here if needed by child components.
    }
  },
  missingWarn: false,
  fallbackWarn: false
});

describe('App', () => {
  it('mounts renders properly', () => {
    const wrapper = mount(App, {
      global: {
        plugins: [i18n] // Inject the i18n plugin into the test component.
      }
    });
    expect(wrapper.text()).toContain('Portfolio');
  })
})
