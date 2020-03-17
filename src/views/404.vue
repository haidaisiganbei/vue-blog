<template>
  <div class="error">
    <!-- <img
      src="https://blog-lin.oss-cn-shenzhen.aliyuncs.com/404.png"
      alt=""
    > -->
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang='less'>
.error {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-width: 1000px;
  z-index: -10;
  zoom: 1;
  background:url("https://blog-lin.oss-cn-shenzhen.aliyuncs.com/404.png");
  background-color: #fff;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center 0;
}
</style>