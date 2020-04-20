<template>
  <v-btn :outlined="outlined" v-bind="$attrs" v-on="$listeners">
    <template v-for="(slotContent, slot) of $slots" v-slot:[slot]>
      <slot :name="slot" />
    </template>
  </v-btn>
</template>

<script>
export default {
  name: 'Btn',
  props: {
    outlined: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>

</style>
