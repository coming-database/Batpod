import React from 'react'
import { ProgressBar } from '@blueprintjs/core'

import style from './index.less'

export default function Loading() {
  return (
    <div className={style.container}>
      <ProgressBar className={style.loading} />
    </div>
  )
}
