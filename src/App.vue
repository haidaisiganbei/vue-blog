<template>
  <div id="app">
    <transition name="fade">
      <router-view />
    </transition>
      <Player></Player>

    <!-- <Aplayer /> -->

  </div>
</template>
<script>
import Aplayer from "@/components/Aplayer.vue";
import Player from 'zw-player'
export default {
  components: {
    Aplayer,Player
  },
  data() {
    return {};
  }
};
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
}
</style>
