<template>
  <!-- <div class="pro-buy"> -->
  <div class="item_small_item">
    <img :src="item.img" alt="" />
    <span>{{ item.title }}</span>
    <span>{{ item.brief }}</span>
    <div>
      <span
        >¥<b>{{ item.price }}</b></span
      >
      <div>
        <el-button
          icon="el-icon-star-off"
          circle
          v-if="$route.path != '/collect'"
          @click.native="
            selectpid(item.pid);
            select = '1';
          "
        ></el-button>
        <el-button
          icon="el-icon-delete"
          circle
          v-else
          @click.native="delectCollect(item.coid)"
        ></el-button>
        <el-button
          icon="el-icon-goods"
          circle
          @click.native="
            selectpid(item.pid);
            select = '2';
          "
        ></el-button>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  props: ["item"],
  data() {
    return {
      select: "",
    };
  },
  methods: {
    selectpid(pid) {
      if (this.$store.state.uphone) {
        this.axios.get(`/v1/product/select?pid=${pid}`).then((res) => {
          console.log("收藏/购物车点击查id：", res);
          if (this.select == "1") {
            this.addCollect(res);
          } else if (this.select == "2") {
            // console.log(111111);
            console.log("tianjia", res);
            this.addCar(res);
          }
        });
      } else {
        alert("请登录！");
        this.$router.push("/login");
      }
    },
    addCollect(res) {
      let params = `img=${res.data.data[0].img}&title=${res.data.data[0].title}&brief=${res.data.data[0].brief}&price=${res.data.data[0].price}&pid=${res.data.data[0].pid}&uphone=${this.$store.state.uphone}`;
      this.axios.post(`/v1/product/collect`, params).then((res) => {
        // console.log("添加收藏夹：", res);
        if (res.data.data.affectedRows == 1) {
          alert("添加成功，请点击顶部收藏夹按钮查看");
        } else {
          alert("添加失败");
        }
      });
    },
    addCar(res) {
      let params = `img=${res.data.data[0].img}&title=${res.data.data[0].title}&brief=${res.data.data[0].brief}&price=${res.data.data[0].price}&total=${res.data.data[0].price}&pid=${res.data.data[0].pid}&uphone=${this.$store.state.uphone}`;
      this.axios.post(`/v1/product/car`, params).then((res) => {
        // console.log("添加购物车：", res);
        if (res.data.data.affectedRows == 1) {
          alert("添加成功，请点击顶部购物车按钮查看");
        } else {
          alert("添加失败");
        }
      });
    },
    delectCollect(coid) {
      this.axios.delete(`/v1/product/delectList?coid=${coid}`).then((res) => {
        alert(res.data.msg);
        this.$emit("shuaxin", res.data.code);
      });
    },
  },
};
</script>

<style scoped src="../assets/css/probuy.css"></style>
