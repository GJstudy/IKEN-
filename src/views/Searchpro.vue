<template>
  <div class="s" v-if="data">
    <div class="search">
      <pro-buy v-for="x in data.data" :key="x.pid" :item="x" />
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
  watch: {
    "$route.query.cname"() {
      this.getData();
    },
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.axios
        .get(`/v1/product/searchpro?cname=${this.$route.query.cname}`)
        .then((res) => {
          console.log(res);
          this.data = res.data;
        });
    },
  },
};
</script>

<style scoped>
.s {
  width: 1250px;
  margin: 20px auto;
}
.search {
  display: flex;
  flex-wrap: wrap;
}
</style>
