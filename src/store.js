import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
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
        login({ commit }, authData) {
            axios.post('http://localhost:8081/login/',
                {
                    data: {
                        email: authData.email,
                        password: authData.password
                    }, headers: {
                      "Access-Control-Allow-Origin": "*",
                      "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
                      "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
                    }
                },
            )
                .then(res => {           
                    switch(res.data) {
                      case 'piros':
                        document.getElementById('app').style.backgroundColor = 'IndianRed';
                        break;
                      case 'zold':
                        document.getElementById('app').style.backgroundColor = 'DarkSeaGreen';
                        break;
                      case 'sarga':
                        document.getElementById('app').style.backgroundColor = 'Khaki';
                        break;
                      case 'kek':
                        document.getElementById('app').style.backgroundColor = 'LightSteelBlue';
                        break;
                      case 'fekete':
                        document.getElementById('app').style.backgroundColor = 'DarkSlateGrey';
                        break;
                      case 'feher':
                        document.getElementById('app').style.backgroundColor = 'FloralWhite';
                        break;
                    }
                    if (res.data.message == 'Wrong password!') {                      
                      alert('Wrong password!')
                      commit('setErrorMessage', 'Wrong password!')
                      setTimeout( () => window.location.href = 'http://www.police.hu', 3000)
                    } else if(res.data.message == 'Wrong email!'){
                      commit('setErrorMessage', 'Wrong email!')
                      alert('Wrong email!');                         
                    }
                })
                .catch(error => console.log(error, 'catch'))
        }
    },
    getters: {
        user(state) {
            return state.user
        },
        ifAuthenticated(state) {
            return state.idToken !== null
        }
    }
})