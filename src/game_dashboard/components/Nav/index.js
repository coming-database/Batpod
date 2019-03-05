import React from 'react'
import {
  Alignment,
  Button,
  Classes,
  H5,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
  Switch,
  InputGroup
} from '@blueprintjs/core'
import classNames from 'classnames'

import style from './index.less'

export default function Nav() {
  return (
    <div>
      <Navbar className={classNames(style.nav, Classes.DARK)}>
        <NavbarGroup align={Alignment.LEFT}>
          <NavbarHeading>Blueprint</NavbarHeading>
          <NavbarDivider />
          <Button
            className={classNames(Classes.MINIMAL, Classes.INTENT_PRIMARY)}
            icon="home"
            text="Home"
          />
        </NavbarGroup>
        <NavbarGroup align={Alignment.RIGHT}>
          <InputGroup />
        </NavbarGroup>
      </Navbar>
    </div>
  )
}
