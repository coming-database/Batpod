import React from 'react'
import { Button, ButtonGroup, Tooltip, Position } from '@blueprintjs/core'
import { Grid, Row, Col } from 'react-flexbox-grid'

import GameCard from '../GameCard'

import style from './index.less'

export default function CardPanel() {
  return (
    <div className={style.panel}>
      <div className={style.controller}>
        <ButtonGroup className={style.dateFilter}>
          <Button>This Month</Button>
          <Button>Next Month</Button>
          <Button>This Year</Button>
        </ButtonGroup>
        <ButtonGroup className={style.layoutSelector}>
          <Tooltip content="Grid" position={Position.BOTTOM}>
            <Button icon="layout-grid" active />
          </Tooltip>
          <Tooltip content="List" position={Position.BOTTOM}>
            <Button icon="list" />
          </Tooltip>
        </ButtonGroup>
      </div>
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
  )
}
