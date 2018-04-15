'use strict'

import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import {withKnobs, text, boolean, number} from '@storybook/addon-knobs'

import {Badge} from '../../components'

/**
 * Returns a group of buttons with props
 */
const getBadges = (props = {}) => {
  const {className, children, ...rest} = props
  return (
    <div>
      <p>
        <Badge className={[text('Class name', ''), className]} {...rest}>{children}</Badge>
      </p>
      <p>
        <Badge className={[text('Class name', ''), 'primary', className]} {...rest}>{children}</Badge>
      </p>
      <p>
        <Badge className={[text('Class name', ''), 'success', className]} {...rest}>{children}</Badge>
      </p>
      <p>
        <Badge className={[text('Class name', ''), 'danger', className]} {...rest}>{children}</Badge>
      </p>
      <p>
        <Badge className={[text('Class name', ''), 'warning', className]} {...rest}>{children}</Badge>
      </p>
      <p>
        <Badge className={[text('Class name', ''), 'info', className]} {...rest}>{children}</Badge>
      </p>
    </div>
  )
}

storiesOf('Badge', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <Badge />
  ))
  .add('With content as a number', () => (
    getBadges({children: number('Number', 7)})
  ))
  .add('With content', () => (
    getBadges({children: text('Text', 'some long text')})
  ))
  .add('Clickable', () => (
    getBadges({className: 'clickable', children: text('Text', 'some long text')})
  ))
