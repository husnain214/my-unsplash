import { useState } from 'react'
import PropTypes from 'prop-types'
import parkRainImage from '../images/park-in-rain.jpg'
import './HomePage.css'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import imageService from '../services/imageService'
import userService from '../services/userService'
import loginService from '../services/loginService'

const HomePage = ({ setUser }) => {
  const [userExists, setUserExists] = useState(true)

  const accountLogin = async credentials => {
    try {
      const user = await loginService.login(credentials)
      localStorage.setItem('UnsplashAppUser', JSON.stringify(user))
      imageService.setToken(user.token)
      setUser(user)
    }
    catch (error) {
      alert('wrong email or password')
    }
  }

  const createAccount = async credentials => {
    try {
      await userService.createUser(credentials)
    }
    catch {
      throw new Error('Could not create new user')
    }
  }

  return (
    <>
      <main className='homepage grid'>
        <aside>
          <img 
            className='decor-image bg-secondary-300'
            src={parkRainImage} 
            alt='park in rain' 
            decoding='async'
            role='presentation'
          />
        </aside>
        { userExists && <LoginForm setUserExists = {setUserExists} login={accountLogin} /> }
        { !userExists && <SignupForm setUserExists = {setUserExists} signup={createAccount} /> }
      </main>
    </>
  )
}

HomePage.propTypes = {
  setUser: PropTypes.func.isRequired
}

export default HomePage