<template>
  <div id="app">
    <div class="name">
      <router-link to="/">es lin</router-link>
    </div>
    <div class="link">
      <a href='https://github.com/haidaisiganbei'>
        <img src="./assets/github.png" />
      </a>
      <a href='https://weibo.com/3025005114/profile'>
        <img src="./assets/weibo.png" />
      </a>
      <a href="/edit">
        <img src="./assets/edit.png" />
      </a>
    </div>
    <router-view />
    <!-- <vue-particles color="#dedede">

      
    </vue-particles> -->

  </div>
</template>
<script>
export default {
  components: {},
  data () {
    return {



    }
  }
};
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
  .name {
    font-size: 24px;
    margin-top: 30px;
  }
  .link {
    margin-top: 20px;
    img {
      width: 20px;
      height: 20px;
      background-size: 100% 100%;
      margin: 5px;
    }
  }
}
</style>
