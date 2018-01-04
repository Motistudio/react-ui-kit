'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const onClick = function (props, e) {
  e.preventDefault()
  if (typeof props.onClick === 'function') {
    props.onClick(props.tab)
  }
}

const TabLink = (props) => {
  return (
    <a href={'javascript:;'} className={classNames('tabs', props.className)} onClick={onClick.bind(null, props)}>
      {props.children}
    </a>
  )
}

TabLink.propTypes = {
  tab: PropTypes.string,
  onClick: PropTypes.func
}

export default TabLink
