'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './Select.scss'

const getArrow = (props) => {
  if (props.arrow) {
    const Component = props.arrow
    return (<Component className='arrow' />)
  }
  return (<span className='arrow default' />)
}

class Select extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      open: props.open || false,
      selected: null
    }
  }

  toggle (flag = !this.state.open) {
    this.setState({open: flag})
  }

  select (index) {

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
                <li key={index} onClick={() => select(index)}><span>{option}</span></li>
              )
            }
            return (
              <li key={index} onClick={() => select(index)}><span>{option.label}</span></li>
            )
          })
        }
      </ul>
    )
  }

  render () {
    return (
      <span className={classNames('select input', {'open': this.state.open})} onClick={this.toggle.bind(this, true)} onBlue={this.toggle.bind(this, false)}>
        <span className='value'>{'select'}</span>
        {getArrow(this.props)}
        {this.getOptions()}
      </span>
    )
  }
}

Select.propTypes = {
  open: PropTypes.bool,
  arrow: PropTypes.func,
  options: PropTypes.array
}

Select.defaultProps = {
  options: []
}

export default Select
