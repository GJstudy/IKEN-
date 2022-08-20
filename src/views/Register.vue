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
            type="text"
            placeholder="请输入用户名"
            v-model="uname"
            @blur="checkname"
          />
          <input
            type="password"
            placeholder="请输入6-16位密码"
            maxlength="16"
            v-model="upwd"
            @blur="checkpwd()"
            @keyup.enter="goindex()"
          />
          <input
            type="password"
            placeholder="请确认密码"
            maxlength="16"
            v-model="rupwd"
            @blur="checkrpwd()"
            @keyup.enter="goindex()"
          />
        </div>
        <div class="click">
          <span
            :class="{
              abled: uphoneabled && upwdabled && rupwdabled && unameabled,
            }"
            @click="goindex()"
            >注册</span
          >
          <span @click="$router.push('/login')">已有账号直接登录</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      uname: "",
      uphone: "",
      upwd: "",
      rupwd: "",
      unameabled: false,
      rupwdabled: false,
      uphoneabled: false,
      upwdabled: false,
    };
  },
  methods: {
    checkname() {
      if (!/^[\u4E00-\u9FA5A-Za-z]+$/.test(this.uname)) {
        alert("名称输入不符合");
      } else {
        this.unameabled = true;
      }
    },
    checkphone() {
      if (!/^1[3-9]\d{9}$/.test(this.uphone)) {
        alert("请输入正确的手机号");
      } else {
        this.uphoneabled = true;
      }
    },
    checkpwd() {
      if (this.upwd.length < 6) {
        alert("密码长度不够");
      } else {
        this.upwdabled = true;
      }
    },
    checkrpwd() {
      if (this.rupwd != this.upwd) {
        alert("两次输入的密码不一致，请检查");
      } else {
        this.rupwdabled = true;
      }
    },
    goindex() {
      if (/^1[3-9]\d{9}$/.test(this.uphone) && this.upwd.length >= 6) {
        let params = `uname=${this.uname}&uphone=${this.uphone}&upwd=${this.upwd}`;
        this.axios.post("/v1/user/info_in", params).then((res) => {
          console.log(res);
          if (res.data.code == 200) {
            this.$router.push("/login");
          } else {
            alert(res.data.msg);
          }
        });
      } else {
        return;
      }
    },
  },
};
</script>

<style scoped src="../assets/css/register.css"></style>
