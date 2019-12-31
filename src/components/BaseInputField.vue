<template>
  <component :is="componentName"
             v-model="innerValue"
             :field="field"
             :label="field.text"
             :prefix="field.prefix || ''"
             :suffix="field.suffix || ''"
             :hint="field.hint || ''"
             :rules="field.rules || []"
             :disabled="!!field.disabled && !forFilter"
             v-bind="$attrs"
  />
</template>

<script>
import CheckboxField from './inputFields/CheckboxField'
import DateField from './inputFields/DateField'
import DatetimeField from './inputFields/DatetimeField'
import RichtextField from './inputFields/RichtextField'
import SelectField from './inputFields/SelectField'
import SliderField from './inputFields/SliderField'
import TextareaField from './inputFields/TextareaField'
import TextField from './inputFields/TextField'
import TimeField from './inputFields/TimeField'
import PasswordField from './inputFields/PasswordField'
import baseMixins from './inputFields/baseMixins'
export default {
  name: 'CrudInputField',
  props: {
    forFilter: {
      type: Boolean,
      default: false
    }
  },
  components: { TimeField, TextField, TextareaField, SliderField, SelectField, RichtextField, DatetimeField, DateField, CheckboxField, PasswordField },
  mixins: [baseMixins],
  computed: {
    formattedType () {
      return this._.toLower(this.field.type)
    },
    componentName () {
      // only for filter
      if (this.forFilter) {
        if (['checkbox', 'date', 'datetime', 'select', 'time'].includes(this.formattedType)) {
          return this.formattedType + '-field'
        }
        return 'text-field'
      }
      if (['checkbox', 'date', 'datetime', 'richtext', 'select', 'slider', 'textarea', 'time'].includes(this.formattedType)) {
        return this.formattedType + '-field'
      }
      if (this.formattedType === 'boolean') {
        return 'checkbox-field'
      }
      if (this.formattedType === 'html') {
        return 'richtext-field'
      }
      return 'text-field'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
