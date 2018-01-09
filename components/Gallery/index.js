'use strict'

import React from 'react'
import PropTypes from 'prop-types'

import './Gallery.scss'

class Gallery extends React.Component {
  render () {
    return (
      <div className='gallery'>
        {this.props.children}
      </div>
    )
  }
}

Gallery.propTypes = {
  children: PropTypes.node
}

export default Gallery
