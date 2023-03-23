const SignupForm = () => {
  return (
    <>
      <form action='' className='grid bg-secondary-100'>
        <header>
          <p className='text-secondary-300 fs-300 fw-5400'>Welcome to My Unsplash</p>
        </header>
        
        <h1 className='fs-700 fw-800 text-primary'>Create your account</h1>

        <div className='input-wrapper grid'>
          <label 
            htmlFor='email' 
            className='fs-400 fw-500 text-secondary-300'>Email</label>
          <input 
            type='email' 
            name='email' 
            id='email' 
            placeholder='email' 
            className='fs-400 fw-400 text-primary' />
        </div>

        <div className='input-wrapper grid'>
          <label 
            htmlFor='password' 
            className='fs-400 fw-500 text-secondary-300'>Password</label>
          <input 
            type='password' 
            id='password' 
            name='password' 
            placeholder='password' 
            className='fs-400 fw-400 text-primary' />
        </div>

        <div className='input-wrapper grid'>
          <label 
            htmlFor='confirm-password' 
            className='fs-400 fw-500 text-secondary-300'>Confirm Password</label>
          <input 
            type='password' 
            id='confirm-password' 
            name='confirm-password' 
            placeholder='Confirm your password' 
            className='fs-400 fw-400 text-primary' />
        </div>

        <button 
          type='submit' 
          name='submit-btn' 
          id='submit-btn' 
          className='cta-btn bg-accent-200 text-secondary-100 fs-400 fw-400'>Sign up</button>
      </form>

      <footer className='text-secondary-200 fs-300 fw-500 flex'>
        Already have an account?
        <button type='button' className='text-accent-200 fs-300 fw-400'>Login</button>
      </footer>
    </>
  )
}

export default SignupForm