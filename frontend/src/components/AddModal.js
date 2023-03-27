import React, { useRef, useImperativeHandle, forwardRef } from 'react'
import PropTypes from 'prop-types'
import './Modal.css'

const AddModal = forwardRef(({ addImage }, ref) => {
  const addModalRef = useRef()

  useImperativeHandle(ref, () => ({
    openDialog: () => {
      if(!addModalRef.current) return

      addModalRef.current.showModal()
    }
  }))

  const closeDialog = () => {
    if(!addModalRef.current) return 
    addModalRef.current.close()
  }

  const handleSubmit = () => {
    addImage()
  }

  return (
    <dialog className='border-radius-300' ref = {addModalRef}>
      <form action='' method='dialog' className='grid'>
        <h1 className='fs-600 fw-500 text-primary'>Add a new photo!</h1>

        <label 
          htmlFor='img-label' 
          className='fs-300 fw-500 text-secondary-300'>Label</label>
        <input 
          type='text' 
          name='img-label' 
          className='fs-300 fw-500 text-secondary-300 border-radius-300' 
          id='img-label' 
          placeholder='name for the image' />

        <label 
          htmlFor='img-url' 
          className='fs-300 fw-500 text-secondary-300'>Photo URL</label>
        <input 
          type='text' 
          name='img-url' 
          id='img-url' 
          className='fs-300 fw-500 text-secondary-300 border-radius-300' 
          placeholder='image address' />

        <div className='form-cta justify-self-end flex'>
          <button 
            type='button' 
            onClick={closeDialog}
            className='bg-clr-secondary-100 fs-300 text-secondary-200' >Cancel</button>
          <button 
            type='submit' 
            onClick={handleSubmit}
            className='bg-accent-300 fs-300 text-secondary-100 border-radius-300'>Submit</button>
        </div>
      </form>
    </dialog>
  )
})

AddModal.displayName = 'AddModal'
AddModal.propTypes = {
  addImage: PropTypes.func.isRequired
}

export default AddModal

