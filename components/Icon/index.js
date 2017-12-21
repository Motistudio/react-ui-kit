'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './Icon.scss'

class Icon extends React.Component {
  render () {
    const {type} = this.props
    const typeClasses = Array.isArray(type) ? type.map(type => `fa-${type}`) : `fa-${type}`
    return (
      <span className={classNames('icon', this.props.className)}>
        <i className={classNames('fa', typeClasses)} />
      </span>
    )
  }
}

Icon.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object
  ]),
  type: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]).isRequired
}

export default Icon
