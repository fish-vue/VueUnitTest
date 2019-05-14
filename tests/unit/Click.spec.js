import { shallowMount } from '@vue/test-utils'
import Click from '@/components/Click.vue'

describe('Click.vue', () => {
  it('点击按钮后数值应该加一', () => {
    const wrapper = shallowMount(Click)
    expect(wrapper.vm.count).toBe(0)

    // 寻找到按钮组件
    const button = wrapper.find('button')
    // 点击它
    button.trigger('click')

    // 检查数值时候加一
    expect(wrapper.vm.count).toBe(1)
  })
})
