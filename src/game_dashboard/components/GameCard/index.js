import React from "react";
import {
  Card,
  Icon,
  Intent,
  IconNames,
  Button,
  ButtonGroup
} from "@blueprintjs/core";

import style from "./index.less";
import demoImage from "./demo-coming.jpg";

export default class GameCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Card className={style.card} interactive>
        {/* <div className={style.releaseDate}>
          <Icon icon="calendar" className={style.icon} />
          <span>December 7, 2018</span>
        </div> */}
        <div className={style.imageCover}>
          <img src={demoImage} width="100%" />
        </div>
        <div className={style.desc}>
          <div>Resident Evil 2</div>
        </div>
        <div className={style.actionGroup}>
          <ButtonGroup fill minimal>
            <Button className={style.actionBtn} icon="thumbs-up">
              123
            </Button>
            <Button className={style.actionBtn} icon="star-empty" />
          </ButtonGroup>
        </div>
      </Card>
    );
  }
}
