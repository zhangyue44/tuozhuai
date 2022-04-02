<template>
  <grid-layout
    :layout.sync="layout"
    :col-num="12"
    :row-height="30"
    :is-draggable="true"
    :is-resizable="true"
    :is-mirrored="false"
    :autoSize="false"
    :vertical-compact="true"
    :margin="[10, 10]"
    :maxRows="12"
  >
    <grid-item v-for="item in layout"
      :x="item.x"
      :y="item.y"
      :w="item.w"
      :h="item.h"
      :i="item.i"
      :key="item.i">
        {{item.i}}
    </grid-item>
  </grid-layout>
</template>

<script>
  /**
 * 1. https://jbaysolutions.github.io/vue-grid-layout/zh/guide/usage.html
 * 2. 安装：npm install vue-grid-layout --save
 * 3. 引入：import VueGridLayout from 'vue-grid-layout';  components: {GridLayout: VueGridLayout.GridLayout, GridItem: VueGridLayout.GridItem}
 * 4. layout: 数据源，值必须为 Array，其数据项为 Object。 每条数据项必须有 i, x, y, w 和 h 属性
 * 5. colNum：定义栅格系统的列数，其值需为自然数，default为12
 * 6. rowHeight：每行的高度，单位像素，default: 150
 * 7. maxRows：定义最大行数
 * 8. margin：定义栅格中的元素边距，值必须是包含两个 Number的数组，数组中第一个元素表示水平边距，第二个表示垂直边距，单位为像素，default: [10, 10]
 * 9. isDraggable：标识栅格中的元素是否可拖拽，default: true
 * 10. isResizable：标识栅格中的元素是否可调整大小，default: true
 * 11. isMirrored：标识栅格中的元素是否可镜像反转，default: false
 * 12. autoSize：标识容器是否自动调整大小，default: true
 * 13. verticalCompact：标识布局是否垂直压缩，default: true
 * 14. preventCollision：防止碰撞属性，值设置为ture时，栅格只能拖动至空白处，default: false
 * 15. useCssTransforms：标识是否使用CSS属性 transition-property: transform; default: true
 * 16. responsive：标识布局是否为响应式，default: false 
*/

/**
 * 1. GridItem
 * 2. i：栅格中元素的ID
 * 3. x：标识栅格元素位于第几列，需为自然数
 * 4. y：标识栅格元素位于第几行，需为自然数
 * 5. w：标识栅格元素的初始宽度，值为colWidth的倍数
 * 6. h：标识栅格元素的初始高度，值为rowHeight的倍数
 * 7. minW：栅格元素的最小宽度，值为colWidth的倍数。如果w小于minW，则minW的值会被w覆盖
 * 8. minH  maxW  maxH
 * 9. isDraggable：标识栅格元素是否可拖拽。如果值为null则取决于父容器。 default: null
 * 10. isResizable：是否可调整大小。如果值为null则取决于父容器。 default: null
 * 11. static：元素是否为静态的（无法拖拽、调整大小或被其他元素移动）。 default: false
 * 12. dragIgnoreFrom：元素中哪些子元素无法触发拖拽事件，值为css-like选择器。 default: 'a, button'
 * 13. dragAllowFrom：元素中哪些子元素可以触发拖拽事件，值为css-like选择器。如果值为null则表示所有子元素（dragIgnoreFrom的除外）。 default: null
 * 14. resizeIgnoreFrom：元素中哪些子元素无法触发调整大小的事件，值为css-like选择器。  default: 'a, button'
*/ 

import VueGridLayout from 'vue-grid-layout';
export default {
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem
  },
  data: function () {
    return {
      layout: [
        {"x":0,"y":0,"w":2,"h":2,"i":"0"},
        {"x":2,"y":0,"w":2,"h":4,"i":"1"},
        {"x":4,"y":0,"w":2,"h":5,"i":"2"},
        {"x":6,"y":0,"w":2,"h":3,"i":"3"},
        {"x":8,"y":0,"w":2,"h":3,"i":"4"},
        {"x":10,"y":0,"w":2,"h":3,"i":"5"},
        {"x":0,"y":5,"w":2,"h":5,"i":"6"},
        {"x":2,"y":5,"w":2,"h":5,"i":"7"},
        {"x":4,"y":5,"w":2,"h":5,"i":"8"},
        {"x":6,"y":3,"w":2,"h":4,"i":"9"},
        {"x":8,"y":4,"w":2,"h":4,"i":"10"},
        {"x":10,"y":4,"w":2,"h":4,"i":"11"},
        {"x":0,"y":10,"w":2,"h":5,"i":"12"},
        {"x":2,"y":10,"w":2,"h":5,"i":"13"},
        {"x":4,"y":8,"w":2,"h":4,"i":"14"},
        {"x":6,"y":8,"w":2,"h":4,"i":"15"},
        {"x":8,"y":10,"w":2,"h":5,"i":"16"},
        {"x":10,"y":4,"w":2,"h":2,"i":"17"},
        {"x":0,"y":9,"w":2,"h":3,"i":"18"},
        {"x":2,"y":6,"w":2,"h":2,"i":"19"}
      ],
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
::v-deep .vue-grid-item:not(.vue-grid-placeholder) {
  background: #ccc;
  border: 1px solid #000
}
::v-deep .vue-grid-item {
  touch-action: none;
}
</style>