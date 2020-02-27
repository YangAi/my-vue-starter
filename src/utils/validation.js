import dayjs from 'dayjs'
import { isNumber } from 'lodash'
import utils from '@utils/client'
import i18n from '@/locales'

function isEmpty (value) {
  return (value === '') || (value === undefined)
}

export default {
  isRequired: value => !isEmpty(value) || i18n.t('validation.isRequired'),
  isNumber: value => isEmpty(value) || isNumber(parseFloat(value)) || i18n.t('validation.isNumber'),
  isCountMatch: (value, count) => isEmpty(value) || value.length === count || i18n.t('validation.isCountMatch'),
  isEmail: value => isEmpty(value) || utils.isEmail(value) || i18n.t('validation.isEmail'),
  isPassword: value => isEmpty(value) || utils.isPassword(value) || i18n.t('validation.isPassword'),
  isDate: value => isEmpty(value) || (dayjs(value, utils.inputFormat.date).format(utils.inputFormat.date) === value || i18n.t('validation.isDate')),
  isTime: value => isEmpty(value) || (dayjs(`2000-01-01 ${value}`, utils.inputFormat.time).format(utils.inputFormat.time) === value || i18n.t('validation.isTime')),
  isMax: (value, max) => isEmpty(value) || (isNumber(value) && isNumber(max) ? (value <= max || i18n.t('validation.isMax')) : i18n.t('validation.isNumber')),
  isMin: (value, min) => isEmpty(value) || (isNumber(value) && isNumber(min) ? (value >= min || i18n.t('validation.isMin')) : i18n.t('validation.isNumber')),
  isInRange: (value, min, max) => isEmpty(value) || (isNumber(parseFloat(value)) && isNumber(min) && isNumber(max) ? ((value >= min && value <= max) || i18n.t('validation.isInRange')) : i18n.t('validation.isNumber'))
}
