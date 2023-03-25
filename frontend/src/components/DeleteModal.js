import './Modal.css'

const DeleteModal = () => {
  return (
    <dialog open className='grid'>
      <h1 className='fs-600 fw-500 text-primary'>Are you sure?</h1>

      <form action='' method='dialog' className='grid'>
        <label htmlFor='password' className='fs-300 fw-500 text-secondary-300'>Password</label>
        <input type='password' name='password' className='fs-300 fw-500 text-secondary-300' id='password' placeholder='name for the image' />

        <div className='form-cta justify-self-end flex'>
          <button type='button' className='bg-clr-secondary-100 fs-300 text-secondary-200' >Cancel</button>
          <button type='submit' className='bg-accent-200 fs-300 text-secondary-100'>Delete</button>
        </div>
      </form>
    </dialog>
  )
}

export default DeleteModal