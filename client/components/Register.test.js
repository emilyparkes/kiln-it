import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'

import Register from './Register.jsx'

describe('Username input', () => {
  it('gets the text', () => {
    const { queryByPlaceholderText } = render(<Register />)
    const usernameInput = queryByPlaceholderText('username')
    fireEvent.change(usernameInput, { target: { value: 'newUsername' } })
    expect(usernameInput.value).toBe('newUsername')
  })
})

describe('Email input', () => {
  it('gets the text', () => {
    const { queryByPlaceholderText } = render(<Register />)
    const passwordInput = queryByPlaceholderText('email')
    fireEvent.change(passwordInput, { target: { value: 'newEmail' } })
    expect(passwordInput.value).toBe('newEmail')
  })
})

describe('Password input', () => {
  it('gets the text', () => {
    const { queryByPlaceholderText } = render(<Register />)
    const passwordInput = queryByPlaceholderText('password')
    fireEvent.change(passwordInput, { target: { value: 'newPassword' } })
    expect(passwordInput.value).toBe('newPassword')
  })
})
