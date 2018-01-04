'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import lodash from 'lodash'

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
    (children.type === Tab ?  tabs : other).push(children)
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

const onTabClick = function (name) {
  if (!this.props.show) {
    this.show(name)
  }
}

const getMenuElement = function (tabs) {
  const {show} = this.state
  const links = tabs.map((tab, index) => {
    return (
      <TabLink key={index} tab={tab.props.name}>
        {tab.props.hasOwnProperty('title') ? tab.props.title : tab.props.name}
      </TabLink>
    )
  })
  return (
    <TabsMenu current={show} onLinkClick={onTabClick.bind(this)}>
      {links}
    </TabsMenu>
  )
}

/**
 * Get state values from props for initial value and props-change
 * @param {Object} props - props
 * @returns {Object}
 */
const getStateFromProps = (props) => {
  const {tabs} = getChildren(props)
  return {
    show: props.show || tabs.length ? tabs[0].props.name : null
  }
}

class Tabs extends React.Component {
  constructor (props) {
    super(props)
    this.state = getStateFromProps(props)
  }

  componentReceiveProps (props) {
    this.setState(getStateFromProps(props))
  }

  show (name) {
    this.setState({
      show: name
    })
  }

  render () {
    const {tabs, other, menu} = getChildren(this.props, this.state)
    const tab = tabs.filter(tab => tab.props.name === this.state.show)

    return (
      <div className='tabs'>
        {menu || getMenuElement.call(this, tabs)}
        {tab}
        {other}
      </div>
    )
  }
}

Tabs.Tab = Tab

export default Tabs
