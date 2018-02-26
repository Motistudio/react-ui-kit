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

const Button = (props = {}) => {
  const {children, className, ...otherProps} = props
  const icon = isIcon(props)
  const componentClassName = classNames({
    'icon': icon
  }, className)

  return (
    <button {...otherProps} className={componentClassName}>
      {icon ? children : (<span>{children}</span>)}
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
  icon: PropTypes.boolean
}

export default Button
