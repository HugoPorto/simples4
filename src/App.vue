<template>
  <v-app>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

require('./server')

export default {
  name: 'App',
  methods: {
      logout () {
        this.$router.push({ name: 'login' })
      },
    },
}
</script>
