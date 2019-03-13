import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import store from './stores/common'

import App from './components/App'

ReactDOM.render(
  <Provider {...store}>
    <App />
  </Provider>,
  document.querySelector('#app')
)
