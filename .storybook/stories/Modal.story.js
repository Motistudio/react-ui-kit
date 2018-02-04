'use strict'

import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import {withKnobs, text, boolean, number} from '@storybook/addon-knobs'

// import {Modal, Button, Provider} from '../../components'

storiesOf('Modal', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    // return (
    //   <Provider>
    //     <Button>{'Click me'}</Button>
    //     <Modal show={true}>{'Test modal!'}</Modal>
    //   </Provider>
    // )
    return (<span>{'currently unavailable'}</span>)
  })
