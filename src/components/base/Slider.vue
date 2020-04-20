<template>
  <div>
    <v-subheader class="tw-pl-0">{{ label }}</v-subheader>
    <v-slider v-bind="$attrs" v-on="$listeners">
      <template v-slot:append>
        <v-text-field
            disabled dense
            :value="$attrs.value"
            :suffix="unit"
            class="mt-0 pt-0"
            hide-details
            single-line
            type="number" style="width: 60px; position: relative; top: -4px" />
      </template>
    </v-slider>
  </div>
</template>

<script>
export default {
  name: 'Slider',
  props: {
    label: {
      type: String
    },
    unit: {
      type: String
    }
  }
}
</script>

<style scoped>

</style>
