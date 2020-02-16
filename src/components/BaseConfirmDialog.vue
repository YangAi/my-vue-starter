<template>
  <v-dialog v-model="innerValue" v-bind="$attrs" :max-width="maxWidth">
    <v-card>
      <v-card-title>{{ title }}</v-card-title>
      <v-card-text>{{ description }}</v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn @click="innerValue = false" text>取消</v-btn>
        <v-btn @click="confirm" text color="primary">确认</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'DialogConfirm',
  props: {
    value: {
      type: [Boolean, String]
    },
    id: {
      type: [String, Object, Number, Array],
      default: ''
    },
    title: {
      type: String
    },
    description: {
      type: String
    },
    maxWidth: {
      type: [String, Number],
      default: 600
    }
  },
  computed: {
    innerValue: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  },
  methods: {
    confirm () {
      this.$emit('confirm', this.id)
      this.innerValue = false
    }
  }
}
</script>

<style scoped>

</style>
