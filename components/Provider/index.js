'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import {PortalProvider, portalTarget} from 'react-portals'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

const ModalPortal = portalTarget('page-modal')(({children, ...props}) => {
  return (
    <CSSTransitionGroup className='modal-container'
      transitionName='overlay'
      transitionEnterTimeout={500}
      transitionLeaveTimeout={300}
      component='div' {...props}>
      {children}
    </CSSTransitionGroup>
  )
})

class Provider extends React.Component {
  render () {
    const {children} = this.props
    return (
      <PortalProvider>
        <React.Fragment>
          <ModalPortal />
          {children}
        </React.Fragment>
      </PortalProvider>
    )
  }
}

Provider.propTypes = {
  children: PropTypes.node
}

export default Provider
