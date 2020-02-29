<template>
  <div id="app">
    <ToolBar></ToolBar>
    <transition name="fade">
    <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar'

export default {
  components: {
    ToolBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .transitionName-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
