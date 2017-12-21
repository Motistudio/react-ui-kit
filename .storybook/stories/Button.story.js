'use strict'

import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import {withKnobs, text, boolean, number} from '@storybook/addon-knobs'

import {Button} from '../../components'

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <Button />
  ))
  .add('With content', () => (
    <Button>{text('Text', 'button text')}</Button>
  ))
