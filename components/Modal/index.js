'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import {portal} from 'react-portals'

import './Modal.scss'

const CloseButton = (props) => {
  return (
    <div className='close-button' {...props}>
      {String.fromCharCode('215')}
    </div>
  )
}

const onOverlayClick = function (e) {
  if (e.target === e.currentTarget && typeof this.props.onOverlayClick === 'function') {
    this.props.onOverlayClick(e)
  }
}

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
        <div className='overlay' key={this.props.childId} onClick={onOverlayClick.bind(this)}>
          <div className='modal'>
            {!!this.props.closeButton && (<CloseButton onClick={this.props.onCloseClick} />)}
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
  childId: PropTypes.string,
  children: PropTypes.node,
  show: PropTypes.bool,
  onOverlayClick: PropTypes.func,
  onCloseClick: PropTypes.func,
  closeButton: PropTypes.bool
}

export default portal('page-modal', 'updateChild', 'childId')(Modal)
