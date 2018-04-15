'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './Select.scss'

const getArrow = (arrow) => {
  if (arrow) {
    const Component = arrow
    return (<Component className='arrow' />)
  }
  return (<span className='arrow default' />)
}

const onOpenClick = function (e) {
  if (!this.element || !this.element.contains(e.target)) {
    this.toggle(false)
    document.removeEventListener('click', this.onOpenClick)
  }
}

class Select extends React.PureComponent {
  constructor (props) {
    super(props)

    this.element = null
    this.onOpenClick = onOpenClick.bind(this)
    this.state = {
      open: props.open || false,
      selected: null
    }
  }

  componentWillUnmount () {
    document.removeEventListener('click', this.onOpenClick)
  }

  toggle (flag = !this.state.open) {
    this.setState({open: flag})
    if (flag) {
      document.addEventListener('click', this.onOpenClick)
    } else {
      document.removeEventListener('click', this.onOpenClick)
    }
  }

  select (option) {
    this.setState({selected: option})
  }

  getOptions () {
    const select = (...args) => {
      this.select(...args)
      this.toggle(false)
    }
    return (
      <ul className='menu'>
        {
          this.props.options.map((option, index) => {
            if (typeof option === 'string') {
              return (
                <li key={index} onClick={() => select(option)}><span>{option}</span></li>
              )
            }
            return (
              <li key={index} onClick={() => select(option)}><span>{option.label}</span></li>
            )
          })
        }
      </ul>
    )
  }

  render () {
    const {tagName, arrow} = this.props
    const Component = tagName
    return (
      <Component ref={(el) => { this.element = el }} className={classNames('select input', {'open': this.state.open})} onClick={this.toggle.bind(this, true)} onBlur={this.toggle.bind(this, false)}>
        <span className='value'>{'select'}</span>
        {getArrow(arrow)}
        {this.getOptions()}
      </Component>
    )
  }
}

Select.propTypes = {
  tagName: PropTypes.string,
  open: PropTypes.bool,
  arrow: PropTypes.element,
  options: PropTypes.array
}

Select.defaultProps = {
  tagName: 'span',
  options: []
}

export default Select
