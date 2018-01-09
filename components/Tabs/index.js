'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Tab from './Tab'
import TabsMenu from './TabsMenu'
import TabLink from './TabLink'

import './Tabs.scss'

const getChildren = (props = {}, state = {}) => {
  const {children} = props
  const tabs = []
  const other = []
  let menu = null
  if (!children) {
    return {tabs, other, menu}
  }
  if (!Array.isArray(children)) {
    if (children.type === TabsMenu) {
      menu = children
    }
    const arr = (children.type === Tab ? tabs : other)
    arr.push(children)
    return {tabs, other, menu}
  }
  children.forEach((child) => {
    if (child.type === TabsMenu) {
      menu = child
    }
    (child.type === Tab ? tabs : other).push(child)
  })
  if (menu) {
    menu.props.current = state.show
  }
  return {tabs, other, menu}
}

/**
 * Get state values from props for initial value and props-change
 * @param {Object} props - props
 * @returns {Object}
 */
const getStateFromProps = (props) => {
  const {tabs, other, menu} = getChildren(props)
  return {
    elements: {
      tabs,
      other,
      menu
    },
    show: props.show || tabs.length ? tabs[0].props.name : null
  }
}

const onTabClick = function (name) {
  if (!this.props.show) {
    this.show(name)
  }
}
class Tabs extends React.Component {
  constructor (props) {
    super(props)
    this.state = getStateFromProps(props)
    this.onTabClick = onTabClick.bind(this)
  }

  componentReceiveProps (props) {
    this.setState(getStateFromProps(props))
  }

  getMenuElement (tabs) {
    const {show} = this.state
    const links = tabs.map((tab, index) => {
      return (
        <TabLink key={index} tab={tab.props.name}>
          {tab.props.hasOwnProperty('title') ? tab.props.title : tab.props.name}
        </TabLink>
      )
    })
    return (
      <TabsMenu current={show} onLinkClick={this.onTabClick}>
        {links}
      </TabsMenu>
    )
  }

  show (name) {
    this.setState({
      show: name
    })
  }

  render () {
    const {className} = this.props
    const {tabs, other, menu} = this.state.elements
    const tab = tabs.filter(tab => tab.props.name === this.state.show)

    return (
      <div className={classNames('tabs', className)}>
        {menu || this.getMenuElement(tabs)}
        {tab}
        {other}
      </div>
    )
  }
}

Tabs.propTypes = {
  className: PropTypes.string
}

Tabs.Tab = Tab

export default Tabs
