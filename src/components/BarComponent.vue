<template>
  <v-app-bar 
        id="nav-bar"
        app
        color="primary"
        dark
      >
      <div class="d-flex align-center">
        <!-- <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        /> -->
      </div>

      <v-btn text @click="home">
        <span class="mr-2">Home</span>
      </v-btn>
      <v-btn text @click="logout">
        <span class="mr-2">PDV</span>
      </v-btn>
      <v-btn text @click="logout">
        <span class="mr-2">Vendas</span>
      </v-btn>
      <v-btn text @click="clients">
        <span class="mr-2">Clientes</span>
      </v-btn>
      <v-btn text @click="logout">
        <span class="mr-2">Cadastros</span>
      </v-btn>
      <v-btn text @click="logout">
        <span class="mr-2">Notas </span>
      </v-btn>
      <v-btn text @click="logout">
        <span class="mr-2">Relatórios</span>
      </v-btn>
      <v-btn text @click="logout">
        <span class="mr-2">Manual</span>
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn text @click="logout">
        <span class="mr-2">Logout</span>
      </v-btn>
    </v-app-bar>
</template>

<script>

export default {
  name: 'BarComponent',
   created() {
   },
  methods: {
      logout () {
        this.$router.push({ name: 'login' })
      },
      clients () {
        this.$router.push({ name: 'clients' })
      },
      home () {
        this.$router.push({ name: 'home' })
      },
    },
}
</script>

<style>
    #nav-bar {
        background: #1867C0;
        background: -webkit-linear-gradient(to right, #1867C0, #1697F6, #1867C0);
        background: linear-gradient(to right, #1867C0, #1697F6, #1867C0);
    }
</style>
