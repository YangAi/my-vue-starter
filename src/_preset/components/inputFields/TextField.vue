<template>
  <v-text-field v-bind="$attrs"
                :type="innerType"
                v-model="innerValue"
                @blur="$emit('blur', innerValue)"
                @click="$emit('click', innerValue)"
                @click:append="$emit('click:append', innerValue)"
                @click:append-outer="$emit('click:append-outer', innerValue)"
                @click:clear="$emit('click:clear', innerValue)"
                @click:prepend="$emit('click:prepend', innerValue)"
                @focus="$emit('focus', innerValue)"
                @keydown="$emit('keydown', innerValue)"
                @mousedown="$emit('mousedown', innerValue)"
                @mouseup="$emit('mouseup', innerValue)"
  />
</template>

<script>
import baseMixins from './baseMixins'
export default {
  name: 'TextField',
  mixins: [baseMixins],
  computed: {
    innerType () {
      const map = {
        number: 'number',
        decimal: 'number',
        integer: 'number',
        email: 'email'
      }
      return this.field ? map[this.field.type] || 'text' : 'text'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
