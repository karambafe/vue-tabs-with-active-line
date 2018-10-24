import { shallowMount } from '@vue/test-utils';
import VueTabsWithActiveLine from '../src/VueTabsWithActiveLine.vue';

describe('VueTabsWithActiveLine', () => {
  const propsData = {
    currentTab: 'tab1',
    tabs: [
      { title: 'Tab1', value: 'tab1' },
      { title: 'Tab2', value: 'tab2' },
    ],
  };

  it('should render correct count buttons', () => {
    const wrapper = shallowMount(VueTabsWithActiveLine, { propsData });
    expect(wrapper.findAll('button').length).toEqual(2);
  });
});
