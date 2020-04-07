<template>
  <main>
    <v-container v-if="$route.query.message">
      <v-alert type="warning">Please sign in first.</v-alert>
    </v-container>
    <v-container class="content-container">
      <v-sheet class="tw-m-auto" style="max-width: 360px">
        <h1 class="display-2 mb-8 tw-text-center">Sign In</h1>
        <v-form ref="form" class="mb-4">
          <text-field filled v-model="form.username" label="Username" :rules="[rules.isRequired]" />
          <password-field filled v-model="form.password" label="Password"
                          :rules="[rules.isRequired]" />
        </v-form>
        <v-card-actions>
          <span>Forgot Password?</span>
          <v-spacer />
          <v-btn large elevation="6" @click.native="submit" color="primary" :loading="loading">
            <span class="tw-capitalize tw-text-lg mx-4">Sign In</span>
          </v-btn>
        </v-card-actions>
      </v-sheet>
    </v-container>
  </main>
</template>

<script>
import rules from '@preset/utils/validation'
import PasswordField from '@preset/components/inputFields/PasswordField'
import TextField from '@preset/components/inputFields/TextField'
export default {
  name: 'Login',
  components: { TextField, PasswordField },
  data () {
    return {
      visible: false,
      loading: false,
      showPassword: false,
      form: {
        username: '',
        password: ''
      },
      rules: rules
    }
  },
  methods: {
    async submit () {
      if (!this.$refs.form.validate()) return this.$toast.error(this.$t('messages.auth.error.form'))
      this.loading = true
      try {
        const res = await this.$auth.login(this.form)
        if (res) {
          await this.$router.push({ name: 'Home.Index' })
        }
      } catch (e) {
        console.log(e)
      }
      this.loading = false
    }
  }
}
</script>

<style lang="scss" scoped>
  .img-container {
    @apply h-full;
  }
  .content-container {
    @apply mt-40 p-8;
  }
  .container + .content-container{
    @apply mt-24;
  }
  @media (max-width: 960px) {
    .img-container {
      @apply h-40;
    }
    .content-container {
      @apply mt-8 p-6;
    }
    .container + .content-container{
      @apply mt-0;
    }
  }
</style>
