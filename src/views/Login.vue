
<template>
  <div class="body">
    <div class="container">
      <div class="title">后台登录</div>
      <el-form ref="form" :model="form">
        <el-form-item>
          <el-input v-model="form.username" prefix-icon="el-icon-user" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="form.password"
            type="password"
            prefix-icon="el-icon-lock"
            placeholder="密码"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { login } from "@/api/login";
export default {
  data() {
    return {
      form: {
        username: "zhangsan",
        password: "123"
      }
    };
  },
  components: {},
  methods: {
    onSubmit() {
      login(this.form).then(res => {
        if (res.data.code == 200) {
          // alert("登录成功")
          this.$store.commit("setToken", res.data.data);
          this.$router.back();
        } else {
          alert("登录失败");
        }
      });
    }
  }
};
</script>

<style scoped lang='less' >
.body {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: url("../assets/img/233.jpg");
  background-size: 100% 100%;
  height: 100%;
  padding: 0px;
  margin: 0px;
}
.container {
  background-color: #ffffff;
  border-radius: 10px;
  width: 300px;
  padding: 50px 100px;
  margin: auto;
  margin-top: 150px;
  text-align: center;
  .title {
    font-size: 20px;
    margin-bottom: 30px;
  }
  .el-button {
    width: 100%;
  }
}
</style>>


