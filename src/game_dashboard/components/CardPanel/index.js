import React from "react";
import { Card } from "@blueprintjs/core";
import { Grid, Row, Col } from "react-flexbox-grid";

import GameCard from "../GameCard";

import style from "./index.less";

export default class CardPanel extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={style.panel}>
        <Grid fluid>
          <Row>
            <Col md={3}>
              <GameCard />
            </Col>
            <Col md={3}>
              <GameCard />
            </Col>
            <Col md={3}>
              <GameCard />
            </Col>
            <Col md={3}>
              <GameCard />
            </Col>
            <Col md={3}>
              <GameCard />
            </Col>
            <Col md={3}>
              <GameCard />
            </Col>
            <Col md={3}>
              <GameCard />
            </Col>
            <Col md={3}>
              <GameCard />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
