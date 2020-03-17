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
export default {
  data () {
    return {
      detail: ""
    }
  },
  components: {

  },
  created (e) {
    this.axios.get("/blog/" + this.$route.query.id).then(res => {
      console.log(res);

      this.detail = res.data.data
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
