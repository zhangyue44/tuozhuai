import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueDragResize from "vue-drag-resize";
import VueDraggableResizable from "vue-draggable-resizable";
import "vue-draggable-resizable/dist/VueDraggableResizable.css";

console.log("ssss");

console.log("dddd");

Vue.config.productionTip = false;
Vue.component("vue-drag-resize", VueDragResize);
Vue.component("vue-draggable-resizable", VueDraggableResizable);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
