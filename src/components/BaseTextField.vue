<template>
  <v-textarea v-if="textarea" v-model="textValue" v-bind="$attrs" />
  <v-text-field v-else v-model="textValue" v-bind="$attrs" />
</template>

<script>
export default {
  name: 'BaseTextField',
  props: ['value', 'textarea'],
  computed: {
    textValue: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>

<style scoped>

</style>
