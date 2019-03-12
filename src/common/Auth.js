// https://manage.auth0.com/#/applications/vgcVlKUBPSjwALrVSX3xp6DCZYc8y6Fw/quickstart
import auth0 from 'auth0-js'

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'comingdb.auth0.com',
    clientID: 'vgcVlKUBPSjwALrVSX3xp6DCZYc8y6Fw',
    redirectUri: 'http://localhost:8080',
    responseType: 'token id_token',
    scope: 'openid'
  })

  login() {
    this.auth0.authorize()
  }
}
