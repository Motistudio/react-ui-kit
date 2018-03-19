'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './Input.scss'

class Input extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      focused: false
    }
  }
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
  toggleFocus (flag = !this.state.focused) {
    this.setState({focused: flag})
  }
  render () {
    const {className, inputClassName, children, ...props} = this.props
    const {focused} = this.state
    return (
      <div className={classNames('input', {'focus': focused}, className)}>
        <input type='text' {...props} className={inputClassName} onFocus={this.toggleFocus.bind(this, true)} onBlur={this.toggleFocus.bind(this, false)} />
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
  inputClassName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object
  ]),
  children: PropTypes.node
}

export default Input
