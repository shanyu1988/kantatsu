<template>
  <div id="app">
      <left-function-menu></left-function-menu>
      <router-view></router-view>
      <router-view name="a"></router-view>
  </div>
</template>
<script>
//左侧功能菜单
import LeftFunctionMenu from './components/currency/LeftFunctionMenu.vue'
export default {
  name: 'app',
  methods: {
      goBack() {
          window.history.length > 1 ?
              this.$router.go(-1) :
              this.$router.push('/')
      }
  },
  mounted(){
      
  },
  components:{
      LeftFunctionMenu
  }
}
</script>
<style>
  #app {
      width: 100%;
      height: 100%;
  }
</style>
