import PropTypes from 'prop-types'

import logo from '../images/logo.svg'
import searchIcon from '../images/searchIcon.svg'
import './Header.css'

const Header = ({ setUser }) => {
  const handleLogout = () => {
    localStorage.removeItem('UnsplashAppUser')
    setUser(null)
  }

  return (
    <header className='container flex align-items-center'>
      <a href='#' className='header-brand flex justify-content-center align-items-center text-primary fw-800'>
        <img 
          src={logo} 
          alt='logo' 
          decoding='async'
          height='30'
          width='30' />

        <div className='nav-brand--text'>
          <span className='brand-title fs-300'>My Unplash</span>
          <span className='brand-subtitle fs-100'>devchallenges.io</span>
        </div>
      </a>

      <div className='search-bar flex justify-content-center align-items-center'>
        <img 
          src={searchIcon}
          alt='search icon'
          decoding='async'
          height='20'
          width='20' />

        <label htmlFor='search-bar' className='sr-only'>Search images by their names</label>
        <input 
          type='text' 
          name='search-bar'
          id='search-bar'
          className='fs-300 text-primary'
          placeholder='Search by name' />
      </div>

      <button 
        type='button' 
        className='add-photo-btn bg-accent-300 fs-300 text-secondary-100'>Add a photo</button>

      <button 
        type='button' 
        onClick = {handleLogout}
        className='add-photo-btn bg-primary fs-300 text-secondary-100'>Logout</button>
    </header>
  )
}

Header.propTypes = {
  setUser: PropTypes.func.isRequired
}

export default Header