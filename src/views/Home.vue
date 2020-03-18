<template>
  <div>
    <!-- <div class="music">
        <Aplayer
          autoplay
          :music="music"
          :list='list'
        />
      </div> -->
    <div class="name">es lin
    </div>
    <div class="link">
      <a href='https://github.com/haidaisiganbei'>
        <img src="../assets/github.png" />
      </a>
      <a href='https://weibo.com/3025005114/profile'>
        <img src="../assets/weibo.png" />
      </a>
      <a href="/edit">
        <img src="../assets/edit.png" />
      </a>
    </div>
    <div class="home">
      <div class="blogs">
        <BlogItem
          v-for="(blog,index) in blogs"
          :key="index"
          :info="blog"
        ></BlogItem>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import BlogItem from "@/components/BlogItem.vue";
import Nav from "@/components/Nav.vue";
import Aplayer from 'vue-aplayer'
import {getBlogs} from '@/api/blog'
export default {
  name: "Home",
  components: {
    HelloWorld,
    BlogItem,
    Nav,
    Aplayer
  },
  data () {
    return {
      blogs: [

      ],
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
    };
  },
  methods: {

  },
  created () {
    getBlogs().then(res=>{
      if(res.data.code==200){
        this.blogs = res.data.data
      }else{
        this.$router.replace("/login")
      }
    })

  }
};
</script>
<style lang="less" scoped>
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
.home {
  text-align: center;
  .blogs {
    width: 700px;
    margin: auto;
  }
}
  .music {
    position: fixed;
    right: 0;
    top: 30px;
    max-width: 400px;
  }
</style>>

