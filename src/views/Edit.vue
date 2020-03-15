<template>
  <div>
    写博客
    <!-- <VueMarkdown>this is the default slot</VueMarkdown> -->
    <div class="form">
    <el-form label-width="80px">
      <el-form-item label="标题" >
        <el-input v-model="title" placeholder="请输入内容"></el-input>
      </el-form-item>
      <el-form-item label="时间" >
        <el-col :span='24'>
          <el-date-picker v-model="date" type="date" placeholder="选择日期" style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>
    </el-form>
    </div>
    <mavon-editor :ishljs="true" @change="change" v-model="value" />
    <el-button @click="submit" type="primary">提交</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      date:'',
      value: "",
      content: ""
    };
  },
  components: {},
  mounted(){
    console.log(this);

  },
  methods: {
    change(value, render) {
      this.content = render;
    },
    submit() {
      let {title,date,content} = this
      let params = {
        title,date,content
      }
      console.log(params);

      this.axios({
        url:"/blog/add",
        method:"post",
        data:params,
        header:{
          "Content-Type":"application/json"
        }
      }).then(res=>{
        console.log(res);

      })
    }
  }
};
</script>

<style lang="less" scoped>
.form{
  width: 500px;
}
</style>
