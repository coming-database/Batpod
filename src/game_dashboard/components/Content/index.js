import React from "react";
import classNames from "classnames";

import style from "./index.less";

export default class Content extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { className = "", children } = this.props;
    return (
      <div className={classNames(style.content, className)}>{children}</div>
    );
  }
}
