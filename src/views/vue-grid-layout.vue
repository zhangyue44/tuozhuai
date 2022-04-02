<template>
  <div class="about">
    <div class="left">
      <div class="leftOrigin" draggable="true"></div>
    </div>
    <div class="right" onselectstart="return false;" unselectable="on" @dragover="dragOver" @drop="drop">
      <grid-layout
        :layout.sync="layout"
        :col-num="12"
        :row-height="60"
        :is-draggable="true"
        :is-resizable="true"
        :is-mirrored="false"
        :autoSize="false"
        :vertical-compact="true"
        :margin="[10, 10]"
        :verticalCompact="false"
      >
        <grid-item v-for="item in layout"
          :x="item.x"
          :y="item.y"
          :w="item.w"
          :h="item.h"
          :i="item.i"
          :key="item.i">
            {{item.i}}
            <div></div>
        </grid-item>
      </grid-layout>
    </div>
  </div>
</template>

<script>
import VueGridLayout from 'vue-grid-layout';
export default {
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem
  },
  data() {
    return {
      layout: [],
      activeIndex: 0
    }
  },
  methods: {
    dragOver(e) {
      e.preventDefault()
    },
    drop(e) {
      this.layout.push({
        "i": String(this.activeIndex++),
        "x": 0,
        "y": 0,
        "w": 2,
        "h": 2
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .about {
    width: 100%;
    height: calc(100% - 78px);
    display: flex;
    .left {
      width: 300px;
      .leftOrigin {
        width: 100px;
        height: 100px;
        background-color: #ccc;
      }
    }
    .right {
      flex: 1;
      position: relative;
      background-color: #efefef;
      margin-top: 10px;
      background-image: linear-gradient(#f8f8f8 10px,transparent 0),
                        linear-gradient(90deg, #f8f8f8 10px,transparent 0);
      background-size: calc(8.43333% - 2.07px) 70px;
      overflow-y: auto;
      overflow-x: auto;
      user-select: none;
      ::v-deep .vue-grid-item {
        box-sizing: border-box;
        background: #ccc;
        touch-action: none;
      }
    }
  }
</style>