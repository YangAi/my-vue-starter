export default {
  login: {
    title: 'Dashboard Login',
    label: {
      account: 'Account',
      password: 'Password'
    },
    buttons: {
      login: 'Login',
      goBack: 'Go to front page'
    },
    wrong: 'Please enter your username and password.'
  },
  router: {
    noPermission: 'This account don\'t enough permissions.',
    loginFirst: 'Please sign in first.'
  },
  auth: {
    error: {
      required: 'Please enter all the required field.',
      phone: 'Please enter a valid phone number.',
      email: 'Please enter a valid email.',
      password: 'Please enter a valid password.'
    },
    welcomeBack: 'Welcome Back!',
    logout: 'logout finished.'
  },
  http: {
    error401: 'No permission, Please sign in again.',
    error403: 'You do not have permission for this action.',
    error500: 'There might be an server error, please contact us.',
    errorDefault: 'Connection error, please try again later.'
  },
  validation: {
    isRequired: 'This is a required field.',
    isNumber: 'This field must be a number.',
    isCountMatch: 'The length does not match.',
    isDate: 'Please enter a valid date.',
    isTime: 'Please enter a valid time.',
    isMax: 'The input is exceed the maximum limit.',
    isMin: 'The input is smaller the minimum limit.',
    isInRange: 'The input is not in a valid range.'
  }
}
