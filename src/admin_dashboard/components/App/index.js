import React from 'react'
import { Helmet } from 'react-helmet'
import { inject, observer } from 'mobx-react'

import LoginForm from '../LoginForm'
import GameList from '../GameList'
import Layout from '../Layout'
import Loading from '../../../common/components/Loading'

import '../../../common/styles/main.css'
import style from './index.less'

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
          <div className={style.loadingContainer}>
            <Loading />
          </div>
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
