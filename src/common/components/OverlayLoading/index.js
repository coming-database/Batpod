import React from 'react'
import PropTypes from 'prop-types'
import { Overlay, ProgressBar } from '@blueprintjs/core'

import style from './index.less'

export default function OverlayLoading({ isOpen = false }) {
  return (
    <Overlay isOpen={isOpen} className={style.container}>
      <ProgressBar className={style.bar} />
    </Overlay>
  )
}

OverlayLoading.propTypes = {
  isOpen: PropTypes.bool
}

OverlayLoading.defaultProps = {
  isOpen: false
}
