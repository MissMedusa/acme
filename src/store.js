import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router.js'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: null,
        errorMessage: null
    },
    mutations: {
        authUser(state, userData) {
            state.user = userData
        },
        clearAuth(state) {
            state.user = null
        },
        setErrorMessage(state, errorMessage) {
            state.errorMessage = errorMessage
        }
    },
    actions: {
        /*signUp ({commit}, authData) {
          axios.post('https://us-central1-ria-server-b1103.cloudfunctions.net/authenticate', {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true
          })
            .then(res => {
              console.log(res)
               localStorage.setItem('token', res.data.idToken)
              localStorage.setItem('userId', res.data.localId)
              commit('authUser', {
                token: res.data.idToken,
                userId: res.data.localId
              })
            
              router.push("/loggedin")
            })
            .catch(error => console.log(error))
        },*/
        login({ commit }, authData) {
            axios.post('https://us-central1-ria-server-b1103.cloudfunctions.net/authenticate',
                {
                    data: {
                        email: authData.email,
                        password: authData.password
                    }
                }
            )
                .then(res => {
                    console.log(res)
                    if (res.data.result.error == 'Unknown user') {
                        commit('setErrorMessage', 'Unknown user')
                        alert('Wrong credentials!')
                    } else {
                        commit('authUser', res.data)
                        router.push('/loggedin')
                    }
                })
                .catch(error => console.log(error))
        }
    },
    /*logOut ({commit}) {
      commit('clearAuth')
      localStorage.removeItem('token')
      localStorage.removeItem('userId')
      router.replace('/')
    },
    AutoLogin ({commit}) {
      const token = localStorage.getItem('token')
      if (!token) {
        return
      }
      const userId = localStorage.getItem('userId')
      commit('authUser', {
        token: token,
        userId: userId
      })
    }
  },*/
    getters: {
        user(state) {
            return state.user
        },
        ifAuthenticated(state) {
            return state.idToken !== null
        }
    }
})