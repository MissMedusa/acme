<template>
  <mdb-row class="row d-flex h-100 w-100 justify-content-flex-start align-items-center">  
    <SignUpCard />
    <LogInText />
    
  </mdb-row>
</template>

<script>
import { mdbRow } from "mdbvue";
import SignUpCard from './SignUpCard.vue';
import LogInText from './LogInText.vue';

export default {
  name: "SignUp",
  components: {
    mdbRow,
    SignUpCard,
    LogInText
  },
  data() {
    return {}
  }
};
</script>

<style scoped>
.row {
  margin: 0px;
}
</style>