import Vue from 'vue'
import VueRouter from 'vue-router'
import LogIn from './components/LogIn.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component:  LogIn }
]

export default new VueRouter({mode: 'history', routes})