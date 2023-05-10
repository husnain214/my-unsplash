import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'
import LoginForm from './LoginForm'

test('<LoginForm> calls onSubmit and send correct data', async () => {
  const setUserExists = jest.fn()
  const login = jest.fn()
  const user = userEvent.setup()

  const { container } = render(
    <LoginForm 
      setUserExists = {setUserExists} 
      login = {login}
    />
  )

  const emailInput =  container.querySelector('input[name="email"')
  const passwordInput = container.querySelector('input[name="password"]')
  const submitBtn = await screen.findByText('Login')

  await user.type(emailInput, 'demo')
  await user.type(passwordInput, 'demo')
  await user.click(submitBtn)
  
  expect(login.mock.calls).toHaveLength(1)
  expect(login.mock.calls[0][0]).toEqual({ email: 'demo', password: 'demo' })
})
