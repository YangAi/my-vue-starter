<template>
  <v-text-field v-model="innerValue"
                v-bind="$attrs"
                :type="showPassword ? 'text' : 'password'"
                :append-icon="showPassword ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
                @click:append="showPassword = !showPassword"
                @blur="$emit('blur', innerValue)"
                @click="$emit('click', innerValue)"
                @click:append-outer="$emit('click:append-outer', innerValue)"
                @click:clear="$emit('click:clear', innerValue)"
                @click:prepend="$emit('click:prepend', innerValue)"
                @focus="$emit('focus', innerValue)"
                @keydown="$emit('keydown', innerValue)"
                @mousedown="$emit('mousedown', innerValue)"
                @mouseup="$emit('mouseup', innerValue)"/>
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
  },
  computed: {
    innerField () {
      const field = this.field
      field.type = this.showPassword ? 'text' : 'password'
      return field
    }
  }
}
</script>

<style scoped>

</style>
