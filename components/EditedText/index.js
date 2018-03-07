'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class EditedText extends React.PureComponent {
  constructor (props) {
    super(props)

    const value = props.hasOwnProperty('value') ? props.value : props.initialValue
    this.state = {
      value: value,
      editedValue: value, // holds the value while the component is edited
      edit: props.edit || false
    }
  }

  componentWillReceiveProps (props) {
    if (props.hasOwnProperty('value')) {
      this.setState({
        value: props.value,
        editedValue: props.value
      })
    }
    if (props.hasOwnProperty('edit')) {
      this.setState({edit: true})
    }
  }

  toggleMode (flag = !this.state.edit) {
    this.setState({edit: flag})
    if (flag) {
      this.setState({editedValue: this.state.value})
    }
    if (!flag && this.state.value !== this.state.editedValue && typeof this.props.onChange === 'function') {
      // if the component is not controlled - update the input
      if (!this.props.hasOwnProperty('value')) {
        this.setState({value: this.state.editedValue})
      }
      this.props.onChange(this.state.editedValue)
    }
  }

  renderInput () {
    setTimeout(() => {
      if (this.input) {
        this.input.focus()
      }
    }, 0)
    const {className} = this.props
    return (
      <input type='text'
        className={classNames('edited-text edit', {'empty': !this.state.editedValue}, className)}
        value={this.state.editedValue}
        ref={(input) => { this.input = input }}
        onChange={(e) => this.setState({editedValue: e.target.value})}
        onBlur={() => this.toggleMode(false)}
      />
    )
  }

  render () {
    if (this.state.edit) {
      return this.renderInput()
    }
    const {className} = this.props
    const Component = this.props.tag
    return (
      <Component
        className={classNames('edited-text', {'empty': !this.state.value}, className)}
        onClick={() => this.toggleMode(true)}>
        {this.state.value}
      </Component>
    )
  }
}

EditedText.propTypes = {
  initialValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  edit: PropTypes.bool,
  tag: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func
}

EditedText.defaultProps = {
  tag: 'span'
}

export default EditedText
