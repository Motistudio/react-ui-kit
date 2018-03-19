'use strict'

import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import {withKnobs, text, boolean, number} from '@storybook/addon-knobs'

import classNames from 'classnames'

import {Select, Badge} from '../../components'

const ColoredBadge = (props) => {
  const {className, children} = props
  return (<Badge className={classNames('danger', className)}>{children}</Badge>)
}

storiesOf('Select', module)
  .addDecorator(withKnobs)
  .add('normal', () => (
    <select>
      <option>{'option 1'}</option>
      <option>{'option 2'}</option>
    </select>
  ))
  .add('default', () => (
    <Select options={['text 1', 'text 2']} />
  ))
  .add('With custom arrow', () => (
    <Select arrow={ColoredBadge} />
  ))
  .add('error', () => (
    <Select placeholder={text('Placeholder', 'placeholder...')} className='danger' />
  ))
  .add('success', () => (
    <Select placeholder={text('Placeholder', 'placeholder...')} className='success' />
  ))
