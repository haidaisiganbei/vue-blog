import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// markdown
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
// axios
// import axios from 'axios'
// import VueAxios from 'vue-axios'

// vue-particles
import VueParticles from 'vue-particles'

import VueDPlayer from 'vue-dplayer'
import 'vue-dplayer/dist/vue-dplayer.css'


Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueDPlayer)
Vue.use(mavonEditor)
Vue.use(VueParticles)
// Vue.use(VueAxios, axios)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
