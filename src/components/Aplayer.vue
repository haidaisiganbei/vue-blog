<template>
  <div class="music">
    <Aplayer fixed  :music="music" :list="list" />
  </div>
</template>

<script>
import Aplayer from "vue-aplayer";
export default {
  data() {
    return {

      music: {
        title: "浪客剑心 Departure",
        artist: "日本ACG",
        src: "http://blog-lin.oss-cn-shenzhen.aliyuncs.com/mp3/1.mp3",
        pic: "http://blog-lin.oss-cn-shenzhen.aliyuncs.com/mp3/logo/1267.jpg"
      },
      list: [
        {
          title: "浪客剑心 Departure",
          artist: "日本ACG",
          src: "http://blog-lin.oss-cn-shenzhen.aliyuncs.com/mp3/1.mp3",
          pic: "http://blog-lin.oss-cn-shenzhen.aliyuncs.com/mp3/logo/1267.jpg"
        },
        {
          title: "永远同在 八音盒",
          artist: "日本ACG",
          src: "http://blog-lin.oss-cn-shenzhen.aliyuncs.com/mp3/2.mp3",
          pic: "http://blog-lin.oss-cn-shenzhen.aliyuncs.com/mp3/logo/1267.jpg"
        }
      ]
    };
  },
  components: {
    Aplayer
  }
};
</script>

<style>
</style>
