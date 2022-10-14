<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="500">

    <v-card-title>Login</v-card-title>
    <v-form ref="form" class="pa-3">
      <v-text-field v-model="email" label="E-mail" required></v-text-field>
      <v-text-field v-model="password" label="Password" required></v-text-field>
      <v-btn color="success" @click="login">
        Login
      </v-btn>
    </v-form>

  </v-card>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'


export default defineComponent({
  name: 'LoginView',

  data() {
    return {
      loading: false,
      email: '',
      password: '',
    }
  },
  methods: {
    login() {

    }
  }
})
</script>
