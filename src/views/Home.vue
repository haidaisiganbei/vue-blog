<template>
  <div class="home">
    <div class="blogs">
      <BlogItem
        v-for="(blog,index) in blogs"
        :key="index"
        :info="blog"
      ></BlogItem>
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
        // {
        //   id: 1,
        //   date: "2020.03.14",
        //   title: "this is my first blog"
        // },
        // {
        //   id: 2,
        //   date: "2020.03.14",
        //   title:
        //     "this is my first blogthis is my first blogthis is my first blog "
        // },
        // {
        //   id: 3,
        //   date: "2020.03.14",
        //   title: "this is my first blog"
        // }
      ]
    };
  },
  methods: {
    
  },
  beforeCreate () {

  },
  mounted(){
    console.log(this.axios);
    
    let params = {
      page:1,
      size:10
    }
    this.axios({
      url:"/blog/list",
      method:"get",
    }).then(res=>{
      this.blogs = res.data.data
    })
   
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

