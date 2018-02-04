'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import {PortalProvider, portalTarget} from 'react-portals'

const ModalPortal = portalTarget('page-modal')(({children, ...props}) => {
  return (
    <div className='modal-container' {...props}>
      {children}
    </div>
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
