'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './Input.scss'

class Input extends React.Component {
  hasContent () {
    const {children} = this.props
    return !!children && (Array.isArray(children) ? children.length : true)
  }
  getContentElements () {
    return (
      <div className='content'>
        {this.props.children}
      </div>
    )
  }
  render () {
    const {className, children, ...props} = this.props
    return (
      <div className={classNames('input-component', className)}>
        <div className='input-container'>
          <input type='text' {...props} />
        </div>
        {this.hasContent() && this.getContentElements()}
      </div>
    )
  }
}

Input.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object
  ]),
  children: PropTypes.node
}

export default Input
