'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import {portal} from 'react-portals'

import './Modal.scss'

class Modal extends React.Component {
  componentDidMount () {
    this._updateChild()
  }
  componentDidUpdate () {
    this._updateChild()
  }
  componentWillUnmount () {
    this.props.updateChild(null)
  }
  render () {
    return null
  }
  _updateChild () {
    let node = null
    if (!this.props.hasOwnProperty('show') || !!this.props.show) {
      node = (
        <div className='overlay' key={this.props.childId}>
          <div className='modal'>
            {this.props.children}
          </div>
        </div>
      )
    }
    this.props.updateChild(node)
  }
}

Modal.propTypes = {
  updateChild: PropTypes.func,
  show: PropTypes.bool,
  childId: PropTypes.string,
  children: PropTypes.node
}

export default portal('page-modal', 'updateChild', 'childId')(Modal)
