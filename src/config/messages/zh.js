export default {
  login: {
    title: '登录/注册',
    label: {
      account: '账号',
      password: '密码'
    },
    buttons: {
      login: '登录',
      goBack: '返回首页'
    },
    wrong: '请输入正确的账号和密码。'
  },
  router: {
    noPermission: '没有足够权限。',
    loginFirst: '请先完成登录。'
  },
  auth: {
    error: {
      required: '请输入账号和密码。',
      phone: '请输入有效的手机号。',
      email: '请输入有效的邮箱。',
      password: '请输入有效的密码。'
    },
    welcomeBack: '登录成功，欢迎回来。',
    logout: '退出成功!'
  },
  http: {
    error401: '无权访问，请重新登录。',
    error403: '您没有此操作权限！',
    error500: '服务器出了点小问题，请联系技术支持！',
    errorDefault: '连接错误，请稍后再试'
  },
  validation: {
    isRequired: '此项不能为空。',
    isNumber: '此项必须为数字。',
    isCountMatch: '长度不相符。',
    isDate: '不是有效日期。',
    isTime: '不是有效时间',
    isEmail: '',
    isMax: 'The input is exceed the maximum limit.',
    isMin: 'The input is smaller the minimum limit.',
    isInRange: 'The input is not in a valid range.'
  }
}
