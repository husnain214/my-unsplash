import { useState } from 'react'
import PropTypes from 'prop-types'
import parkRainImage from '../images/park-in-rain.jpg'
import './HomePage.css'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

const HomePage = ({ setUser }) => {
  const [userExists, setUserExists] = useState(true)

  return (
    <>
      <main className='grid'>
        <aside>
          <img 
            className='decor-image bg-secondary-300'
            src={parkRainImage} 
            alt='park in rain' 
            decoding='async'
            role='presentation'
          />
        </aside>
        { userExists && <LoginForm setUserExists = {setUserExists} setUser = {setUser} /> }
        { !userExists && <SignupForm setUserExists = {setUserExists} /> }
      </main>
    </>
  )
}

HomePage.propTypes = {
  setUser: PropTypes.func.isRequired
}

export default HomePage