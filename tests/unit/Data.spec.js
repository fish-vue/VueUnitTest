import { shallowMount } from '@vue/test-utils'
import Data from '@/components/Props.vue'

describe('Data.vue', () => {
  it('应该能够渲染html元素', () => {
    const html = '<span class="hello">hello html</span>'

    // shallowMount: 只渲染当前组件，不渲染子组件
    const wrapper = shallowMount(Data, {
      data: { html }
    })

    // 希望HTML页面包含指定元素
    expect(wrapper.html()).toContain(html)
  })
})
