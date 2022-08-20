<template>
  <div>
    <my-header v-show="!$route.meta.hideHeader"/>
    <router-view></router-view>
    <my-footer v-show="!$route.meta.hideFooter"/>
  </div>
</template>

<script>
import './assets/css/base.css'
import MyFooter from './components/MyFooter.vue'
import MyHeader from './components/MyHeader.vue'
  export default {
  components: { MyHeader, MyFooter },
    
  }
</script>

<style scoped>

</style>