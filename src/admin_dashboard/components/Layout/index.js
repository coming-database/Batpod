import React from 'react'
import PropTypes from 'prop-types'
import { withRouter, Link } from 'react-router-dom'
import classNames from 'classnames'
import { observer, inject } from 'mobx-react'
import { Navbar, Classes, NavbarGroup, Alignment, Button, ButtonGroup } from '@blueprintjs/core'

import style from './index.less'

@inject('user')
@withRouter
@observer
export default class Layout extends React.Component {
  reloadPage = () => {
    window.location.reload()
  }

  render() {
    const {
      user: { email, logout },
      history
    } = this.props
    return (
      <div>
        <Navbar className={classNames(style.nav, Classes.DARK)}>
          <NavbarGroup align={Alignment.LEFT}>
            <ButtonGroup>
              <Button icon="home">
                <Link to="/">Home</Link>
              </Button>
              <Button icon="plus">
                <Link to="/create">Create</Link>
              </Button>
              <Button icon="refresh" onClick={this.reloadPage}>
                Reload
              </Button>
            </ButtonGroup>
          </NavbarGroup>
          <NavbarGroup align={Alignment.RIGHT}>
            {email ? (
              <Button onClick={logout} icon="user">
                {email}
              </Button>
            ) : null}
          </NavbarGroup>
        </Navbar>
        <div className={style.content}>{this.props.children}</div>
      </div>
    )
  }
}
