import { useState } from 'react'
import PropTypes from 'prop-types'

const LoginForm = ({ login, setUserExists }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async event => {
    event.preventDefault()
    const submitBtn = event.target.querySelector('button[type="submit"]')
    submitBtn.setAttribute('data-submitting', true)
    await login({ email, password })
    submitBtn.setAttribute('data-submitting', false)
    setEmail('')
    setPassword('')
  }

  const demoLogin = async ({ target }) => {
    target.setAttribute('data-submitting', true)
    await login({ email: 'demo@demo.com', password: 'demo'})
    target.setAttribute('data-submitting', false)
    setEmail('')
    setPassword('')
  }

  return (
    <section className='form-container grid justify-items-stretch align-content-center'>
      <form 
        action='' 
        method='POST' 
        onSubmit={handleLogin}
        className='homepage--form | grid bg-secondary-100 border-radius-100'>
        <header>
          <p className='text-secondary-300 fs-300 fw-5400'>Welcome back</p>
        </header>

        <h1 className='fs-700 fw-800 text-primary'>Login to your account</h1>

        <label 
          htmlFor='email' 
          className='fs-400 fw-500 text-secondary-300'>Email</label>
        <input 
          type='email' 
          name='email' 
          id='email' 
          placeholder='email' 
          onChange={ ({ target }) => setEmail(target.value) }
          value={ email }
          autoComplete='off'
          required
          className='input-text | fs-400 fw-400 text-primary' />

        <label 
          htmlFor='password' 
          className='fs-400 fw-500 text-secondary-300'>Password</label>
        <input 
          type='password' 
          id='password' 
          name='password' 
          placeholder='password' 
          required
          autoComplete='off'
          onChange={ ({ target }) => setPassword(target.value) }
          value={ password }
          className='input-text | fs-400 fw-400 text-primary' />

        <button 
          type='submit' 
          name='submit-btn' 
          id='submit-btn' 
          data-submitting='false'
          className='cta-btn bg-accent-200 text-secondary-100 fs-400 fw-400 border-radius-100'>Login</button>
        <button 
          type='button' 
          name='demo-btn' 
          id='demo-btn' 
          data-submitting='false'
          onClick={demoLogin}
          className='cta-btn bg-primary text-secondary-100 fs-400 fw-400 border-radius-100'>Demo</button>
      </form>

      <footer className='text-secondary-200 fs-300 fw-500 flex justify-content-center'>
        Don&apos;t have an account?
        <button 
          onClick = { () => setUserExists(false) }
          className='text-accent-200 fs-300 fw-400'>Join free today</button>
      </footer>
    </section>
  )
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
  setUserExists: PropTypes.func.isRequired
}

export default LoginForm