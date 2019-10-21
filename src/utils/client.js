import _ from 'lodash'
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
  setFanliRatio (ratio) {
    if (!isNaN(ratio)) {
      return ratio >= 50 ? ratio / 100 + '元' : ratio + '%'
    } else {
      return '加载中'
    }
  },
  setSalePrice (price) {
    if (!isNaN(price)) {
      return price > 1 ? price + '元' : price * 10 + '折'
    } else {
      return '加载中'
    }
  },
  getOrderStatus (status) {
    switch (status) {
      case 0:
        return {
          name: 'tracked',
          description: '已追踪'
        }
      case 1:
        return {
          name: 'confirmed',
          description: '待完成'
        }
      case 2:
        return {
          name: 'finished',
          description: '已完成'
        }
      case -1:
        return {
          name: 'cancelled',
          description: '已取消'
        }
      default:
        return {
          name: 'loading',
          description: '加载中'
        }
    }
  },
  getFanliWebsitesByFilter (websites, category) {
    if (!websites) {
      return
    }
    switch (category) {
      case 'topBrand':
        return websites.filter(item => item.top_brand > 0)
      case 'flyer':
        return websites.filter(item => item.flyer > 0)
      case 'hotels':
        return websites.filter(item => item.category === '品类齐全' || item.category === '酒店集团' || item.category === '酒店预定' || item.category === '民宿预定')
      case 'flights':
        return websites.filter(item => item.category === '品类齐全' || item.category === '机票预定' || item.category === '航空公司')
      case 'fun':
        return websites.filter(item => item.category === '品类齐全' || item.category === '门票玩乐' || item.category === '旅行服务' || item.category === '度假线路' || item.category === '租车包车')
      case 'shopping':
        return websites.filter(item => item.category === '旅行生活')
      default:
        return websites
    }
  },
  getRandomImage () {},
  getLogoUrl (id, width = null, height = null) {
    let url = 'https://source.lvxingshai.com/style/img/logo/' + id + '.png'
    let size = ''
    if (!_.isNull(width)) {
      size = '/w/' + width
    }
    if (!_.isNull(height)) {
      size = size + '/h/' + height
    }
    if (size) {
      url = url + '?imageView2/1' + size
    }
    return url
  }
}
