'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './Input.scss'

class Searchbar extends React.Component {
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
    return (
      <div className={classNames('input', this.props.className)}>
        <div className='input-container'>
          <input type='text' />
        </div>
        {this.hasContent() && this.getContentElements()}
      </div>
    )
  }
}

Searchbar.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object
  ]),
  children: PropTypes.node
}

export default Searchbar
