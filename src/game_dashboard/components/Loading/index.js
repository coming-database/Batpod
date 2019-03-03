import React from "react";
import { ProgressBar } from "@blueprintjs/core";

import style from "./index.less";

export default class Loading extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={style.container}>
        <ProgressBar className={style.loading} />
      </div>
    );
  }
}
