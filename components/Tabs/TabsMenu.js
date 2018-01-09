'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import TabLink from './TabLink'

const TabsMenu = (props) => {
  const {children, className, onLinkClick, current} = props

  /**
   * Returns the items
   */
  const getItems = () => {
    if (!children) {
      return null
    }
    const onClick = (name) => {
      if (typeof onLinkClick === 'function') {
        onLinkClick(name)
      }
    }
    if (!Array.isArray(children)) {
      const childNode = (children.type === TabLink ? Object.assign({}, children, {
        props: Object.assign({}, children.props, {onClick})
      }) : children)
      return (
        <li>
          {childNode}
        </li>
      )
    }
    return children.map((child, index) => {
      // calculating node:
      const childNode = (child.type === TabLink ? Object.assign({}, child, {
        props: Object.assign({}, child.props, {onClick})
      }) : child)
      return (
        <li key={index} className={classNames(child.props.className, {
          current: child.props.tab === current
        })}>
          {childNode}
        </li>
      )
    })
  }

  return (
    <ul className={classNames('tabs-menu', className)}>
      {getItems(props)}
    </ul>
  )
}

TabsMenu.propTypes = {
  onLinkClick: PropTypes.func,
  current: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string
}

export default TabsMenu
