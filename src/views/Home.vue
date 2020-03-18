<template>
  <div>
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

export default {
  name: "Home",
  components: {
    HelloWorld,
    BlogItem,
    Nav
  },
  data () {
    return {
      blogs: [

      ]
    };
  },
  methods: {

  },
  created () {
    this.axios({
      url: "/blog/list",
      method: "get",
    }).then(res => {
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
</style>>

