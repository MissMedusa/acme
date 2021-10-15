<template>
  <mdb-col class="log-in-container text-md-left d-flex">
    <mdb-card id="classic-card">
      <mdb-card-body class="z-depth-2">
        <form class="needs-validation" novalidate @submit.prevent="checkForm">
          <h1 class="text-md-left">Welcome back to Acme.</h1>
          <h6 class="text-md-left">Log in by entering your credentials beow.</h6>
          <mdb-input id="validateEmail" label="Email" type="email" required v-model="email" />
          <mdb-input
            id="validatePassword"
            label="Password"
            type="password"
            v-model="password"
            required
          />
          <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="defaultUnchecked" />
            <label class="custom-control-label" for="defaultUnchecked">Remember me.</label>
          </div>
          <div class="text-md-right mt-4 black-text">
            <mdb-btn color="blue" type="submit">Log In</mdb-btn>
          </div>
        </form>
      </mdb-card-body>
    </mdb-card>
    <div class="footer text-center">
      <p>
        © 2021 Acme, Inc.
        <a href="#">Terms</a>
        <a href="#">Privacy</a>
      </p>
    </div>
  </mdb-col>
</template>

<script>
import { mdbCol, mdbBtn, mdbCard, mdbCardBody, mdbInput } from "mdbvue";

export default {
  name: "LogInCard",
  components: {
    mdbCol,
    mdbBtn,
    mdbCard,
    mdbCardBody,
    mdbInput
  },
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    //todo szinezés meg a többi .then-ből
    checkForm(event) {
      event.preventDefault();
      event.target.classList.add("was-validated");

      if (this.email && this.password) {
        const formData = {
          email: this.email,
          password: this.password
        };
        console.log(formData);
        this.$store.dispatch("login", {
          email: formData.email,
          password: formData.password
        });
      }
    }
  }
};
</script>

<style scoped>
.card {
  background-color: white;
  max-width: 85%;
  margin: auto;
}

h1,
h6,
a,
.btn {
  font-family: "Open Sans", sans-serif;
}

.btn {
  font-size: 14px;
  color: #ffffff;
}

a {
  font-size: 17px;
}

.footer a,
p {
  margin: 1vw;
  text-decoration: none;
  color: #a1a1a1;
}

h1 {
  color: #757575;
  font-size: 30px;
}

h6 {
  color: #a1a1a1;
  font-size: 19px;
}

.btn {
  text-transform: none;
  border-radius: 6%;
}

.custom-control-label {
  color: #a1a1a1;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 17px;
}

.footer {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 15px;
}

.log-in-container {
  flex-direction: column;
}

form {
  margin: 2vw;
}

@media (min-width: 617px) and (max-width: 764px) {
  .card {
    background-color: white;
    min-width: 50vw;
    margin: auto;
  }
}
</style>