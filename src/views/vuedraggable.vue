<template>
  <div>
    <draggable v-model="myArray" group="people" @start="drag=true" @end="drag=false" animation="150">
      <div v-for="element in myArray" :key="element.id">{{element.name}}</div>
    </draggable>
    <table>
      <thead>
        <draggable tag="tr" v-model="hlist" @start="drag=true" @end="end" animation="150">
            <td v-for="item in hlist" :key="item">
              {{item==='name'?'名称':(item==='age'?'年龄':'住址')}}
            </td>
        </draggable>
      </thead>
      <draggable tag="tbody" v-model="list" @start="drag=true" @end="drag=false" animation="150">
        <tr v-for="item in list" :key="item.name">
          <td>{{item[hlist[0]]}}</td>
          <td>{{item[hlist[1]]}}</td>
          <td>{{item[hlist[2]]}}</td>
        </tr>
      </draggable>
    </table>
  </div>
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
      ],
      list: [
        {
          id: 1,
          name: '张三',
          age: '18',
          address: '奥里给'
        },
        {
          id: 2,
          name: '李四',
          age: '18',
          address: '奥里给'
        },
        {
          id: 3,
          name: '王五',
          age: '18',
          address: '奥里给'
        },
      ],
      hlist: [
        'name',
        'age',
        'address',
      ]
    }
  },
  components: {
    draggable
  },
  methods: {
    end() {
      console.log('end');
      this.drag = false;
      console.log(this.hlist);
    }

  }
}
</script>

<style lang="scss" scoped>
table {
  width: 500px;
  height: 300px;
  margin: 0 auto;
  border: 1px solid #ccc;
  margin-top: 40px;
  border-spacing: 0;
  thead {
    background-color: #343a40;
    color: #fff;
  }
  tbody {
    tr:nth-child(even) {
      background-color: #dde0e3;
    }
    tr:nth-child(odd) {
      background-color: #e9ecef;
    }
  }
}
</style>