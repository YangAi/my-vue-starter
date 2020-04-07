<template>
  <v-checkbox v-bind="$attrs"
              :field="field"
              v-model="innerValue" />
</template>

<script>
import baseMixins from './baseMixins'

export default {
  name: 'CheckboxField',
  mixins: [baseMixins]
}
</script>

<style lang="scss" scoped>

</style>
