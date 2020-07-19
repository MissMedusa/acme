<template>
  <mdb-row class="row d-flex h-100 w-100 justify-content-flex-start align-items-center">  
    <LogInCard />
    <SignUpText />
  </mdb-row>
</template>

<script>
import { mdbRow } from 'mdbvue';
import LogInCard from './LogInCard.vue';
import SignUpText from './SignUpText.vue';

export default {
  name: "LogIn",
  components: {      
      mdbRow,
      LogInCard,
      SignUpText     
    }
};
</script>


<style scoped>
.row {
  margin: 0px;
}
</style>
