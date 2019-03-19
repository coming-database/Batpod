import React from 'react'
import PropTypes from 'prop-types'
import { Tag, Intent } from '@blueprintjs/core'

export default function FilledTag({ filledCount, totalCount }) {
  return (
    <Tag intent={filledCount === totalCount ? Intent.SUCCESS : Intent.DANGER}>
      {filledCount} / {totalCount}
    </Tag>
  )
}

FilledTag.propTypes = {
  filledCount: PropTypes.number.isRequired,
  totalCount: PropTypes.number.isRequired
}
