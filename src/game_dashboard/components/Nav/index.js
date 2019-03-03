import React from "react";
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
} from "@blueprintjs/core";
import classNames from "classnames";

import style from "./index.less";

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
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
            <Button className={Classes.MINIMAL} icon="document" text="Files" />
          </NavbarGroup>
          <NavbarGroup align={Alignment.RIGHT}>
            <Button className={Classes.MINIMAL} icon="user" />
            <Button className={Classes.MINIMAL} icon="notifications" />
          </NavbarGroup>
          <NavbarGroup align={Alignment.RIGHT}>
            <InputGroup />
            <NavbarDivider />
          </NavbarGroup>
        </Navbar>
      </div>
    );
  }
}
