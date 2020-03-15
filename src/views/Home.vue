<template>
  <div class="home">
    <!-- <Nav></Nav>
    <router-link to="/about">关于我</router-link>-->
    <div class="blogs">
      <BlogItem v-for="(blog,index) in blogs"  :key="index" :info="blog"></BlogItem>
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
  data() {
    return {
      blogs: [
        {
          date: "2020.03.14",
          title: "this is my first blog"
        },
        {
          date: "2020.03.14",
          title:
            "this is my first blogthis is my first blogthis is my first blog "
        },
        {
          date: "2020.03.14",
          title: "this is my first blog"
        }
      ]
    };
  },
  beforeCreate(){

  }
};
</script>
<style lang="less" scoped>
.home {
  text-align: center;
  .blogs {
    width: 700px;
    margin: auto;
  }
}
</style>>

