/**
 * @jest-environment jsdom
 */
import React from 'react'

import {render, screen} from '../test-utils/test-utils'
import HomePage from '@pages/index'

describe('HomePage', () => {
  it('should render the header', async () => {
    render(<HomePage />)
    const header = await screen.getByRole('banner', {name: ''})

    expect(header).toBeInTheDocument()
  })
})
