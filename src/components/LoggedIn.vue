<template>
  <mdb-alert color="dark">
    <h4 class="alert-heading">You logged in!</h4>
    <p>Amazing!</p>
    <hr>
    <p class="mb-0">You can't log out yet.</p>
  </mdb-alert>
</template>

<script>
import { mdbAlert } from 'mdbvue';

export default {
  name: "LoggedIn",
  components: {      
      mdbAlert
    }
};
</script>

<style scoped>
 .alert-dark {
   margin: 10vw;
   color: white;
   background-color: #4d7e9f;
   border: none;
 }
</style>