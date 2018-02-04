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
    if (!this.props.hasOwnProperty('show') || !!this.props.show) {
      const node = (
        <div className='overlay'>
          <div className='modal' key={this.props.childId}>
            {this.props.children}
          </div>
        </div>
      )
      this.props.updateChild(node)
    }
  }
}

Modal.propTypes = {
  updateChild: PropTypes.func,
  show: PropTypes.boolean,
  childId: PropTypes.string,
  children: PropTypes.node
}

export default portal('page-modal', 'updateChild', 'childId')(Modal)
