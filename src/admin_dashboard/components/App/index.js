import React from 'react'
import { Helmet } from 'react-helmet'
import LoginForm from '../LoginForm'

import '../../../common/styles/main.css'

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    console.log(user)
  } else {
    // // User is signed in.
    // var displayName = user.displayName;
    // var email = user.email;
    // var emailVerified = user.emailVerified;
    // var photoURL = user.photoURL;
    // var isAnonymous = user.isAnonymous;
    // var uid = user.uid;
    // var providerData = user.providerData;
  }
})

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
