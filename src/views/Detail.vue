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
  created (e) {
    let loadingInstance = Loading.service({ fullscreen: true, text: "数据加载中" });
    this.axios.get("/blog/" + this.$route.query.id).then(res => {
      console.log(res);
      this.detail = res.data.data
      setTimeout(() => {
        loadingInstance.close();
      }, 2000);
    })
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
