import Resource from '@preset/services/api/resource'
import config from '@config'

let resource = {
  me: new Resource('/me')
  // events: new Resource('/events')
}

resource[config.authResource] = new Resource('/' + config.authResource)

export default resource