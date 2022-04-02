<template>
  <div style="height: 1000px; width: 1000px; border: 1px solid red; position: relative;">
    <vdr :w="100" :h="100" v-on:dragging="onDrag" v-on:resizing="onResize" :parent="true" :snap="true" :is-conflict-check="true">
      <p>Hello! I'm a flexible component. You can drag me around and you can resize me.<br>
      X: {{ x }} / Y: {{ y }} - Width: {{ width }} / Height: {{ height }}</p >
    </vdr>
    <vdr
      :w="200"
      :h="200"
      :parent="true"
      :debug="false"
      :min-width="200"
      :min-height="200"
      :isConflictCheck="true"
      :snap="true"
      :snapTolerance="50"
    >
    </vdr>
    <vdr
      :w="200"
      :h="200"
      :parent="true"
      :debug="false"
      :min-width="200"
      :min-height="200"
      :isConflictCheck="true"
      :snap="true"
      :snapTolerance="50"
    >
    </vdr>
    <vdr
      :w="200"
      :h="200"
      :parent="true"
      :debug="false"
      :min-width="200"
      :min-height="200"
      :isConflictCheck="true"
      :snap="true"
      :snapTolerance="50"
    >
    </vdr>
  </div>
</template>

<script>
/**
 * 1. https://github.com/gorkys/vue-draggable-resizable-gorkys  旧地址：https://github.com/gorkys/vue-draggable-resizable
 * 2. 安装：npm install --save vue-draggable-resizable-gorkys
 * 3. 引入：import vdr from 'vue-draggable-resizable-gorkys' import 'vue-draggable-resizable-gorkys/dist/VueDraggableResizable.css' components: {vdr}
 * 4. 这个库是fork的vue-drggable-resizable,只是在那个库基础上多添加了几个属性
 * 5. isConflictCheck :is-conflict-check="false"  定义组件是否开启冲突检测
 * 6. snap  :snap="false"  定义组件是否开启元素对齐
 * 7. snapTolerance  :snap-tolerance="5"  当调用snap时，定义组件与元素之间的对齐距离，以像素(px)为单位
 * 8. 碰撞检测与吸附检测源码地址： https://github.com/gorkys/vue-draggable-resizable/blob/master/src/components/vue-draggable-resizable.vue
 * 9. 我将源码拷下来放在了 检测版-1.zgorkys碰撞检测与吸附检测源码拷贝.vue 文件中
*/
import vdr from 'vue-draggable-resizable-gorkys'
import 'vue-draggable-resizable-gorkys/dist/VueDraggableResizable.css'
export default {
  components: {vdr},
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