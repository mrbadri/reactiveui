import React from 'react'
import '@types/jest'

import { render } from '@testing-library/react'

import 'jest-canvas-mock'

import { HyperLink } from '../src'

describe('HyperLink component renders', () => {
  it('renders successfully', () => {
    render(<HyperLink />)
  })
})
