<template>
  <v-container>
    <v-card elevation="2" 
    class="mx-auto my-12"
    max-width="600"
    >
      <v-form
          class="pa-md-4 pa-sm-4 mx-lg-auto"
          ref="form"
          v-model="valid"
          lazy-validation
        >
        <v-text-field
          v-model="userName"
          :rules="userNameRules"
          label="Nome de Usuário"
          required
        ></v-text-field>

        <v-text-field
          v-model="password"
          :rules="passwordRules"
          label="Senha"
          type="password"
          required
        ></v-text-field>

        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="login"
        >
          Login
        </v-btn>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
  import UsersService from '@/services/UsersService'

  export default {
    name: 'LoginComponent',

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
     console.log('Rota => LoginView | LoginComponent')
   },
   methods: {
      async carregaUsuarios() {
          this.users = (await UsersService.index()).data.result
      },
      async login () {
        if(this.$refs.form.validate()){
          try {
            const response = await UsersService.login({
              userName: this.userName,
              password: this.password
            })

            if(response.data.result.length){
              this.$router.push({ name: 'home' })
            }

          } catch (error) {
            this.error = error.response.data.error
          }
        }
      },
    },
  }
</script>
