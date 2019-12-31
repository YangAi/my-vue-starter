<template>
  <v-text-field v-model="innerValue"
                v-bind="$attrs"
                :type="showPassword ? 'text' : 'password'"
                :append-icon="showPassword ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
                @click:append="showPassword = !showPassword" />
</template>

<script>
import baseMixins from './baseMixins'

export default {
  name: 'PasswordField',
  mixins: [baseMixins],
  data () {
    return {
      showPassword: false
    }
  }
}
</script>

<style scoped>

</style>
