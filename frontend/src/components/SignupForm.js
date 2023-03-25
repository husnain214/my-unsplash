const SignupForm = () => {
  return (
    <section className='form-container grid justify-items-stretch align-content-center'>
      <form action='' className='grid bg-secondary-100'>
        <header>
          <p className='text-secondary-300 fs-300 fw-5400'>Welcome to My Unsplash</p>
        </header>
        
        <h1 className='fs-700 fw-800 text-primary'>Create your account</h1>

        <label 
          htmlFor='name' 
          className='fs-400 fw-500 text-secondary-300'>Name</label>
        <input 
          type='text' 
          name='name' 
          id='name' 
          placeholder='name' 
          className='input-text | fs-400 fw-400 text-primary' />

        <label 
          htmlFor='email' 
          className='fs-400 fw-500 text-secondary-300'>Email</label>
        <input 
          type='email' 
          name='email' 
          id='email' 
          placeholder='email' 
          className='input-text | fs-400 fw-400 text-primary' />

        <label 
          htmlFor='password' 
          className='fs-400 fw-500 text-secondary-300'>Password</label>
        <input 
          type='password' 
          id='password' 
          name='password' 
          placeholder='password' 
          className='input-text | fs-400 fw-400 text-primary' />

        <label 
          htmlFor='confirm-password' 
          className='fs-400 fw-500 text-secondary-300'>Confirm Password</label>
        <input 
          type='password' 
          id='confirm-password' 
          name='confirm-password' 
          placeholder='Confirm your password' 
          className='input-text | fs-400 fw-400 text-primary' />

        <button 
          type='submit' 
          name='submit-btn' 
          id='submit-btn' 
          className='cta-btn bg-accent-200 text-secondary-100 fs-400 fw-400'>Sign up</button>
      </form>

      <footer className='text-secondary-200 fs-300 fw-500 flex justify-content-center'>
        Already have an account?
        <button type='button' className='text-accent-200 fs-300 fw-400 '>Login</button>
      </footer>
    </section>
  )
}

export default SignupForm