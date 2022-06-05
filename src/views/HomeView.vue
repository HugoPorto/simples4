<template>
  <v-app>
    <v-main>
      <bar-component/>
      <home-component />
    </v-main>
  </v-app>
</template>

<script>
  import HomeComponent from '../components/HomeComponent'
  import BarComponent from '../components/BarComponent'

  export default {
    name: 'Home',

    components: {
      HomeComponent,
      BarComponent
    },
  }
</script>
