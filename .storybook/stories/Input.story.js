'use strict'

import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import {withKnobs, text, boolean, number} from '@storybook/addon-knobs'

import {Input} from '../../components'

storiesOf('Input', module)
  .addDecorator(withKnobs)
  .add('normal', () => (
    <input type='text' placeholder={text('Placeholder', 'placeholder...')} />
  ))
  .add('default', () => (
    <Input placeholder={text('Placeholder', 'placeholder...')} />
  ))
  .add('error', () => (
    <Input placeholder={text('Placeholder', 'placeholder...')} className='danger' />
  ))
  .add('success', () => (
    <Input placeholder={text('Placeholder', 'placeholder...')} className='success' />
  ))
