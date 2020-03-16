
<template>
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
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      }
    };
  },
  components: {},
  methods: {
    onSubmit() {}
  }
};
</script>

<style lang='less'>
html {
  background: url("../assets/img/233.jpg");
  background-size: 100% 100%;
  height: 100%;
  padding: 0px;
  margin: 0px;
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
}
</style>>


