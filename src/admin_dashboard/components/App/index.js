import React from 'react'
import { Helmet } from 'react-helmet'
import { inject, observer } from 'mobx-react'

import LoginForm from '../LoginForm'
import GameList from '../GameList'
import Layout from '../Layout'
import Loading from '../../../common/components/Loading'

import '../../../common/styles/main.css'

@inject('user')
@observer
export default class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {
      user: { email, isInitialLoginChecking }
    } = this.props

    return (
      <Layout>
        <GameList />
      </Layout>
    )

    if (isInitialLoginChecking) {
      return (
        <Layout>
          <Loading />
        </Layout>
      )
    }

    if (!email) {
      return <LoginForm />
    }

    return (
      <Layout>
        <GameList />
      </Layout>
    )
  }
}
