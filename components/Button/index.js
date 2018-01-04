'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Icon from '../Icon'
import Badge from '../Badge'

import './Button.scss'

const isIcon = (props) => {
  const {children} = props
  return children && ((!Array.isArray(children) && children.type === Icon) || (children.length === 2 && children[0].type === Icon && children[1].type === Badge))
}

const Button = (props = {}) => {
  const {children, className, ...otherProps} = props
  const componentClassName = classNames({
    'icon': isIcon(props)
  }, className)

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
