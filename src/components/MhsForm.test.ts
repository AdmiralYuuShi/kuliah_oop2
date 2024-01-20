
import { createPinia, setActivePinia } from 'pinia'
import form from './MhsForm.vue'
import { VueWrapper, shallowMount } from '@vue/test-utils'
import { beforeEach, describe, expect, test } from 'vitest'
import { createVuetify } from 'vuetify'

describe('MHS Form Component Test', () => {
  let wrapper: VueWrapper<any>
  let pinia: ReturnType<typeof createPinia>

  beforeEach(() => {
    pinia = createPinia()
    wrapper = shallowMount(form, {
      global: {
        plugins: [pinia, createVuetify]
      }
    })
    setActivePinia(createPinia())
  })

  test("tests data attributes and mounted hooks", () => {
    expect(wrapper.vm.count).toBe(0)
  })

  test("tests increment Method", () => {
    wrapper.vm.increment()
    expect(wrapper.vm.count).toBe(1)
  })

})