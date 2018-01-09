'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const TabLink = (props) => {
  /**
   * click handler wrapper for the click at the layer above
   */
  const onClick = function (e) {
    e.preventDefault()
    const {onClick} = props
    if (typeof onClick === 'function') {
      return onClick(props.tab)
    }
  }
  return (
    <a href={'javascript:;'} className={classNames('tabs', props.className)} onClick={onClick}>
      {props.children}
    </a>
  )
}

TabLink.propTypes = {
  tab: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string
}

export default TabLink
