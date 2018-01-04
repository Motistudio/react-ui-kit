'use strict'

import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import {withKnobs, text, boolean, number} from '@storybook/addon-knobs'

import {Tabs} from '../../components'

const {Tab} = Tabs

storiesOf('Tabs', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Tabs>
      <Tab name='tab-1' title='Tab 1'>
        {'Tab 1'}
      </Tab>
      <Tab name='tab-2' title='Tab 2'>
        {'Tab 2'}
      </Tab>
      <Tab name='tab-3'>
        {'Tab 3'}
      </Tab>
    </Tabs>
  ))
