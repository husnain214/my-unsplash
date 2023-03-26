import './Modal.css'

const AddModal = () => {
  return (
    <dialog className='grid'>
      <h1 className='fs-600 fw-500 text-primary'>Add a new photo!</h1>

      <form action='' method='dialog' className='grid'>
        <label 
          htmlFor='img-label' 
          className='fs-300 fw-500 text-secondary-300'>Label</label>
        <input 
          type='text' 
          name='img-label' 
          className='fs-300 fw-500 text-secondary-300' 
          id='img-label' 
          placeholder='name for the image' />

        <label 
          htmlFor='img-url' 
          className='fs-300 fw-500 text-secondary-300'>Photo URL</label>
        <input 
          type='text' 
          name='img-url' 
          id='img-url' 
          className='fs-300 fw-500 text-secondary-300' 
          placeholder='image address' />

        <div className='form-cta justify-self-end flex'>
          <button 
            type='button' 
            className='bg-clr-secondary-100 fs-300 text-secondary-200' >Cancel</button>
          <button 
            type='submit' 
            className='bg-accent-300 fs-300 text-secondary-100'>Submit</button>
        </div>
      </form>
    </dialog>
  )
}

export default AddModal