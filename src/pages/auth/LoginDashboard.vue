<template>
  <v-container fluid class="tw-h-full tw-p-0">
    <v-row no-gutters class="tw-h-20 md:tw-h-full tw-bg-white">
      <v-col cols="12" md="6">
        <v-img src="https://area.sinaapp.com/bingImg/" class="tw-h-40 md:tw-h-full" />
      </v-col>
      <v-col cols="12" md="6">
        <v-container class="tw-mt-8 md:tw-mt-40 tw-p-8 lg:tw-pl-12">
          <h1 class="display-1 tw-mb-2">{{ $config.messages.login.title }}</h1>
          <v-form ref="form" style="max-width: 300px">
            <v-text-field v-model="form.username" :label="$config.messages.login.label.account" :rules="[rules.isRequired]" />
            <v-text-field v-model="form.password" :label="$config.messages.login.label.password"
                          :type="showPassword ? 'text' : 'password'"
                          :append-icon="showPassword ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
                          @click:append="showPassword = !showPassword"
                          :rules="[rules.isRequired]" />
          </v-form>
          <v-btn elevation="0" @click="submit" color="primary" :loading="loading">{{ $config.messages.login.buttons.login }}</v-btn>
          <div class="tw-absolute tw-bottom-0 tw-mb-4">
            <a href="https://igws.indiana.edu/" class="caption tw-flex tw-items-center tw-text-gray-700">
              <v-icon small class="mr-2 tw-text-gray-700">mdi-arrow-left</v-icon>
              {{ $config.messages.login.buttons.goBack }}
            </a>
          </div>
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
      if (!this.$refs.form.validate()) this.$toast.error(this.$config.messages.login.wrong)
      this.loading = true
      try {
        const res = await this.$auth.login(this.form)
        if (res) {
          this.$router.push({ name: 'Home.Index' })
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
</style>
