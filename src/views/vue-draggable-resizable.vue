<template>
  <div style="height: 500px; width: 500px; border: 1px solid red; position: relative;">
    <vue-draggable-resizable :w="100" :h="100" :disable-user-select="false" @dragging="onDrag" @resizing="onResize" :parent="true">
      <p>Hello! I'm a flexible component. You can drag me around and you can resize me.<br>
      X: {{ x }} / Y: {{ y }} - Width: {{ width }} / Height: {{ height }}</p >
    </vue-draggable-resizable>
    <vue-draggable-resizable :w="100" :h="100" @dragging="onDrag" @resizing="onResize" :parent="true">
      <p>Hello! I'm a flexible component. You can drag me around and you can resize me.<br>
      X: {{ x }} / Y: {{ y }} - Width: {{ width }} / Height: {{ height }}</p >
    </vue-draggable-resizable>
  </div>
</template>

<script>
/**
 * 1. https://github.com/mauricius/vue-draggable-resizable
 * 2. 安装：npm install --save vue-draggable-resizable
 * 3. 引入： import VueDraggableResizable from 'vue-draggable-resizable' import 'vue-draggable-resizable/dist/VueDraggableResizable.css' Vue.component('vue-draggable-resizable', VueDraggableResizable)
 * 4. vue-draggable-resizable 此库的使用方式和 vue-drag-resize一摸一样
 * 5. 特殊功能：grid  :grid="[1,1]"  定义元素所在的网格
 * 6. 这个特殊功能vue-drag-resize也有，这两个库的功能一摸一样
*/
export default {
  data: function () {
    return {
      width: 0,
      height: 0,
      x: 0,
      y: 0
    }
  },
  methods: {
    onResize: function (x, y, width, height) {
      this.x = x
      this.y = y
      this.width = width
      this.height = height
    },
    onDrag: function (x, y) {
      this.x = x
      this.y = y
    }
  }
}
</script>