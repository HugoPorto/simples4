<template>
  <v-app style="
    background: #1867C0;
    background: -webkit-linear-gradient(to right, #1867C0, #1697F6, #1867C0);
    background: linear-gradient(to right, #1867C0, #1697F6, #1867C0);
    ">
    <v-main>
      <login-component />
    </v-main>
  </v-app>
</template>
<script>
  import LoginComponent from '../components/LoginComponent'

  export default {
    name: 'LoginView',

    components: {
      LoginComponent,
    },
  }
</script>
