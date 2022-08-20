<template>
  <div class="pro-item1">
    <h2>{{ item.series }}</h2>
    <div class="item_big" :style="item.style">
      <div class="item_big_text">
        <h3>{{ item.title }}</h3>
        <p>{{ item.detail1 }}</p>
        <p>
          {{ item.detail2 }}
        </p>
        <p>{{ item.detail3 }}</p>
        <p>{{ item.detail4 }}</p>
        <p>
          {{ item.detail5 }}
        </p>
      </div>
      <div class="item_big_img">
        <img :src="item.img" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
};
</script>

<style scoped src="../assets/css/newitem.css"></style>
