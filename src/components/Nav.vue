<template>
 <div>
<nav id="nav">
      <div class="logo">
        <img src="../assets/img/logo.png" alt="qwe">
      </div>

      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">首页</el-menu-item>
        <el-submenu index="2">
          <template slot="title">分类</template>
          <el-menu-item index="2-1">分类1</el-menu-item>
          <el-menu-item index="2-2">分类2</el-menu-item>
          <el-menu-item index="2-3">分类3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">分类4</template>
            <el-menu-item index="2-4-1">分类1</el-menu-item>
            <el-menu-item index="2-4-2">分类2</el-menu-item>
            <el-menu-item index="2-4-3">分类3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3" >留言</el-menu-item>
        <el-menu-item index="4">关于</el-menu-item>
      </el-menu>
    </nav>

 </div>
</template>

<script>
 export default {
  data() {
    return {
      activeIndex:'1'
    };
  },
  methods: {
    handleSelect() {}
  }
 }
</script>

<style lang='less'>
#nav {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #DCDFE6;
  .logo{
    img{
      width: 80px;
      height: 60px;
    }
  }

}

</style>
