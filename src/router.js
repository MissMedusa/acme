import Vue from 'vue'
import VueRouter from 'vue-router'

import store from './store'

import LogIn from './components/LogIn.vue'
import SignUp from './components/SignUp.vue'
import LoggedIn from './components/LoggedIn.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/login', component:  LogIn },
  { path: '/', component:  SignUp },
  { path: '/loggedin', component:  LoggedIn,    
        beforeEnter (to, from, next) {
        if (store.state.user) {
            next()
        } else {
            next('/login')
        }
    }
  }
]

export default new VueRouter({mode: 'history', routes})