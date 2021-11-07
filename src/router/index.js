import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Match from '../views/Match.vue'
import Profile from '../views/Profile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/match',
    name: 'Match',
    component: Match
  },
  {
    path: '/last-viewed',
    name: 'LastViewed',
    component: Profile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
