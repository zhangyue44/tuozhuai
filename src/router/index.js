import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/SortableJS'
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/SortableJS',
    name: 'SortableJS',
    component: () => import(/* webpackChunkName: "SortableJS" */ '../views/SortableJS.vue')
  },
  {
    path: '/vuedraggable',
    name: 'vuedraggable',
    component: () => import(/* webpackChunkName: "vuedraggable" */ '../views/vuedraggable.vue')
  },
  {
    path: '/vue-drag-resize',
    name: 'vue-drag-resize',
    component: () => import(/* webpackChunkName: "vue-drag-resize" */ '../views/vue-drag-resize.vue')
  },
  {
    path: '/vue-draggable-resizable-gorkys',
    name: 'vue-draggable-resizable-gorkys',
    component: () => import(/* webpackChunkName: "vue-draggable-resizable-gorkys" */ '../views/vue-draggable-resizable-gorkys.vue')
  },
  {
    path: '/vue-draggable-resizable',
    name: 'vue-draggable-resizable',
    component: () => import(/* webpackChunkName: "vue-draggable-resizable" */ '../views/vue-draggable-resizable.vue')
  },
  {
    path: '/vue-grid-layout',
    name: 'vue-grid-layout',
    component: () => import(/* webpackChunkName: "vue-grid-layout" */ '../views/vue-grid-layout.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
