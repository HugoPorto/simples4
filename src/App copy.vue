<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      >
      <div class="d-flex align-center">
        <v-img
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
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
        >
        <span class="mr-2">Logout</span>
        <!-- <v-icon>mdi-open-in-new</v-icon> -->
      </v-btn>
    </v-app-bar>

    <v-main>
      <!-- <router-view/> -->
       
    </v-main>
  </v-app>
</template>

<script>

require('./server')

import UsersService from '@/services/UsersService'

export default {
  name: 'App',

  data: () => ({
      users: null,
      valid: true,
      userName: '',
      userNameRules: [
        v => !!v || 'Usename é requerido',
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Senha é requerida',
      ]
  }),
   created() {
  },
   methods: {
   async carregaUsuarios() {
      console.log('Rota => App')
      this.users = (await UsersService.index()).data.result
      console.log(this.users)
    },
    validate () {
        console.log(this.$refs.form.validate())
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    },
    login () {

    },
  },
};
</script>
