<template>
  <div id="app">
    <div id="nav">
      <router-link to="/about">手撸 </router-link>
      <router-link to="/SortableJS">| SortableJS </router-link>
      <router-link to="/vuedraggable">| vuedraggable </router-link>
      <router-link to="/vue-drag-resize">| vue-drag-resize </router-link>
      <router-link to="/vue-draggable-resizable">| vue-draggable-resizable</router-link>
      <router-link to="/vue-draggable-resizable-gorkys">| vue-draggable-resizable-gorkys</router-link>
      <router-link to="/vue-grid-layout">| vue-grid-layout</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html,
body {
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
