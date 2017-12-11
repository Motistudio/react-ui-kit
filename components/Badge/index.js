'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './Badge.scss'

export default class Badge extends React.Component {
  render () {
    const {children} = this.props
    return (
      <span className={classNames('badge', this.props.className)}>
        {children && (<span>{children}</span>)}
      </span>
    )
  }
}
