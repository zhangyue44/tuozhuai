<template>
  <ul id="items">
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
    <li>item 4</li>
    <li>item 5</li>
    <li>item 6</li>
    <li>item 7</li>
    <li>item 8</li>
    <li>item 9</li>
    <li>item 10</li>
    <li>item 11</li>
    <li>item 12</li>
    <li>item 13</li>
    <li>item 14</li>
    <li>item 15</li>
  </ul>
</template>

<script>
/**
 * 1. https://github.com/SortableJS/Sortable
 * 2. 安装: npm install sortablejs --save
 * 3. 引入: import Sortable from 'sortablejs';
*/
import Sortable from 'sortablejs';
export default {
  data() {
    return {
      
    }
  },
  mounted() {
    var el = document.getElementById('items');
    var sortable = Sortable.create(el, {
      animation: 150,
      // handle: '.handle',
      ghostClass: "ghost",
      chosenClass: "chosen",
    });
  },
  methods: {
    

  }
}
</script>

<style lang="scss" scoped>
ul {
  width: 100px;
  margin: 0 auto;
  list-style: none;
}
li {
  height: 40px;
}
.ghost {
  opacity: 0.4;
}
.chosen {
  color: red;
}
</style>