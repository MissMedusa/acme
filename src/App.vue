<template>
  <div id="app">
    <mdb-navbar class="nav-bar" dark>
      <img class="nav-logo" src="./assets/acme.png" alt="logo" />      
    </mdb-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import { mdbNavbar } from "mdbvue";
export default {
  components: {
    mdbNavbar
  },
  data() {
    return {};
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=swap");

html,
body {
  height: 100%;
  width: 100%;
}

.nav-bar {
  background-color: #4d7e9f;
  height: 7%;
  
}

.show-navbar {
      background: #4d7e9f;
      z-index: 100;

    }

.nav-logo  {
  margin: 0vw 1vw;
}

#app {
  height: 100%;
  background-color: #f7f7f7;
  overflow-y: auto;
}

@media (max-width: 768px) {
  #app {
    background: linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url("https://i.imgur.com/ypqOXWs.jpg")
    no-repeat center center;
    background-size: cover;
     
  }
  
  .nav-bar {
    margin-bottom: 10vw;
  }
  
}
</style>
