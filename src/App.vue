<template>
  <div id="app">
    <!-- <div class="music">
        <Aplayer
          autoplay
          :music="music"
          :list='list'
        />
      </div>
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
    </div>-->
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>
<script>
import Aplayer from "vue-aplayer";
export default {
  components: {
    Aplayer
  },
  data() {
    return {};
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
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

}
</style>
