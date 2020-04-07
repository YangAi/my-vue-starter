/* eslint-disable no-unused-vars */
import Vue from 'vue'
import baseMixins from './inputFields/baseMixins'
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

const components = {
  CheckboxField,
  DateField,
  DatetimeField,
  RichtextField,
  SelectField,
  SliderField,
  TextareaField,
  TextField,
  TimeField,
  PasswordField
}

export default Vue.component('CrudInputField', {
  mixins: [baseMixins],
  props: {
    forFilter: {
      type: Boolean,
      default: false
    },
    original: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    formattedType () {
      return this._.toLower(this.field.type)
    },
    componentName () {
      // only for filter
      if (this.forFilter) {
        if (['checkbox', 'date', 'datetime', 'select', 'time'].includes(this.formattedType)) {
          return this._.capitalize(this.formattedType) + 'Field'
        }
        return 'TextField'
      }
      if (['checkbox', 'date', 'datetime', 'richtext', 'select', 'slider', 'textarea', 'time', 'password'].includes(this.formattedType)) {
        return this._.capitalize(this.formattedType) + 'Field'
      }
      if (this.formattedType === 'boolean') {
        return 'CheckboxField'
      }
      if (this.formattedType === 'html') {
        return 'RichtextField'
      }
      return 'TextField'
    }
  },
  render (h) {
    const self = this
    return h(components[this.componentName], {
      mixins: [baseMixins],
      on: {
        input: function (val) {
          self.$emit('input', val)
        },
        blur: function (val) {
          self.$emit('blur', val)
        },
        change: function (val) {
          self.$emit('change', val)
        },
        click: function (val) {
          self.$emit('click', val)
        },
        'click:append': function (val) {
          self.$emit('click:append', val)
        },
        'click:append-outer': function (val) {
          self.$emit('click:append-outer', val)
        },
        'click:clear': function (val) {
          self.$emit('click:clear', val)
        },
        'click:prepend': function (val) {
          self.$emit('click:prepend', val)
        },
        focus: function (val) {
          self.$emit('focus', val)
        },
        keydown: function (val) {
          self.$emit('keydown', val)
        },
        mousedown: function (val) {
          self.$emit('mousedown', val)
        },
        mouseup: function (val) {
          self.$emit('mouseup', val)
        },
        'update:errpr': function (val) {
          self.$emit('update:errpr', val)
        }
      },
      attrs: {
        filled: !this.original,
        dense: !this.original,
        ...this.field,
        label: this.field.text,
        ...this.$attrs,
        field: this.field,
        value: this.innerValue
      }
    })
  }
})
