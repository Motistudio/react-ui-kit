'use strict'

import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import {withKnobs, text, boolean, number} from '@storybook/addon-knobs'

import {Button, Icon, Badge} from '../../components'

/**
 * Returns a group of buttons with props
 */
const getButtons = (props = {}) => {
  const {className, ...rest} = props
  return (
    <div>
      <p>
        <Button className={[text('Class name', ''), className]} {...rest}>{text('Text', 'button text')}</Button>
      </p>
      <p>
        <Button className={[text('Class name', ''), 'primary', className]} {...rest}>{'primary'}</Button>
      </p>
      <p>
        <Button className={[text('Class name', ''), 'success', className]} {...rest}>{'success'}</Button>
      </p>
      <p>
        <Button className={[text('Class name', ''), 'danger', className]} {...rest}>{'danger'}</Button>
      </p>
      <p>
        <Button className={[text('Class name', ''), 'warning', className]} {...rest}>{'warning'}</Button>
      </p>
      <p>
        <Button className={[text('Class name', ''), 'info', className]} {...rest}>{'info'}</Button>
      </p>
    </div>
  )
}

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <Button />
  ))
  .add('With content', () => getButtons())
  .add('Line', () => getButtons({className: 'line'}))
  .add('Link', () => getButtons({className: 'link'}))
  .add('Disabled', () => getButtons({disabled: true}))
  .add('With icon', () => (
    <p>
      <Button className={text('Class name', '')} icon><Icon type='rocket' /><span>{'text'}</span></Button>
    </p>
  ))
  .add('Icon button', () => (
    <div>
      <Button className={text('Class name', '')} icon><Icon type='rocket' /></Button>
      <Button className={text('Class name', ''), 'primary'} icon><Icon type='rocket' /></Button>
      <Button className={text('Class name', ''), 'success'} icon><Icon type='rocket' /></Button>
      <Button className={text('Class name', ''), 'danger'} icon><Icon type='rocket' /></Button>
      <Button className={text('Class name', ''), 'warning'} icon><Icon type='rocket' /></Button>
      <Button className={text('Class name', ''), 'info'} icon><Icon type='rocket' /></Button>
    </div>
  ))
  .add('Icon button with a badge', () => (
    <Button className={text('Class name', '')} icon><Icon type='rocket' /><Badge /></Button>
  ))
