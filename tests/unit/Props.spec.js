import { shallowMount } from '@vue/test-utils'
import Props from '@/components/Props.vue'

describe('Props.vue', () => {
  it('通过props传递数据', () => {
    const msg = 'new message'

    // 传入props数据
    const wrapper = shallowMount(Props, {
      propsData: { msg }
    })

    // 期望渲染后组件包好相关数据
    expect(wrapper.text()).toMatch(msg)
  })
})
