<template>
  <v-container>
      <v-form
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
        @click="validate"
      >
        Validate
      </v-btn>

      <v-btn
        color="error"
        class="mr-4"
        @click="reset"
      >
        Reset Form
      </v-btn>

      <v-btn
        color="warning"
        @click="resetValidation"
      >Reset Validation
      </v-btn>
      <v-btn
        color="warning"
        @click="carregaUsuarios"
      >Carrega Usuários
      </v-btn>
    </v-form>
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
  }
</script>
