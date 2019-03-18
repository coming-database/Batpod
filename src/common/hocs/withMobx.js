import { mapProps } from 'recompose'

export default function(store) {
  return mapProps(() => ({
    store
  }))
}
