'use strict'

import React from 'react'
import PropTypes from 'prop-types'

import './Input.scss'

export default class Searchbar extends React.Component {
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
      <div className='input'>
        <div className='input-container'>
          <input type='text' />
        </div>
        {this.hasContent() && this.getContentElements()}
      </div>
    )
  }
}
