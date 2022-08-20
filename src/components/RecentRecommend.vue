<template>
  <div class="recent-recommend" :style="item.style">
    <div>
      <img :src="item.img" alt="" />
      <div class="word">
        <h2><router-link :to='`/show?rid=${item.rid}`'>{{item.title}}</router-link></h2>
        <div>{{item.introduce}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:["item"]
};

</script>

<style scoped src="../assets/css/recent.css"></style>
