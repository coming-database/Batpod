import { observable, action } from 'mobx'
import { Toaster, ToasterPosition, Intent } from '@blueprintjs/core'

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
        Toaster.create().show({
          intent: Intent.PRIMARY,
          message: '登入成功'
        })
      })
      .catch(error => {
        this.isLogining = false
        Toaster.create().show({
          intent: Intent.DANGER,
          message: `登陆失败: ${error.toString()}`
        })
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
        Toaster.create().show({
          intent: Intent.PRIMARY,
          message: '登出成功,即将刷新页面'
        })
        setTimeout(() => {
          window.location.reload()
        }, 1000 * 1)
      })
      .catch(error => {
        this.isLogouting = false
        Toaster.create().show({
          intent: Intent.DANGER,
          message: `登出失败: ${error.toString()}`
        })
      })
  }
}
