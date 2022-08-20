<template>
  <div>
    <div class="container">
      <div class="login-left">
        <div>
          <img src="/img/login_logo.svg" alt="" @click="$router.push('/')" />
          <div>
            <div class="hej">Hej!</div>
            <div class="text">为大众创造更美好的日常生活</div>
          </div>
        </div>
      </div>
      <div class="login-right">
        <div class="title">欢迎来到IKEN,很高兴您来到这里</div>
        <div class="inputs">
          <input
            type="text"
            placeholder="请输入手机号"
            v-model="uphone"
            @blur="checkphone"
          />
          <input
            type="password"
            placeholder="请输入6-16位密码"
            maxlength="16"
            v-model="upwd"
            @blur="checkpwd(upwd)"
            @keyup.enter="goindex()"
          />
        </div>
        <div class="click">
          <span :class="{ abled: uphoneabled && upwdabled }" @click="goindex()"
            >登录</span
          >
          <span @click="$router.push('/register')">没有账号，请先注册</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      uphone: "",
      upwd: "",
      uphoneabled: false,
      upwdabled: false,
    };
  },
  methods: {
    checkphone() {
      if (!/^1[3-9]\d{9}$/.test(this.uphone)) {
        alert("请输入正确的手机号");
      } else {
        this.uphoneabled = true;
      }
    },
    checkpwd(upwd) {
      if (upwd.length < 6) {
        alert("密码长度不够");
      } else {
        this.upwdabled = true;
      }
    },
    goindex() {
      if (/^1[3-9]\d{9}$/.test(this.uphone) && this.upwd.length >= 6) {
        let params = `uphone=${this.uphone}&upwd=${this.upwd}`;
        this.axios.post("/v1/user/login", params).then((res) => {
          console.log(res);
          if (res.data.code == 200) {
            this.$store.commit('updateUphone',res.data.data[0].uphone)
            this.$router.push("/");
          } else {
            alert("登录失败，请检查输入的内容");
          }
        });
      } else {
        return;
      }
    },
  },
};
</script>

<style scoped src="../assets/css/login.css"></style>
