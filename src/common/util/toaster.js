import { Toaster, Intent } from '@blueprintjs/core'

const toaster = {
  success: message => {
    Toaster.create().show({
      intent: Intent.SUCCESS,
      message
    })
  },

  error: message => {
    console.error(message)
    Toaster.create().show({
      intent: Intent.DANGER,
      message
    })
  }
}

export default toaster
