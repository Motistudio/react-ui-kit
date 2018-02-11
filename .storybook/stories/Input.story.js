'use strict'

import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import {withKnobs, text, boolean, number} from '@storybook/addon-knobs'

import {Input} from '../../components'

storiesOf('Input', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Input placeholder={text('Placeholder', 'placeholder...')} />
  ))
  .add('error', () => (
    <Input placeholder={text('Placeholder', 'placeholder...')} inputClassName='danger' />
  ))
  .add('success', () => (
    <Input placeholder={text('Placeholder', 'placeholder...')} inputClassName='success' />
  ))
