import { useRef } from 'react'
import PropTypes from 'prop-types'

import './UserPage.css'
import Header from './Header'
import ImageGallery from './ImageGallery'
import AddModal from './AddModal'

const UserPage = ({ setUser }) => {
  const userPageRef = useRef()

  const openAddPhotoModal = () => {
    if(!userPageRef.current) return

    userPageRef.current.openDialog()
  }

  const createImage = () => { console.log('SAY SIKE!') }

  return (
    <>
      <Header 
        setUser = {setUser} 
        openAddPhotoModal = {openAddPhotoModal} 
      />
      <ImageGallery />
      <AddModal 
        ref = {userPageRef} 
        addImage = {createImage} 
      />
    </>
  )
}

UserPage.propTypes = {
  setUser: PropTypes.func.isRequired
}

export default UserPage