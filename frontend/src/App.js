import { useState, useEffect } from 'react'

import './design-system.css'
import './css-reset.css'
import HomePage from './components/HomePage'
import UserPage from './components/UserPage'
import imageService from './services/imageService'

const App = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const loggedUserJSON = localStorage.getItem('UnsplashAppUser')

    if(loggedUserJSON) {
      const loggedUser = JSON.parse(loggedUserJSON)
      setUser(loggedUser)
      console.log(loggedUser)
      imageService.setToken(loggedUser.token)
    }
  }, [])
  
  return (
    <>
      { user === null ? <HomePage setUser = {setUser} /> : <UserPage setUser = {setUser} user={user} /> }
    </>
  )
}

export default App