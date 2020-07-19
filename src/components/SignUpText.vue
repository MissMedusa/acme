<template>
  <mdb-col class="sign-up white-text text-md-left">
    <div class="sign-up-text-container">
      <div class="logo">
        <img
          srcset="../assets/acme@2x.png 182w, ../assets/acme@3x.png 273w"
          src="../assets/acme.png"
          alt="logo"
        />
      </div>
      <h2 class="h1-responsive font-weight-bold">You don't have an account?</h2>
      <h4 class="mb-4">You can sign up by clicking the button below.</h4>
      <mdb-btn @click="$router.push('/')" outline="white" color="white">Sign Up</mdb-btn>
    </div>
  </mdb-col>
</template>

<script>
import { mdbBtn, mdbCol } from "mdbvue";
export default {
  name: "SignUpText",
  components: {
    mdbBtn,
    mdbCol
  }
};
</script>


<style scoped>
.sign-up {
  display: flex;
  flex-direction: column;
}

h2,
.btn {
  font-family: "Open Sans", sans-serif;
}

h2 {
  font-size: 44px;
}

.btn {
  text-transform: none;
  border-radius: 6%;
}

h4 {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 30px;
}

.sign-up-text-container {
  width: 70%;
  margin: 0vw 7vw;
}

img {
  max-width: 273px;
  margin: 3vw 0vw;
}

@media (min-width: 768px) {
  .sign-up {
    background: linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url("https://i.imgur.com/ypqOXWs.jpg") no-repeat center center;
    background-size: cover;
    width: 50%;
    height: 100%;
    margin: auto;
  }
}
</style>
