<template>
  <div id="app">
    <ToolBar></ToolBar>
    <transition name="fade">
    <router-view></router-view>
    </transition>
    <spinner :loading="loadingStatus"></spinner>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar'
import Spinner from './components/Spinner'
import { bus } from './utils/bus'


export default {
  components: {
    ToolBar,
    Spinner
  },
  data() {
    return {
      loadingStatus: false
    }
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false;
    }
  },
  created() {
    bus.$on('start:spinner', this.startSpinner);
    bus.$on('end:spinner', this.endSpinner);
  },
  // 이벤트 버스는 이벤트 객체가 계속 쌓이기 때문에 컴포넌트의 역할이 끝난 후에 꼭 off 해주어야 한다.
  beforeDestroy() {
    bus.$off('start:spinner', this.startSpinner);
    bus.$off('end:spinner', this.endSpinner);
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

body {
  padding: 0;
  margin: 0;
}
a {
  text-decoration:none;
}
</style>
