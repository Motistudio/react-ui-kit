'use strict'

import {configure} from '@storybook/react';

const loadStories = function () {
  require('./stories')
}

configure(loadStories, module)
