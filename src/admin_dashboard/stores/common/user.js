import { observable, action } from 'mobx'
import toaster from '../../../common/util/toaster'

export default class User {
  @observable email = null

  @observable isInitialLoginChecking = true

  @observable isLogining = false

  @observable isLogouting = false

  constructor() {
    firebase.auth().onAuthStateChanged(user => {
      this.isInitialLoginChecking = false
      if (user) {
        this.email = user.email
      }
    })
  }

  @action
  login = (inputEmail, inputPassword) => {
    this.isLogining = true
    firebase
      .auth()
      .signInWithEmailAndPassword(inputEmail, inputPassword)
      .then(() => {
        this.isLogining = false
        toaster.success('Login Success')
      })
      .catch(error => {
        this.isLogining = false
        toaster.error(`Login Failed: ${error.toString()}`)
      })
  }

  @action
  logout = () => {
    this.isLogouting = true
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.isLogouting = false
        toaster.success('Logout Sucess')
        setTimeout(() => {
          window.location.reload()
        }, 1000 * 1)
      })
      .catch(error => {
        this.isLogouting = false
        toaster.error(`Logout Failed: ${error.toString()}`)
      })
  }
}
