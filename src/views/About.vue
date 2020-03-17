<template>
    <div>
      <h2>{{ $route.params.id }}</h2>
      <router-view></router-view>
    </div>
</template>
<script>
import VueDPlayer from 'vue-dplayer'

export default {
  data () {
    return {
    }
  },
  components: {
    VueDPlayer,
  },
  methods: {
  },
}
</script>
<style scoped>

</style>