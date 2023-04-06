import { useState, useRef, useImperativeHandle, forwardRef } from 'react'
import PropTypes from 'prop-types'
import './Modal.css'

const AddModal = forwardRef(({ addImage }, ref) => {
  const addModalRef = useRef()

  const [url, setUrl] = useState('')
  const [label, setLabel] = useState('')

  useImperativeHandle(ref, () => ({
    openDialog: () => {
      addModalRef.current.showModal()
      addModalRef.current.animate(
        [
          { transform: 'translateY(20px)', 
            opacity: '0' 
          },
          { transform: 'translateY(0px)', 
            opacity: '1' 
          },
        ],
        {
          duration: 100,
          iterations: 1,
        }
      )
    }
  }))

  const closeDialog = () => {
    addModalRef.current.animate(
      [
        { transform: 'translateY(0px)', 
          opacity: '1' 
        },
        { transform: 'translateY(20px)', 
          opacity: '0' 
        },
      ],
      {
        duration: 100,
        iterations: 1,
      }
    )

    setTimeout(() => addModalRef.current.close(), 100)
  }

  const handleSubmit = async () => {
    await addImage({ url, label })
    closeDialog()
    setLabel('')
    setUrl('')
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
          autoComplete='off'
          onChange = { ({ target }) => setLabel(target.value) }
          value={ label }
          required
          placeholder='name for the image' />

        <label 
          htmlFor='img-url' 
          className='fs-300 fw-500 text-secondary-300'>Photo URL</label>
        <input 
          type='text' 
          name='img-url' 
          id='img-url' 
          autoComplete='off'
          className='fs-300 fw-500 text-secondary-300 border-radius-300' 
          onChange = { ({ target }) => setUrl(target.value) }
          value={ url }
          required
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

