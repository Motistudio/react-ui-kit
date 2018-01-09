'use strict'

import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import {withKnobs, text, boolean, number} from '@storybook/addon-knobs'

import {ButtonGroup, Button} from '../../components'

storiesOf('ButtonGroup', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <ButtonGroup>
      <Button>{'button 1'}</Button>
      <Button>{'button 2'}</Button>
      <Button>{'button 3'}</Button>
    </ButtonGroup>
  ))
  .add('with selected button', () => (
    <ButtonGroup>
      <Button>{'button 1'}</Button>
      <Button className='active'>{'button 2'}</Button>
      <Button>{'button 3'}</Button>
    </ButtonGroup>
  ))
