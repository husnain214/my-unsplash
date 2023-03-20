const LoginForm = () => {
  return (
    <>
      <form action='' className='grid bg-secondary-100'>
        <header>
          <p className='text-secondary-300 fs-300 fw-5400'>Welcome back</p>
        </header>

        <h1 className='fs-700 fw-800 text-primary'>Login to your account</h1>

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

        <div className='form-features flex justify-content-sb'>
          <div className='remember flex align-items-center'>
            <input 
              type='checkbox' 
              className='remember-me' 
              id='remember-me' 
              name='remember-me' />
            <label 
              htmlFor='remember-me' 
              className='fs-300 fw-300 text-primary'>Remember me</label>
          </div>

          <button 
            type='button'
            className='fw-300 fs-300 text-accent-200'>Forgot password?</button>
        </div>

        <button 
          type='submit' 
          name='submit-btn' 
          id='submit-btn' 
          className='cta-btn bg-accent-200 text-secondary-100 fs-400 fw-400'>Login</button>
        <button 
          type='button' 
          name='demo-btn' 
          id='demo-btn' 
          className='cta-btn bg-primary text-secondary-100 fs-400 fw-400'>Demo</button>
      </form>

      <footer className='text-secondary-200 fs-300 fw-500 flex'>
        Don&apos;t have an account?
        <button type='button' className='text-accent-200 fs-300 fw-400'>Join free today</button>
      </footer>
    </>
  )
}

export default LoginForm