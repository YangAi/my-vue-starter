<template>
  <base-text-field v-if="this.fields.type !== 'datetime'"
                v-bind="$attrs"
                v-model="innerValue"
                :label="fields.label"
                :prefix="fields.prefix || ''"
                :suffix="fields.suffix || ''"
                :hint="fields.hint || ''"
                :rules="fields.rules || []"
                :disabled="!!fields.disabled"
                @blur="fields.blur || null"/>
  <v-datetime-picker v-else
                     v-bind="$attrs"
                     v-model="innerValue"
                     :fields="fieldsChild" />
</template>

<script>
export default {
  name: 'BaseInputField',
  props: {
    value: {},
    fields: {
      type: Object,
      default: () => {
        return {
          type: 'string'
        }
      }
    }
  },
  created () {
    if (this.fields.type === 'datetime') {
      this.fieldsChild = this._.cloneDeep(this.fields)
      this.fieldsChild.type = 'string'
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
  data () {
    return {
      fieldsChild: []
    }
  }
}
</script>

<style scoped>
</style>
