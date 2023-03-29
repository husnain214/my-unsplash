import { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

import './UserPage.css'
import Header from './Header'
import ImageGallery from './ImageGallery'
import AddModal from './AddModal'
import imageService from '../services/imageService'
import loginService from '../services/loginService'

const UserPage = ({ user, setUser }) => {
  const [images, setImages] = useState([])

  const userPageRef = useRef()

  useEffect( () => {
    imageService.getImages()
      .then(responseImages => {
        setImages(responseImages)
      })
  }, [])

  const openAddPhotoModal = () => {
    userPageRef.current.openDialog()
  }

  const createImage = async imageData => { 
    const responseData = await imageService.createImage(imageData)

    setImages([...images, responseData])
  }

  const deleteImage = async imageId => { 
    await imageService.deleteImage(imageId)
  }

  const verifyUser = async password => {
    try {
      await loginService.login({ email: user.email, password })
      return true
    } catch (error) {
      return false
    }
  }

  return (
    <>
      <Header 
        setUser = {setUser} 
        openAddPhotoModal = {openAddPhotoModal} 
      />

      <ImageGallery 
        images = {images} 
        deleteImage = {deleteImage}
        verifyUser = {verifyUser}
      />

      <AddModal 
        ref = {userPageRef} 
        addImage = {createImage} 
      />
    </>
  )
}

UserPage.propTypes = {
  user: PropTypes.object.isRequired,
  setUser: PropTypes.func.isRequired
}

export default UserPage
