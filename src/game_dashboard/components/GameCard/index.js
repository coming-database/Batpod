import React from 'react'
import { Card, Button, ButtonGroup } from '@blueprintjs/core'
// import AwesomeIcon from '../AwesomeIcon'

import style from './index.less'
import demoImage from './demo-coming.jpg'

export default function GameCard() {
  return (
    <Card className={style.card} interactive>
      {/* <div className={style.releaseDate}>
          <Icon icon="calendar" className={style.icon} />
          <span>December 7, 2018</span>
        </div> */}
      <div className={style.imageCover}>
        <img src={demoImage} alt="" width="100%" />
      </div>
      <div className={style.desc}>
        <div>Resident Evil 2</div>
      </div>
      {/* <div>
        <AwesomeIcon type="steam" />
        <AwesomeIcon type="playstation" />
        <AwesomeIcon type="xbox" />
        <AwesomeIcon type="nintendo-switch" />
      </div> */}
      {/* <div className={style.actionGroup}>
        <ButtonGroup fill minimal>
          <Button className={style.actionBtn} icon="thumbs-up">
            123
          </Button>
        </ButtonGroup>
      </div> */}
    </Card>
  )
}
