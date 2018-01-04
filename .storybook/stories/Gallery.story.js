'use strict'

import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import {withKnobs, text, boolean, number} from '@storybook/addon-knobs'

import {Gallery} from '../../components'

storiesOf('Gallery', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Gallery />
  ))
