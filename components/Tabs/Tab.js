'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Tab = (props) => {
  const {children, className, name, ...otherProps} = props
  return (
    <div className={classNames('tabs', className)} {...otherProps}>
      {children}
    </div>
  )
}

Tab.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string
}

export default Tab
