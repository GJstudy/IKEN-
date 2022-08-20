<template>
  <div>
    <div class="car">
      <h2>我的购物车</h2>
      <hr />
      <div v-if="!data" class="car-null">
        <img src="../assets/img/gou.png" alt="" />
        <p>购物车里空空如也，快去逛逛吧！</p>
        <button @click="$router.push('/')">去逛逛</button>
      </div>
      <div v-else>
        <div class="car-show">
          <div class="show-list" v-for="(x, index) in data" :key="index">
            <div @click="x.selected = !x.selected">
              <img src="/img/未勾选.png" alt="" v-if="!x.selected" />
              <img src="/img/对钩.png" alt="" v-if="x.selected" />
            </div>
            <div class="s1">
              <div class="s2">
                <img :src="x.img" alt="" />
                <div class="s3">
                  <h3>{{ x.title }}</h3>
                  <span>{{ x.brief }}</span>
                  <div class="s4">
                    <span>单价：¥{{ x.price }}</span>
                    <div class="s5">
                      <button @click="x.amount--" :disabled="x.amount == 1">
                        -
                      </button>
                      <span>{{ x.amount }}</span>
                      <button @click="x.amount++">+</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="right">
                <p>总和：{{ (x.amount * x.price).toFixed(2) }}</p>
                <span @click="delectCarlist(x.carid, index)">删除</span>
              </div>
            </div>
          </div>
          <div class="jiesuan">
            <span>总和：{{ sum }}</span>
            <span @click="commit">立即结算</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      amount: 1,
      count: 0,
      // unselect: true,
    };
  },
  computed: {
    // let a=this.data
    sum() {
      return this.data.reduce(
        (sum, value) => sum + value.amount * value.price * value.selected,
        0
      );
    },
  },
  mounted() {
    this.getData();
  },
  watch:{
    'data.length'(){
      this.getData()
    }
  },
  methods: {
    getData() {
      this.axios
        .post("/v1/product/carlist", `uphone=${this.$store.state.uphone}`)
        .then((res) => {
          console.log(res);
          this.data = res.data.data;
        });
    },
    delectCarlist(carid, index) {
      this.axios
        .delete(`/v1/product/delectcarList?carid=${carid}`)
        .then((res) => {
          alert(res.data.msg);
          // this.getData();
          this.data.splice(index, 1);
          // console.log(index);
        });
    },
    commit() {
      this.data.forEach((element) => {
        if (element.selected) {
          this.delectCarlist(element.carid);
          this.getData();
        }
      });
    },
  },
};
</script>

<style scoped src="../assets/css/car.css"></style>
