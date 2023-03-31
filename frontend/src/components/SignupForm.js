import { useState } from 'react'
import PropTypes from 'prop-types'
import userService from '../services/userService'

const SignupForm = ({ setUserExists }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmedPassword, setConfirmedPassword] = useState('')

  const handleSignup = async event => {
    event.preventDefault()

    if(password != confirmedPassword) {
      alert('passwords do not match')
      return
    }

    try {
      await userService.createUser({
        name,
        email,
        password
      })

      setName('')
      setEmail('')
      setPassword('')
      setConfirmedPassword('')
      
      alert('You can login now')
    } catch (error) {
      alert('Enter required valid details')
    }
  }

  return (
    <section className='form-container grid justify-items-stretch align-content-center'>
      <form action='' className='homepage--form | grid bg-secondary-100 border-radius-100' onSubmit={handleSignup}>
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
          onChange={ ({ target }) => setName(target.value) }
          value={ name }
          autoComplete='off'
          required
          className='input-text | fs-400 fw-400 text-primary' />

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
          onChange={ ({ target }) => setPassword(target.value) }
          value={password}
          autoComplete='off'
          minLength='3'
          required
          className='input-text | fs-400 fw-400 text-primary' />

        <label 
          htmlFor='confirm-password' 
          className='fs-400 fw-500 text-secondary-300'>Confirm Password</label>
        <input 
          type='password' 
          id='confirm-password' 
          name='confirm-password' 
          placeholder='Confirm your password' 
          onChange={ ({ target }) => setConfirmedPassword(target.value) }
          value={ confirmedPassword }
          autoComplete='off'
          minLength='3'
          required
          className='input-text | fs-400 fw-400 text-primary' />

        <button 
          type='submit' 
          name='submit-btn' 
          id='submit-btn' 
          className='cta-btn bg-accent-200 text-secondary-100 fs-400 fw-400 border-radius-100'>Sign up</button>
      </form>

      <footer className='text-secondary-200 fs-300 fw-500 flex justify-content-center'>
        Already have an account?
        <button 
          type='button' 
          onClick = { () => setUserExists(true) }
          className='text-accent-200 fs-300 fw-400 '>Login</button>
      </footer>
    </section>
  )
}

SignupForm.propTypes = {
  setUserExists: PropTypes.func.isRequired
}

export default SignupForm