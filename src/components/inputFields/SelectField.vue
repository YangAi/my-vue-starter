<template>
  <v-autocomplete v-bind="$attrs"
                  :field="field"
                  v-model="innerValue" />
</template>

<script>
import baseMixins from './baseMixins'

export default {
  name: 'SelectField',
  mixins: [baseMixins]
}
</script>

<style lang="scss" scoped>

</style>
