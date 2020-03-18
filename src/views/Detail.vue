<template>
  <div class="detail">
    <div>{{detail.title}}</div>
    <div>{{detail.date}}</div>
    <div
      class="content"
      v-html="detail.content"
    ></div>
  </div>
</template>

<script>
import { Loading } from 'element-ui';
export default {
  data () {
    return {
      detail: ""
    }
  },
  components: {

  },
  methods: {
    fetchData () {
      let loadingInstance = Loading.service({ fullscreen: true, text: "数据加载中" });
      this.axios.get("/blog/" + this.$route.query.id).then(res => {
        console.log(res);
        if (res.data.code == 200) {
          this.detail = res.data.data
          setTimeout(() => {
            loadingInstance.close();
          }, 2000);
        } else {
          loadingInstance.close();
          this.$message.error('加载失败');
          // this.$router.push('/404')
        }
      })
    }
  },
  created (e) {
    this.fetchData()

  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'fetchData'
  }
}
</script>

<style scoped lang='less'>
.detail {
  margin: auto;
  width: 50%;
  .content {
    text-align: left;
  }
}
</style>
