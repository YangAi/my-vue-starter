import qs from 'qs'

export default {
  get isOffline () {
    return !navigator.onLine
  },
  get isWechat () {
    const ua = navigator.userAgent.toLowerCase()
    return ua.indexOf('micromessenger') !== -1
  },
  get isMobile () {
    return !!((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)))
  },
  isPhone (phone) {
    const reg = /^[1][0-9]{10}$/
    return reg.test(phone)
  },
  isEmail (email) {
    const reg = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/i
    return reg.test(email)
  },
  isPassword (password) {
    if (
      String(password).length < 6 ||
      String(password).length > 18 ||
      String(password) === '123456'
    ) {
      return false
    } else {
      return true
    }
  },
  isVerifyCode (code) {
    if (code && code.length !== 4) {
      return false
    } else {
      return true
    }
  },
  setRedirectUrl (params) {
    const baseUrl = '/redirect'
    // if (localStorage.token) {
    //   params = Object.assign(params, { token: localStorage.token })
    // }
    params = Object.assign(params, {
      previous_url: document.domain + window.location.pathname
    })
    const finalUrl = baseUrl + '?' + qs.stringify(params)
    return finalUrl
  },
  setGoIndex () {
    if (window.history.length <= 1 || document.referrer === '' || (document.referrer !== '' && !document.referrer.indexOf('lvxingshai.com'))) {
      if (location.href.indexOf('?') === -1) {
        window.location.href = location.href + '?goindex=true'
      } else if (location.href.indexOf('?') !== -1 && location.href.indexOf('goindex') === -1) {
        window.location.href = location.href + '&goindex=true'
      }
    }
  },
  getBetterNumber (number) {
    if (!number) return 0
    if (number < 1) return Math.round(number * 100, 2) + '%'
    number = Math.round(number)
    const numberLevel = Math.ceil(Math.log(number) / Math.log(10000))
    let topDigits = number.toString().length % 4
    if (topDigits === 0) topDigits = 4
    let output = ''
    const unit = ['', ' 万 ', ' 亿 ', ' 万亿 ']
    for (let i = 0; i < numberLevel; i++) {
      const numberPart = number.toString().substring(topDigits + (i - 1) * 4, topDigits + i * 4)
      if (parseInt(numberPart) === 0) continue
      output = output + number.toString().substring(topDigits + (i - 1) * 4, topDigits + i * 4) + unit[numberLevel - i - 1]
    }
    return output
  },
  getRandomImage (keyword, featured = true, size = false) {
    let url = 'https://source.unsplash.com/'
    if (featured) {
      url = url + 'featured/'
    }
    if (size) {
      url = url + size + '/'
    }
    url = url + '?sig=' + Math.round(Math.random() * 10000)
    if (keyword) {
      url = url + '&' + keyword
    }
    return url
  }
}
