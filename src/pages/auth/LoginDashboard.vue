<template>
  <v-container fluid class="h-full p-0">
    <v-row no-gutters class="img-container bg-white">
      <v-col cols="12" md="6">
        <v-img src="https://area.sinaapp.com/bingImg/" class="img-container" />
      </v-col>
      <v-col cols="12" md="6">
        <v-container v-if="$route.query.message">
          <v-alert type="info">Please sign in first.</v-alert>
        </v-container>
        <v-container class="content-container">
          <h1 class="display-1 mb-8">Sign In</h1>
          <v-form ref="form" class="mb-4" style="max-width: 300px">
            <v-text-field v-model="form.username" label="Username" :rules="[rules.isRequired]" />
            <v-text-field v-model="form.password" label="Password"
                          :type="showPassword ? 'text' : 'password'"
                          :append-icon="showPassword ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
                          @click:append="showPassword = !showPassword"
                          :rules="[rules.isRequired]" />
          </v-form>
          <v-btn elevation="0" @click.native="submit" color="primary" :loading="loading">Submit</v-btn>
          <router-link :to="{'name': 'Home.Index'}" class="caption absolute bottom-0 flex items-center text-gray-700 mb-8"><v-icon small class="mr-2 text-gray-700">mdi-arrow-left</v-icon> Back to Homepage</router-link>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import rules from '@utils/validation'
export default {
  name: 'Login',
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
