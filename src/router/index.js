import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NewsList from '../views/NewsList.vue'
import NewsDetail from '../views/NewsDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/newslist',
    name: 'newslist',
    component: NewsList
  },
  {
    path: '/newsdetail',
    name: 'newsdetail',
    component: NewsDetail
  } // ,
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
