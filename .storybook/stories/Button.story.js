'use strict'

import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import {withKnobs, text, boolean, number} from '@storybook/addon-knobs'

import {Button, Icon, Badge} from '../../components'

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <Button />
  ))
  .add('With content', () => (
    <Button className={text('Class name', '')}>{text('Text', 'button text')}</Button>
  ))
  .add('Disabled', () => (
    <Button className={text('Class name', '')} disabled>{text('Text', 'button text')}</Button>
  ))
  .add('Icon button', () => (
    <Button className={text('Class name', '')}><Icon type='rocket' /></Button>
  ))
  .add('Icon button with a badge', () => (
    <Button className={text('Class name', '')}><Icon type='rocket' /><Badge /></Button>
  ))
