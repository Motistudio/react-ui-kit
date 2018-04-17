'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

// import Icon from '../Icon'
// import Badge from '../Badge'

import './Button.scss'

const isIcon = (props) => {
  // const {children} = props
  // return children && ((!Array.isArray(children) && children.type === Icon) || (children.length === 2 && children[0].type === Icon && children[1].type === Badge))
  return props.hasOwnProperty('icon') && props.icon !== false
}

const getContent = (children) => {
  if (typeof children === 'string') {
    return (<span>{children}</span>)
  }
  return children
}

const Button = (props = {}) => {
  const {children, icon, className, ...otherProps} = props
  const isButtonIcon = isIcon(props)
  const componentClassName = classNames({
    'icon': isButtonIcon
  }, className)

  return (
    <button {...otherProps} className={componentClassName}>
      {getContent(children)}
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object
  ]),
  children: PropTypes.node,
  icon: PropTypes.bool
}

export default Button
