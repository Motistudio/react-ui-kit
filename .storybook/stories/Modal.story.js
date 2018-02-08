'use strict'

import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import {withKnobs, text, boolean, number} from '@storybook/addon-knobs'

import {Modal, Button, Provider} from '../../components'

storiesOf('Modal', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return (
      <Provider>
        <Button>{'Click me'}</Button>
        <Modal show={boolean('Show', false)} closeButton={boolean('Has close button', true)} onOverlayClick={action('Overlay click')} onCloseClick={action('Close click')}>
          <p>{'Test modal!'}</p>
        </Modal>
      </Provider>
    )
  })
