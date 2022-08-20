<template>
  <div class="my-header">
    <div class="header-left">
      <img src="../assets/img/logo.jpg" alt="" @click="$router.push('/')" />
      <ul>
        <li><router-link to="/products">所有商品</router-link></li>
        <li><a href="#home" @click="gohome">房间</a></li>
        <li><router-link to="/show?rid=2">活动和特惠</router-link></li>
        <li>设计和服务</li>
        <li>家居灵感</li>
        <li><router-link to="/show?rid=1">新品</router-link></li>
      </ul>
    </div>
    <div class="header-center">
      <el-input
        placeholder="你在找什么？可以尝试搜索桌椅、香氛、灯具"
        v-model="input"
        style="width: 400px"
      >
        <i
          slot="prefix"
          class="el-input__icon el-icon-search"
          @click="
            $router.push(`/searchpro?cname=${input}`);
            input = '';
          "
        ></i>
      </el-input>
    </div>
    <div class="header-right" v-if="$store.state.uphone">
      <a @click="$store.commit('loginout');$router.push('/')"
        ><img src="../assets/img/用户退出.png" title="退出" alt=""
      /></a>
      <router-link to="/collect"
        ><img src="../assets/img/收藏.png" title="收藏" alt=""
      /></router-link>
      <router-link to="/car"
        ><img src="../assets/img/购物车.png" title="购物车" alt=""
      /></router-link>
    </div>

    <div class="header-right" v-else>
      <router-link to="/login"
        ><img src="../assets/img/我的.png" title="登录" alt=""
      /></router-link>
      <router-link to="/login"
        ><img src="../assets/img/收藏.png" title="收藏" alt=""
      /></router-link>
      <router-link to="/login"
        ><img src="../assets/img/购物车.png" title="购物车" alt=""
      /></router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
    };
  },
  methods: {
    gohome() {
      this.$router.push("/");
    },
  },
};
</script>
<style scoped src="../assets/css/myheader.css"></style>
<style scoped></style>
