'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import {PortalProvider} from 'react-portals'

import ModalContainer from '../ModalContainer'

class Provider extends React.Component {
  render () {
    const {children} = this.props
    return (
      <PortalProvider>
        <React.Fragment>
          <ModalContainer />
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
