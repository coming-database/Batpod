import { mapProps } from 'recompose'

export default function(injectPropsFunc) {
  return mapProps(ownerProps => {
    return {
      store: injectPropsFunc(ownerProps),
      ...ownerProps
    }
  })
}
