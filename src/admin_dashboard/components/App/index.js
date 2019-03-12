import React from 'react'
import { Helmet } from 'react-helmet'
import LoginForm from '../LoginForm'

import '../../../common/styles/main.css'

export default function App() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Admin</title>
      </Helmet>
      <div>
        <LoginForm />
      </div>
    </div>
  )
}
