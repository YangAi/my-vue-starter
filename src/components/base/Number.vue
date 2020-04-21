<template>
  <span class="number-wrapper tw-leading-none tw-whitespace-no-wrap">
    <span v-if="prefix" class="unit" :class="prefixClass">{{ prefix }}</span>
    <span class="number" :class="numberClass">
      {{ formattedValue }}
    </span>
    <span v-if="unit" class="unit" :class="unitClass">{{ unit }}</span>
  </span>
</template>

<script>
export default {
  name: 'Number',
  props: {
    number: {
      type: Number,
      required: true
    },
    prefix: {
      type: String,
      default: ''
    },
    unit: {
      type: String,
      default: ''
    },
    numberClass: {
      type: String,
      default: ''
    },
    unitClass: {
      type: String,
      default: ''
    },
    prefixClass: {
      type: String,
      default: ''
    }
  },
  computed: {
    formattedValue () {
      return this.number.toLocaleString()
    }
  }
}
</script>

<style scoped>
.number {
  font-family: "Crimson Text", sans-serif;
  font-size: 1.0em;
}
  .unit {
    font-size: 0.75em;
    font-weight: 500;
    opacity: 0.8
  }
</style>
