import React from 'react'
import { inject, observer } from 'mobx-react'

import LoginForm from '../LoginForm'
import GameList from '../GameList'
import Layout from '../Layout'
import PageLoading from '../../../common/components/PageLoading'

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

    if (isInitialLoginChecking) {
      return (
        <Layout>
          <PageLoading />
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
