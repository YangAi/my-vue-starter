<template>
  <v-form ref="baseForm">
    <base-input-field v-for="field in fields"
                      :key="field.value"
                      v-bind="$attrs"
                      :disabled="readOnly || field.disabled"
                      v-model="innerValue[field.value]"
                      :field="field"
                      @blur="handle(field, 'blur')"
                      @click="handle(field, 'click')"
                      @click:append="handle(field, 'click:append')"
                      @click:append-outer="handle(field, 'click:append-outer')"
                      @click:clear="handle(field, 'click:clear')"
                      @click:prepend="handle(field, 'click:prepend')"
                      @focus="handle(field, 'focus')"
                      @keydown="handle(field, 'keydown')"
                      @mousedown="handle(field, 'mousedown')"
                      @mouseup="handle(field, 'mouseup')"
    />
  </v-form>
</template>

<script>
export default {
  name: 'BaseInputForm',
  props: {
    fields: {
      type: Array
    },
    value: {
      required: true
    },
    readOnly: {
      type: Boolean,
      default: false
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
    handle (field, action) {
      if (this._.isUndefined(field[action])) {
        this.$emit(`${field.value}.${action}`, this.innerValue[field.value])
      } else {
        field[action]()
      }
    }
  }
}
</script>

<style scoped>

</style>
