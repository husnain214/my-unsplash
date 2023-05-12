import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'
import DeleteModal from './DeleteModal'

test('<DeleteModal> calls delete function', async () => {
  const deleteImage = jest.fn()
  const verifyUser = jest.fn()
  const id = '4'
  const user = userEvent.setup()

  const { container } = render(
    <DeleteModal 
      deleteImage={deleteImage}
      verifyUser={verifyUser}
      id={id} 
    />
  )

  const passwordField = container.querySelector('input[type="password"]')
  const submitBtn = await screen.findByText('Delete')

  await user.type(passwordField, 'demo')
  await user.click(submitBtn)

  expect(deleteImage.mock.calls).toHaveLength(1)
  expect(verifyUser.mock.calls).toHaveLength(1)
  expect(deleteImage.mock.calls[0][0]).toBe('4')
  expect(verifyUser.mock.calls[0][0]).toBe('demo')
})