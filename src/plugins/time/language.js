import config from '@/config'
const language = config.language

function formatTime (time, type) {
  return ` ${time} ${type}${time > 1 ? 's' : ''}`
}

const languageText = {
  zh: {
    before: '前',
    after: '后',
    justNow: '刚刚',
    second: val => val + '秒',
    minute: val => val + '分钟',
    hour: val => val + '小时',
    day: val => val + '天'
  },
  en: {
    before: ' Ago',
    after: ' After',
    justNow: 'Just Now',
    second: val => formatTime(val, 'Second'),
    minute: val => formatTime(val, 'Minute'),
    hour: val => formatTime(val, 'Hour'),
    day: val => formatTime(val, 'Day')
  }
}

export default languageText[language] || languageText[0]
