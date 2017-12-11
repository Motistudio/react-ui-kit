'use strict'

import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import {withKnobs, text, boolean, number} from '@storybook/addon-knobs'

import {Badge} from '../../components'

storiesOf('Badge', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <Badge />
  ))
  .add('With content as a number', () => (
    <Badge>{number('Number', 7)}</Badge>
  ))
  .add('With content', () => (
    <Badge>{text('Text', 'some long text')}</Badge>
  ))
  .add('Clickable', () => (
    <Badge className='clickable'>{text('Text', 'some long text')}</Badge>
  ))
