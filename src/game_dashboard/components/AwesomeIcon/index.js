import React from "react";
import classNames from "classnames";
import style from "./index.less";

export default class AwesomeIcon extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { type } = this.props;
    return <i className={classNames(`fab fa-${type}`, style.icon)} />;
  }
}
