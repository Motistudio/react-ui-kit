'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './ButtonGroup.scss'

const ButtonGroup = (props) => {
  const {children, className} = props
  return (
    <div className={classNames('button-group', className)}>
      {children}
    </div>
  )
}

export default ButtonGroup
