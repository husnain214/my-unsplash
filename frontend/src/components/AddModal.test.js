import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'
import AddModal from './AddModal'

test('<AddModal> calls delete function', async () => {
  const addImage = jest.fn()
  const user = userEvent.setup()

  render(
    <AddModal 
      addImage={addImage}
    />
  )

  const name = await screen.findByPlaceholderText('name for the image')
  const url = await screen.findByPlaceholderText('image address')
  const submitBtn = await screen.findByText('Submit')

  await user.type(name, 'jhihihihi')
  await user.type(url, 'jhihihihi')
  await user.click(submitBtn)

  expect(addImage.mock.calls).toHaveLength(1)
  expect(addImage.mock.calls[0][0]).toStrictEqual({ label: 'jhihihihi', url: 'jhihihihi' })
})