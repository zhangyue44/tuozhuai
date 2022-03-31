<template>
  <draggable v-model="myArray" group="people" @start="drag=true" @end="drag=false">
    <div v-for="element in myArray" :key="element.id">{{element.name}}</div>
  </draggable>
</template>

<script>
/**
 * 1. https://github.com/SortableJS/Vue.Draggable
 * 2. 安装: npm i -S vuedraggable
 * 3. 引入: import draggable from 'vuedraggable'
*/
import draggable from 'vuedraggable'
export default {
  data() {
    return {
      myArray: [
        {
          "id": 0,
          "name": "hshshshs"
        },
        {
          "id": 1,
          "name": "Joho"
        },
        {
          "id": 2,
          "name": " Jeanmm"
        },
      ]
    }
  },
  components: {
    draggable
  },
  mounted() {
    var el = document.getElementById('items');
    var sortable = Sortable.create(el);
  },
  methods: {
    

  }
}
</script>

<style lang="scss" scoped>
  
</style>