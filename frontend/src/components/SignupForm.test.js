import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'
import SignupForm from './SignupForm'

test('<SignupForm> calls onSubmit and send correct data', async () => {
  const setUserExists = jest.fn()
  const signup = jest.fn()
  const user = userEvent.setup()

  const { container } = render(
    <SignupForm 
      setUserExists = {setUserExists} 
      signup={signup} 
    />
  )

  const nameInput =  container.querySelector('input[name="name"')
  const emailInput = container.querySelector('input[name="email"]')
  const passwordInput = container.querySelector('input[name="password"]')
  const confirmPasswordInput = container.querySelector('input[name="confirm-password"]')
  const submitBtn = await screen.findByText('Sign up')

  await user.type(nameInput, 'Saad Atif')
  await user.type(emailInput, 'saad@gmail.com')
  await user.type(passwordInput, 'saad')
  await user.type(confirmPasswordInput, 'saad')
  await user.click(submitBtn)
  
  expect(signup.mock.calls).toHaveLength(1)
  expect(signup.mock.calls[0][0].name).toEqual('Saad Atif')
})
