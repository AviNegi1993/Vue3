<template>
  <v-app :theme="theme">
    <v-app-bar v-if="isAuthenticated">
      <v-spacer></v-spacer>
      <v-btn
      :prepend-icon="'mdi-account'"
      @click="logout"
      >Logout</v-btn>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters, mapMutations } from 'vuex'

export default defineComponent({
  name: 'App',
  data () {
    return {
      theme: 'light',
      authenticated: localStorage.getItem('token')
    }
  },
  computed: {
    ...mapGetters('auth', ['isAuthenticated'])
  },
  methods: {
    ...mapMutations('auth', ['removeAuth']),
    logout() {
      this.removeAuth();
      this.$router.push('/');
    }
  }
})
</script>
