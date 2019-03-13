import React from 'react'
import classNames from 'classnames'
import { observer, inject } from 'mobx-react'
import { Navbar, Classes, NavbarGroup, Alignment, Button } from '@blueprintjs/core'

import style from './index.less'

@inject('user')
@observer
export default class Layout extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {
      user: { email, logout }
    } = this.props
    return (
      <div>
        <Navbar className={classNames(style.nav, Classes.DARK)}>
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
