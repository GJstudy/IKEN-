<template>
  <div class="collect">
    <h2>我的收藏</h2>
    <hr />
    <div v-if="!data" class="collect-null">
      <img src="../assets/img/添加.png" alt="" />
      <p>您还没有藏品，快去收藏吧！</p>
      <button @click="$router.push('/')">去逛逛</button>
    </div>
    <div v-else>
      <div class="collect-show">
        <pro-buy v-for="x in data" :key="x.xoid" :item="x" @shuaxin="shuaxin" />
      </div>
    </div>
  </div>
</template>

<script>
import ProBuy from "@/components/ProBuy.vue";
export default {
  components: { ProBuy },
  data() {
    return {
      data: "",
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.axios
        .post("/v1/product/list", `uphone=${this.$store.state.uphone}`)
        .then((res) => {
          console.log(res);
          this.data = res.data.data;
        });
    },
    shuaxin(item) {
      if (item == 200) {
        this.getData();
      }
    },
  },
};
</script>

<style scoped src="../assets/css/collect.css"></style>
