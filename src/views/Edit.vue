<template>
  <div>
    <div class="title">写博客</div>
    <el-row>
      <el-form label-width="80px">
        <el-col :span="8">
          <el-form-item label="标题">
            <el-input
              v-model="title"
              placeholder="请输入内容"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span='8'>
          <el-form-item label="时间">
            <el-col :span='24'>
              <el-date-picker
                v-model="date"
                type="date"
                placeholder="选择日期"
                style="width: 100%;"
              ></el-date-picker>
            </el-col>
          </el-form-item>
        </el-col>
      </el-form>
    </el-row>

    <el-row>
      <mavon-editor
        ref=md
        :ishljs="true"
        @change="change"
        v-model="value"
        @imgAdd="$imgAdd"
      />
    </el-row>

    <el-button
      @click="submit"
      type="primary"
    >提交</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: "",
      date: '',
      value: "",
      content: ""
    };
  },
  components: {},
  mounted () {
    console.log(this);

  },
  methods: {
    change (value, render) {
      this.content = render;
    },
    // 绑定@imgAdd event
    $imgAdd (pos, $file) {
      // 第一步.将图片上传到服务器.
      var formdata = new FormData();
      formdata.append('file', $file);
      this.axios({
        url: '/upload_ali',
        method: 'post',
        data: formdata,
        headers: { 'Content-Type': 'multipart/form-data' },
      }).then((res) => {
        let url = res.data.data
        // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)
        // $vm.$img2Url 详情见本页末尾
        this.$refs.md.$img2Url(pos, url);
      })
    },
    submit () {
      let { title, date, content } = this
      let params = {
        title, date, content
      }
      this.axios({
        url: "/blog/add",
        method: "post",
        data: params,
        header: {
          "Content-Type": "application/json"
        }
      }).then(res => {
        this.$router.back()
      })
    }
  }
};
</script>

<style lang="less" scoped>
.title {
  font-size: 22px;
  padding: 10px;
}
</style>
