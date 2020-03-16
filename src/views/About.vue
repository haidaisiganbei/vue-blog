<template>
  <!-- <div class="about">
    <h1>This is an about page</h1> -->
  <VueDPlayer id="dplayer" ref="dplayer"  @play="play" :video="video"></VueDPlayer>
  <!-- </div> -->
</template>
<script>
import VueDPlayer from 'vue-dplayer'
export default {
  data () {
    return {
        video: {
          url: "../assets/mp4/demo.mp4",
          pic:"../assets/img/233.jpg"
        }
    }
  },
  components: {
     VueDPlayer
  },
  methods: {
    play () {
      console.log('play callback')
    }
  },
}
</script>
<style scoped>
</style>