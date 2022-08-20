<template>
  <div class="home-example">
    <img :src="item.img" alt="">
    <div>
    <p>{{item.title}}</p>
    <el-button icon="el-icon-right" circle style="font-size:20px;color:#000;"></el-button>
    </div>
  </div>
</template>

<script>
  export default {
    props:["item"]
  }
</script>

<style scoped src="../assets/css/homeexample.css"></style>