<template>
<div class="p" v-if="data">
  <div class="products">
    <pro-buy v-for="(x,index) in data.data" :key="index" :item="x" />
  </div>
</div>
  
</template>

<script>
import ProBuy from "@/components/ProBuy.vue";
export default {
  components: { ProBuy },
  data() {
    return {
      data: '',
    };
  },
  mounted() {
    this.getPro();
  },
  methods: {
    getPro() {
      this.axios.get(`/v1/product/products`).then((res) => {
        // console.log(res.data);
        this.data = res.data;
        console.log(this.data);
      });
    },
  },
};

</script>

<style scoped src="../assets/css/products.css"></style>
