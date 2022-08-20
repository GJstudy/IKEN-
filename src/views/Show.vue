<template>
  <div class="show" v-if="data">
    <div class="show_kuai">
      <pro-item-1 :item="data[0]" />
      <div class="item2">
        <div>可选商品</div>
        <div class="item_small">
          <pro-buy v-for="x in data1" :key="x.pid" :item="x" />
        </div>
      </div>
    </div>
    <div class="show_kuai">
      <pro-item-1 :item="data[1]" />
      <div class="item2">
        <div>可选商品</div>
        <div class="item_small">
          <pro-buy v-for="x in data2" :key="x.pid" :item="x" />
        </div>
      </div>
    </div>
    <div class="show_kuai">
      <pro-item-1 :item="data[2]" />
      <div class="item2">
        <div>可选商品</div>
        <div class="item_small">
          <pro-buy v-for="x in data3" :key="x.pid" :item="x" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProItem1 from "@/components/ProItem1.vue";
import ProBuy from "@/components/ProBuy.vue";

export default {
  components: { ProItem1, ProBuy },
  data() {
    return {
      data: "",
      data1: [],
      data2: [],
      data3: [],
    };
  },
  created() {
    this.getProitem();
  },
  watch: {
    "$route.query.rid"() {
      this.getProitem();
    },
  },
  methods: {
    getProbuy(cid, callback) {
      this.axios.get(`/v1/product/new_pro?cid=${cid}`).then((res) => {
        callback(res.data);
      });
    },
    getProitem() {
      this.axios
        .get(`/v1/product/new?rid=${this.$route.query.rid}`)
        .then((res) => {
          console.log("proitem:", res);
          this.data = res.data.data;

          this.go1(this.data[0].cid);
          this.go2(this.data[1].cid);
          this.go3(this.data[2].cid);
        });
    },

    go1(item) {
      this.getProbuy(item, (data) => {
        this.data1 = data.data;
      });
    },
    go2(item) {
      this.getProbuy(item, (data) => {
        this.data2 = data.data;
      });
    },
    go3(item) {
      this.getProbuy(item, (data) => {
        this.data3 = data.data;
      });
    },
  },
};
</script>

<style scoped src="../assets/css/show.css"></style>
