import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import style from './index.less'

import originIconImage from './origin.png'
import epicIconImage from './epic.png'

export default function AwesomeIcon(props) {
  const { type = '', prefix = 'fab' } = props

  if (type.toLowerCase() === 'origin') {
    return <img alt="origin icon" src={originIconImage} className={style.imageIcon} />
  }

  if (type.toLowerCase() === 'epic') {
    return <img alt="epic icon" src={epicIconImage} className={style.imageIcon} />
  }

  return <i className={classNames(`${prefix} fa-${type}`, style.icon)} />
}

AwesomeIcon.propTypes = {
  type: PropTypes.string.isRequired,
  prefix: PropTypes.string
}

AwesomeIcon.defaultProps = {
  prefix: ''
}
