<template>
  <v-slider v-bind="$attrs"
            :field="field"
            :min="field.min || 0"
            :max="field.max || 100"
            v-model="innerValue">
    <template v-slot:append>
      <text-field
        :field="field"
        v-model="innerValue"
        class="mt-0 pt-0"
        style="max-width: 80px"
        hide-details
        single-line
        type="number" />
    </template>
  </v-slider>
</template>

<script>
import baseMixins from './baseMixins'
import TextField from './TextField'

export default {
  name: 'SliderField',
  components: { TextField },
  mixins: [baseMixins]
}
</script>

<style lang="scss" scoped>

</style>
