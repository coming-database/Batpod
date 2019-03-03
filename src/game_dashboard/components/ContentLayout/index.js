import React from "react";
import { Tabs, Tab, Card } from "@blueprintjs/core";
import classNames from "classnames";

import style from "./index.less";

export default class ContentLayout extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { className = "", children, tabs = [] } = this.props;
    return (
      <div className={classNames(className)}>
        <Card
          className={classNames(
            tabs && tabs.length ? style.headerWithTabs : style.header
          )}
        >
          <h1 className={style.title}>Hello World</h1>
          {tabs && !!tabs.length && (
            <Tabs>
              {tabs.map(({ key, title }) => {
                return <Tab id={key} title={title} />;
              })}
            </Tabs>
          )}
        </Card>
        {children}
      </div>
    );
  }
}
