<template>
  <div>
    <tabs
      :tabs="tabs"
      :currentTab="currentTab"
      @onClick="handleClick"
    />
    <div class="content">
      <div v-if="currentTab === 'tab1'">Content 1</div>
      <div v-if="currentTab === 'tab2'">Content 2</div>
      <div v-if="currentTab === 'tab3'">Content 3</div>
    </div>
  </div>
</template>

<script>
import Tabs from '../src/VueTabsWithActiveLine.vue';

const TABS = [{
  title: 'Tab 1',
  value: 'tab1',
}, {
  title: 'Tab 2',
  value: 'tab2',
}, {
  title: 'Tab 3',
  value: 'tab3',
}];

export default {
  components: {
    Tabs,
  },
  data: () => ({
    tabs: TABS,
    currentTab: 'tab1',
  }),
  methods: {
    handleClick(newTab) {
      this.currentTab = newTab;
    },
  },
}
</script>

<style>
.tabs {
  position: relative;
  margin: 0 auto;
}

.tabs__item {
  display: inline-block;
  margin: 0 5px;
  padding: 10px;
  padding-bottom: 8px;
  font-size: 16px;
  letter-spacing: 0.8px;
  color: gray;
  text-decoration: none;
  border: none;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  transition: all 0.25s;
}

.tabs__item_active {
  color: black;
}

.tabs__item:hover {
  border-bottom: 2px solid gray;
  color: black;
}

.tabs__item:focus {
  outline: none;
  border-bottom: 2px solid gray;
  color: black;
}

.tabs__item:first-child {
  margin-left: 0;
}

.tabs__item:last-child {
  margin-right: 0;
}

.tabs__active-line {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  background-color: black;
  transition: transform 0.4s ease, width 0.4s ease;
}

.content {
  margin-top: 30px;
  font-size: 30px;
}
</style>
