import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'task',
    component: resolve => require(["@/views/task.vue"], resolve)
  },
  {
    path: '/pedding',
    name: 'pedding',
    component: resolve => require(["@/views/pedding.vue"], resolve)
  },
  {
    path: '/data',
    name: 'data',
    component: resolve => require(["@/views/data.vue"], resolve)
  },
  {
    path: '/user',
    name: 'user',
    component: resolve => require(["@/views/user.vue"], resolve)
  },
  {
    path: '/musicPlayer',
    name: 'musicPlayer',
    component: resolve => require(["@/views/musicPlayer.vue"], resolve)
  },
  {
    path: '/alreadyDone',
    name: 'alreadyDone',
    component: resolve => require(["@/views/alreadyDone.vue"], resolve)
  },
  {
    path: '/ongoingTasks',
    name: 'ongoingTasks',
    component: resolve => require(["@/views/ongoingTasks.vue"], resolve)
  },
  {
    path: '/upcomingTasks',
    name: 'upcomingTasks',
    component: resolve => require(["@/views/upcomingTasks.vue"], resolve)
  },
  {
    path: '/timer',
    name: 'timer',
    component: resolve => require(["@/views/timer.vue"], resolve)
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router