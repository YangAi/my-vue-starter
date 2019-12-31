<template>
  <v-container fluid class="tw-h-full tw-p-0">
    <v-app-bar color="transparent" absolute flat>
      <v-app-bar-nav-icon @click="$router.go(-1)">
        <v-icon color="white">mdi-chevron-left</v-icon>
      </v-app-bar-nav-icon>
    </v-app-bar>
    <v-row no-gutters class="tw-h-32 md:tw-h-full tw-bg-white">
      <v-col cols="12" md="6">
        <v-img src="https://source.unsplash.com/900x1600/?city" class="tw-h-32 md:tw-h-full bg-gray-100" />
      </v-col>
      <v-col cols="12" md="6">
        <v-container class="tw-mt-4 md:tw-mt-32 tw-p-8 lg:tw-pl-12">
          <h1 class="display-1 tw-mb-4">{{ $t('pages.login.title') }}</h1>
          <v-form ref="form" style="max-width: 300px">
            <v-text-field v-model="form.email"
                          :label="$t('pages.login.label.email')"
                          :rules="[rules.isRequired]"
                          @blur="emailCheck"/>
            <password-field v-model="form.password" :label="$t('pages.login.label.password')"
                            :rules="[rules.isRequired]" />
          </v-form>
          <v-btn elevation="0" @click="submit" color="primary" :loading="loading">{{ $t('actions.login') }}</v-btn>
          <div class="tw-absolute tw-bottom-0 tw-mb-4">
            <router-link :to="{name: 'Home.Index'}" class="caption tw-flex tw-items-center tw-text-gray-700">
              <v-icon small class="mr-2 tw-text-gray-700">mdi-arrow-left</v-icon>
              {{ $t('actions.goHome') }}
            </router-link>
          </div>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import rules from '@utils/validation'
import PasswordField from '../../components/inputFields/PasswordField'
export default {
  name: 'Login',
  components: { PasswordField },
  data () {
    return {
      visible: false,
      loading: false,
      showPassword: false,
      form: {
        email: '',
        password: ''
      },
      rules: rules
    }
  },
  methods: {
    emailCheck () {
      if (!this.$utils.isEmail(this.form.email)) return this.$toast.error('')
    },
    async submit () {
      if (!this.$refs.form.validate()) return this.$toast.error(this.$t('messages.auth.error.form'))
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
