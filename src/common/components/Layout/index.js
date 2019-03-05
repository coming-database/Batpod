import React from 'react'
import PropTypes from 'prop-types'
import style from './index.less'

export default function Layout({ side = null, content = null, nav = null }) {
  return (
    <div>
      <div className={style.nav}>{nav}</div>
      <div className={style.layout}>
        <div className={style.side}>{side}</div>
        <div className={style.content}>{content}</div>
      </div>
    </div>
  )
}

Layout.propTypes = {
  side: PropTypes.element.isRequired,
  content: PropTypes.element.isRequired,
  nav: PropTypes.element.isRequired
}
