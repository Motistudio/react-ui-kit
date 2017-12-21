'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Icon from '../Icon'

import './Button.scss'

const Button = (props = {}) => {
  const {children, className, ...otherProps} = props
  let componentClassName = className

  // check if it's an icon button
  if (children && !Array.isArray(children) && children.type === Icon) {
    componentClassName = classNames('icon', componentClassName)
  }

  return (
    <button {...otherProps} className={componentClassName}>
      {children}
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object
  ]),
  children: PropTypes.node
}

export default Button
