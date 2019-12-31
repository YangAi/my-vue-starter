import dayjs from 'dayjs'
import { isNumber } from 'lodash'
import utils from '@utils/client'
import i18n from '@/locales'

export default {
  isRequired: value => !!value || i18n.t('validation.isRequired'),
  isNumber: value => isNumber(value) || i18n.t('validation.isNumber'),
  isCountMatch: (value, count) => value.length === count || i18n.t('validation.isCountMatch'),
  isDate: value => dayjs(value, utils.inputFormat.date).format(utils.inputFormat.date) === value || i18n.t('validation.isDate'),
  isTime: value => dayjs(`2000-01-01 ${value}`, utils.inputFormat.time).format(utils.inputFormat.time) === value || i18n.t('validation.isTime'),
  isMax: (value, max) => isNumber(value) && isNumber(max) ? (value <= max || i18n.t('validation.isMax')) : i18n.t('validation.isNumber'),
  isMin: (value, min) => isNumber(value) && isNumber(min) ? (value >= min || i18n.t('validation.isMin')) : i18n.t('validation.isNumber'),
  isInRange: (value, min, max) => isNumber(value) && isNumber(min) && isNumber(max) ? ((value >= min && value <= max) || i18n.t('validation.isInRange')) : i18n.t('validation.isNumber')
}
