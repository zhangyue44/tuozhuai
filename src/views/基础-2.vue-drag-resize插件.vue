<template>
  <div id="app">
    <vue-drag-resize :isActive="true" :w="200" :h="200" v-on:resizing="resize" v-on:dragging="resize">
      <h3>Hello World!</h3>
      <p>{{ top }} х {{ left }} </p >
      <p>{{ width }} х {{ height }}</p >
    </vue-drag-resize>
    <vue-drag-resize :isActive="true" :w="200" :h="200" v-on:resizing="resize" v-on:dragging="resize">
      <h3>Hello World!</h3>
      <p>{{ top }} х {{ left }} </p >
      <p>{{ width }} х {{ height }}</p >
    </vue-drag-resize>
  </div>
</template>

<script>
/**
 * 1. https://www.npmjs.com/package/vue-drag-resize
 * 2. 安装：npm i -s vue-drag-resize
 * 3. 引入：import VueDragResize from 'vue-drag-resize'  Vue.component('vue-drag-resize', VueDragResize) 全局注册组件了
 * 4. :isActive:"false"  确定组件是否应处于活动状态
 * 5. :preventActiveBehavior="false"  通过单击组件并单击组件区域外部来禁用组件的行为（isActive：true / false）
 * 6. :isDraggable="true"  确定组件是否应可拖动
 * 7. :isResizable="true"  确定组件是否应调整大小
 * 8. :parentLimitation="false"  将组件更改的范围限制为其父大小
 * 9. :aspectRatio="false"  确定组件是否应保持其比例
 * 10. :w="200"  定义组件的初始宽度
 * 11. :h="200"  定义组件的初始高度
 * 12. :minw="50" :minh="50" 定义组件的初始高度与宽度，都是默认值
 * 13. :x="0"  :y="0"  定义组件的初始 X Y 位置
 * 14. :z="auto"  定义组件的zindex(层级)
 * 15. :sticks="['tl', 'tm', 'tr', 'mr', 'br', 'bm', 'bl', 'ml']"  定义句柄数组以限制元素大小调整
 * 16. :stickSize="8" 定义单个句炳的大小
 * 17. axis="both"  定义元素可拖动的轴，可用值为x，y，both或none
 * 18. @clicked="onActivated"  单击组件时调用
 * 19. @activated="onActivated"  单击组件时调用，以显示句柄
 * 20. @deactivated="onDeactivated"  每当用户单击组件外部的任何位置时调用，以便将其停用
 * 21. @resizing="onResizing"  每当组件调整大小时调用
 * 22. @resizestop="onResizstop"  每当组件停止调整大小时调用
 * 23. @dragging="onDragging"  每当拖动组件时调用
 * 24. @dragstop="onDragstop"  每当组件停止拖动时调用
 * 25. snapToGrid  确定组件是否应在预定义的步骤中移动和调整大小,就是可以绘制网格了，网格吸附效果
 * 26. gridX gridY  :gridX="50" :gridY="50"
*/
export default {
  name: 'app',
  data() {
    return {
      width: 0,
      height: 0,
      top: 0,
      left: 0
    }
  },
  methods: {
    resize(newRect) {
      this.width = newRect.width;
      this.height = newRect.height;
      this.top = newRect.top;
      this.left = newRect.left;
    }
  }
}
</script>