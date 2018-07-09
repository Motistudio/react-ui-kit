'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import {CSSTransitionGroup} from 'react-transition-group'
import {portalTarget} from 'react-portals'

const ModalPortal = ({children, ...props}) => {
  return (
    <CSSTransitionGroup className='modal-container'
      transitionName='overlay'
      transitionEnterTimeout={500}
      transitionLeaveTimeout={300}
      component='div' {...props}>
      {children}
    </CSSTransitionGroup>
  )
}

ModalPortal.propTypes = {
  children: PropTypes.node
}

export default portalTarget('page-modal')(ModalPortal)
