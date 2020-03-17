<template>
  <div class="item" @click="click">
    <div class="date">{{info.date}}</div>
    <div class="title">{{info.title}}</div>
  </div>
</template>

<script>
export default {
  props: {
    info: Object
  },
  data() {
    return {};
  },
  components: {},
  methods:{
    click(){
      // this.$router.push("/detail?id="+this.info.id)
      this.$router.push({
        // path:'detail',
        name:"detail",
        query:{
          id:this.info.id
        }
      })
    }
  }
};
</script>


<style lang="less" scoped>
.item {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 20px 0;
  border-bottom: 1px solid #DCDFE6;
  .date {
    font-size: 20px;
    color: #999;
    width: 200px;
  }
  .title {
    color: #444;
    font-size: 22px;
    width: 400px;
    text-align: left;
  }
}
</style>
