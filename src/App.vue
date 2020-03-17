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
    </div> -->
    <transition>
      <router-view />
    </transition>
  </div>
</template>
<script>
import Aplayer from 'vue-aplayer'
export default {
  components: {
    Aplayer
  },
  data () {
    return {

      music: {
        title: '浪客剑心 Departure',
        artist: '日本ACG',
        src: 'http://blog-lin.oss-cn-shenzhen.aliyuncs.com/mp3/1.mp3',
        pic: 'http://blog-lin.oss-cn-shenzhen.aliyuncs.com/mp3/logo/1267.jpg'
      },
      list: [
        {
          title: '浪客剑心 Departure',
          artist: '日本ACG',
          src: 'http://blog-lin.oss-cn-shenzhen.aliyuncs.com/mp3/1.mp3',
          pic: 'http://blog-lin.oss-cn-shenzhen.aliyuncs.com/mp3/logo/1267.jpg'
        }, {
          title: '永远同在 八音盒',
          artist: '日本ACG',
          src: 'http://blog-lin.oss-cn-shenzhen.aliyuncs.com/mp3/2.mp3',
          pic: 'http://blog-lin.oss-cn-shenzhen.aliyuncs.com/mp3/logo/1267.jpg'
        },
      ]


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
  .music {
    position: fixed;
    right: 0;
    top: 30px;
    max-width: 400px;
  }
}
</style>
