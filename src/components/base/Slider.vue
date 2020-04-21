<template>
  <div>
    <v-subheader class="tw-pl-0">{{ label }}</v-subheader>
    <v-slider v-bind="$attrs" v-on="$listeners">
      <template v-slot:append>
        <g-number :number="$attrs.value" :unit="unit" class="tw-w-16 tw--mt-1" />
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
