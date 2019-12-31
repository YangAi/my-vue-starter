import dayjs from 'dayjs'
import { isNumber } from 'lodash'
import utils from '@utils/client'
import config from '@/config'

export default {
  isRequired: value => !!value || config.messages.validation.isRequired,
  isNumber: value => isNumber(value) || config.messages.validation.isNumber,
  isCountMatch: (value, count) => value.length === count || config.messages.validation.isCountMatch,
  isDate: value => dayjs(value, utils.inputFormat.date).format(utils.inputFormat.date) === value || config.messages.validation.isDate,
  isTime: value => dayjs(`2000-01-01 ${value}`, utils.inputFormat.time).format(utils.inputFormat.time) === value || config.messages.validation.isTime,
  isMax: (value, max) => isNumber(value) && isNumber(max) ? (value <= max || config.messages.validation.isMax) : config.messages.validation.isNumber,
  isMin: (value, min) => isNumber(value) && isNumber(min) ? (value >= min || config.messages.validation.isMin) : config.messages.validation.isNumber,
  isInRange: (value, min, max) => isNumber(value) && isNumber(min) && isNumber(max) ? ((value >= min && value <= max) || config.messages.validation.isInRange) : config.messages.validation.isNumber
}
