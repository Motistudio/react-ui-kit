'use strict'

import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import {withKnobs, text, boolean, number} from '@storybook/addon-knobs'

import {EditedText} from '../../components'

storiesOf('EditedText', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <EditedText
      tag={text('Tag name', 'span')}
      initialValue={text('Initial value', 'value')}
      onChange={action()}
    />
  ))
