<template>
  <section class="section-container">
    <v-row class="signin">
      <v-col cols="8" lg="8" class="left">
       <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp">
      </v-col>
      <v-col cols="4" lg="4" md="8"  class="offset-xl-1 my-lg-5 py-lg-5 right">
        <h2>LOGIN</h2>
        <v-form ref="loginForm">
          <v-row>
            <v-col cols="12" sm="12">
              <v-text-field v-model="form.email" class="input-group--focused" label="E-mail" :rules="emailRules">
              </v-text-field>
            </v-col>
            <v-col cols="12" sm="12">
              <v-text-field v-model="form.password" class="input-group--focused" label="Password" :rules="passwordRules"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" :type="showPassword ? 'text' : 'password'"
                hint="At least 8 characters" @click:append="showPassword = !showPassword"></v-text-field>
            </v-col>
            <v-col cols="12" sm="12">
              <v-btn color="success" @click="login">Login</v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-col>
    </v-row>
  </section>

</template>


<script lang='ts'>
import { defineComponent } from 'vue'
import form from 'vuejs-form'

export default defineComponent({
  name: 'LoginView',
  data: () => ({
    loading: false,
    form: {
      email: '',
      password: ''
    },
    showPassword: false,
    emailRules: [
      (v: any) => !!v || 'E-mail is required',
      (v: string) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    passwordRules: [
      (v: any) => !!v || 'Password is required',
      (v: any) => (v && v.length >= 8) || 'password must be greater than 8 characters',
    ]
  }),
  methods: {
    login() {
      let loginForm: form = this.$refs.loginForm;
      loginForm.validate();
    }
  }
})
</script>
<style>
.section-container {
  /* background: #fff; */
  width: 100%;
  background-color: #f9f9f9;
  box-shadow: 0 0 1px 1px rgba($color: #000000, $alpha: 0.1);
  box-sizing: border-box;
}

.signin {
  padding: 0;
  margin: 0 auto;
  min-height: 600px;
  box-shadow: 0 0 1px 1px rgba($color: #000000, $alpha: 0.1);
}

.left {
  padding: 30px;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  display: flex;
  color: #000;
  background-color: #f9f9f9;
  height: 100vh;
}

.right {
  padding: 30px;
  box-sizing: border-box;
  background: #000;
  color: #fff;
  height: 100vh;
}
</style>
