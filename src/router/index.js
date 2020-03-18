import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import Nav from '@/components/Nav.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about/:id',
    component: () => import('../views/About.vue'),
    children: [
      {
        path: '',
        component: Nav,
      },{
        path: 'nav',
        component: Nav,
      }, {
        path: 'hello',
        component: HelloWorld,
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('../views/Detail.vue')
  },
  {
    path: '/edit',
    name: 'Edit',
    component: () => import('../views/Edit.vue'),
    meta:{
      requireAuth:true
    }
  },
  {
    path: '*',
    name: '404',
    component: () => import('../views/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  // const token = store.state.token?store.state.token:window.sessionStorage.getItem("token")
  if(to.meta.requireAuth){
    next("/login")
  }else{
    next()
  }
})

export default router
