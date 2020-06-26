<template>
  <div id="app">
    <router-view></router-view>
    <main-table-bar></main-table-bar>
  </div>
</template>

<script>
import MainTableBar from "./components/common/tabbar/MainTabBar"

export default {
  name: 'App',
  components: {
    MainTableBar
  }
}
</script>

<style>
@import "~assets/css/base.css";
@import "~assets/css/normalize.css";
#app {
  background-color: #fff;
}
</style>
