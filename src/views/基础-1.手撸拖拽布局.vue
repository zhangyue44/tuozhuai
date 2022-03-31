<template>
  <div class="about">
    <div class="left">
      <div class="leftOrigin" draggable="true" @dragstart="dragStart"></div>
    </div>
    <div class="right" onselectstart="return false;" unselectable="on" @dragover="dragOver" @drop="drop" @click="rightClick">
      <template v-for="(item, index) in list">
        <div draggable="false" :key="index" class='right-over' :style="{left: item.left+'px',top: item.top+'px',width:divWidth+'px',height:divHeight+'px'}" @click="divClick(index,$event)" @mousedown="divDown(item, index, $event)">
          <div class="over-inner" v-if="activeIndex === index">
            <div v-for="it in operateHandler" :key="it" :class="it" @mousedown="resize($event, it, item)"></div>
          </div>
          <div draggable="false" class="over-content" :style="{fontSize: item.fontSize+'px'}">div</div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
/**
 * 1. div元素上设置文字不可选中：直接添加内联属性：onselectstart="return false;" unselectable="on"
*/
export default {
  data() {
    return {
      activeIndex: null, // 当前选中的元素序号
      startX: null,
      startY: null,
      endX: null,
      endY: null,
      list: [],
      operateHandler: ['left-top', 'left-bottom', 'right-top', 'right-bottom'],
      aboutWidth: window.innerWidth,
      aboutHeight: window.innerHeight,
      divWidth: 200,
      divHeight: 200,
      storeWidth: null, // 暂存
      storeHiight: null,
    }
  },
  mounted() {
    window.addEventListener('resize', (e) => {
      this.aboutWidth = e.target.innerWidth;
      this.aboutHeight = e.target.innerHeight
    })
  },
  methods: {
    dragStart(e) {
      this.startX = e.offsetX;
      this.startY = e.offsetY;
    },
    dragOver(e) {  // dragover事件必须要有，不然不能调drop事件
      e.preventDefault()
    },
    drop(e) {
      if (!this.startX) return
      this.endX = e.pageX - 300 - this.startX
      this.endY = e.pageY- 78 - this.startY
      if (this.endX < 0 || this.endX > (this.aboutWidth-300-this.startX) || this.endY < 0 || this.endY > (this.aboutHeight-78-this.startY)) return
      this.list.push({
        left: this.endX,
        top: this.endY,
        fontSize: 30,
      })
      this.startX = null;
      this.startY = null;
    },
    rightClick() {
      this.activeIndex = null;
    },
    divClick(index, e) {
      this.activeIndex = index;
      e.stopPropagation();
    },
    divDown(item, index, e) {
      this.activeIndex = index;
      const el = e.target
      // const el = document.querySelectorAll('.right-over')[this.activeIndex]
      let startMoveX = e.clientX;
      let startMoveY = e.clientY; 
      el.style.cursor = 'move'
      document.onmousemove = e => {
        if (e.clientX < 300 || e.clientY < 78 || e.clientX > this.aboutWidth || e.clientY > this.aboutHeight) {
        } else {
          let x = e.clientX - startMoveX;
          let y = e.clientY - startMoveY;
          if ((item.left + x) <= 0) {
            item.left = 0
          } else if ((item.left + x) >= (this.aboutWidth - 500)) {
            item.left = this.aboutWidth - 500
          } else {
            item.left += x;
          }
          if ((item.top + y) <= 0) {
            item.top = 0
          } else if ((item.top + y) >= (this.aboutHeight-278)) {
            item.top = this.aboutHeight-278
          } else {
            item.top += y;
          }
          startMoveX = e.clientX;
          startMoveY = e.clientY;
        }
      } 
      document.onmouseup = e => {
        document.onmousemove = null
        el.style.cursor = 'default'
      } 
    },
    resize(e, it, item) {
      const that = this
      e.stopPropagation();
      e.preventDefault();
      let el = document.querySelectorAll('.right-over')[this.activeIndex];
      let startMoveX = e.clientX;
      let startMoveY = e.clientY; 
      let left = item.left;
      let top = item.top;
      let width = el.style.width.slice(0, -2);
      let height = el.style.height.slice(0, -2);
      let ratio = width/height;
      document.onmousemove = e => {
        let diffX = e.clientX - startMoveX;
        let diffY = e.clientY - startMoveY;
        switch (it) {
          case 'right-bottom':
            el.style.width = Number(width) + diffX + 'px'
            el.style.height = (Number(width) + diffX) * ratio + 'px'
            break
          case 'right-top':
            el.style.height = Number(height) - diffY + 'px'
            el.style.width = (Number(height) - diffY) * ratio + 'px'
            // el.style.top = top + diffY + 'px'
            that.list[this.activeIndex].top = top + diffY
            break
          case 'left-top':
            el.style.height = Number(height) - diffY + 'px'
            el.style.width = (Number(height) - diffY) * ratio + 'px'
            // el.style.top = top + diffY + 'px'
            // el.style.left = left + diffY * ratio + 'px'
            that.list[this.activeIndex].top = top + diffY
            that.list[this.activeIndex].left = left + diffY * ratio
            break
          case 'left-bottom':
            el.style.width = Number(width) - diffX + 'px'
            el.style.height = (Number(width) - diffX) * ratio + 'px'
            // el.style.left = left + diffX + 'px'
            that.list[this.activeIndex].left = left + diffX
        }
        this.storeWidth = el.style.width;
        this.storeHiight = el.style.height;
        item.fontSize = this.storeWidth ? (30 * (this.storeWidth.slice(0,-2)/200)) : 30;
      }
      document.onmouseup = e => {
        document.onmousemove = null;
        document.onmouseup = null;
        this.storeWidth = null;
        this.storeHiight = null;
      }
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
      background-color: #eee;
      .leftOrigin {
        width: 100px;
        height: 100px;
        background-color: #ccc;
      }
    }
    .right {
      flex: 1;
      position: relative;
      .right-over {
        position: absolute;
        background-color: pink;
        .over-inner {
          width: 100%;
          height: 100%;
        }
        .over-content {
          position: absolute;
          top: 0;
          left: 20px;
        }
      }
      .left-top {
        position: absolute;
        top: 0;
        left: 0;
        width: 5px;
        height: 5px;
        border-top: 2px solid red;
        border-left: 2px solid red;
        cursor: nw-resize;
      }
      .left-bottom {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 5px;
        height: 5px;
        border-bottom: 2px solid red;
        border-left: 2px solid red;
        cursor: sw-resize;
      }
      .right-top {
        position: absolute;
        top: 0;
        right: 0;
        width: 5px;
        height: 5px;
        border-top: 2px solid red;
        border-right: 2px solid red;
        cursor: ne-resize;
      }
      .right-bottom {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 5px;
        height: 5px;
        border-bottom: 2px solid red;
        border-right: 2px solid red;
        cursor: se-resize;
      }
    }
  }
</style>