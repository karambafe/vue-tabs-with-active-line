# Vue-tabs-with-active-line

Vue2 simple component, that allows you to make tabs with moving bottom line

![Alt Text](https://media.giphy.com/media/NTDhntg2ySo7rGLaRm/giphy.gif)

## Demo and example

[Demo](https://github.com/karambafe/vue-tabs-with-active-line/blob/master/demo)

[Example](https://github.com/karambafe/vue-tabs-with-active-line/blob/master/examples/Simple.vue)

## Install

via NPM
```bash
npm install vue-tabs-with-active-line --save
```

## Usage

At first, import the component:

```javascript
import Tabs from 'vue-tabs-with-active-line';
```

Second, define the data for props `tabs`, `currentTab`, and method for `onClick` callback

```javascript
export default {
  components: {
    Tabs,
  },
  data: () => ({
    tabs: [{
      title: 'Tab 1',
      value: 'tab1',
    }, {
      title: 'Tab 2',
      value: 'tab2',
    }],
    currentTab: 'tab1',
  }),
  methods: {
    handleClick(newTab) {
      this.currentTab = newTab;
    },
  },
}
</script>
```

Finally, add styles for component elements classes:

* `tabs` - component wrapper. Be sure to add  `position: relative;` for this class.
* `tabs__item` - button
* `tabs__item_active` - active button
* `tabs__active-line` - bottom line. Be sure to add `position: absolute;` and `bottom, left, height, background-color` properties for this class

<details><summary>CSS EXAMPLE</summary>

```css
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
  background-color: transparent;
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
```

</details>

## HTML structure:

```html
  <nav class="tabs">
    <button class="tabs__item"> button title </button> 
    <button class="tabs__item"> button title </button> 
    <button class="tabs__item tabs__item_active"> button title </button> // active tab

    <div class="tabs__active-line"></div>
  </nav>
```

## License

This project is licensed under the MIT license, Copyright (c) 2018 Vitaly. For more information see [`LICENSE`](https://github.com/karambafe/vue-tabs-with-active-line/blob/master/LICENSE).
