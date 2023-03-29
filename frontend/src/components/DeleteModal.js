import { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import './Modal.css'

const DeleteModal = forwardRef(({ verifyUser, id, deleteImage }, ref) => {
  const deleteModalRef = useRef()
  const [password, setPassword] = useState('')

  useImperativeHandle(ref, () => ({
    openDialog: () => {      
      deleteModalRef.current.showModal()
    }
  }))

  const closeDialog = () => {
    deleteModalRef.current.close()
  }

  const handleSubmit = async () => {
    try {
      await verifyUser(password)
      await deleteImage(id)
    } catch (error) {
      console.log('invalid password')
    }
  }

  return (
    <dialog className='border-radius-300' ref = {deleteModalRef}>
      <form action='' method='dialog' className='grid'>
        <h1 className='fs-600 fw-500 text-primary'>Are you sure?</h1>

        <label htmlFor='password' className='fs-300 fw-500 text-secondary-300'>Password</label>
        <input 
          type='password' 
          name='password' 
          className='fs-300 fw-500 text-secondary-300 border-radius-300' 
          id='password' 
          minLength='3'
          onChange={ ({ target }) => { setPassword(target.value) } }
          value={ password }
          placeholder='name for the image' />

        <div className='form-cta justify-self-end flex'>
          <button 
            type='button' 
            className='bg-clr-secondary-100 fs-300 text-secondary-200' 
            onClick={closeDialog}>Cancel</button>
          <button 
            type='submit' 
            onClick={handleSubmit}
            className='bg-accent-200 fs-300 text-secondary-100 border-radius-300'>Delete</button>
        </div>
      </form>
    </dialog>
  )
})

DeleteModal.displayName = 'DeleteModal'

DeleteModal.propTypes = {
  deleteImage: PropTypes.func.isRequired,
  verifyUser: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
}

export default DeleteModal