import React from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import LoginForm from '../LoginForm'
import GameListContainer from '../GameListContainer'
import GameForm from '../GameForm'
import Layout from '../Layout'
import Demo from '../Demo'
import PageLoading from '../../../common/components/PageLoading'

import '../../../common/styles/main.css'
import './main.css'

@inject('user')
@observer
export default class App extends React.Component {
  render() {
    const {
      user: { email, isInitialLoginChecking }
    } = this.props

    if (isInitialLoginChecking) {
      return <PageLoading />
    }

    if (!email) {
      return <LoginForm />
    }

    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" exact component={GameListContainer} />
            <Route path="/create" component={GameForm} />
            <Route path="/demo" component={Demo} />
          </Switch>
        </Layout>
      </BrowserRouter>
    )
  }
}
