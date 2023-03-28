import { useState, useRef } from 'react'
import PropTypes from 'prop-types'

import './UserPage.css'
import Header from './Header'
import ImageGallery from './ImageGallery'
import AddModal from './AddModal'
import DeleteModal from './DeleteModal'
import imageService from '../services/imageService'

const UserPage = ({ user, setUser }) => {
  const [images, setImages] = useState(user.images)
  const refForAddModal = useRef()
  const refForDeleteModal = useRef()

  console.log(images)

  const openAddPhotoModal = () => {
    refForAddModal.current.openDialog()
  }

  const openDeletePhotoModal = () => {
    refForDeleteModal.current.openDialog()
  }

  const createImage = async imageData => { 
    const responseData = await imageService.createImage(imageData)

    setImages([...images, responseData])
  }

  const deleteImage = () => { console.log('SAY SIKE AGAIN!')}

  return (
    <>
      <Header 
        setUser = {setUser} 
        openAddPhotoModal = {openAddPhotoModal} 
      />

      <ImageGallery images = {images} openDeletePhotoModal = {openDeletePhotoModal} />

      <AddModal 
        ref = {refForAddModal} 
        addImage = {createImage} 
      />

      <DeleteModal 
        ref = {refForDeleteModal} 
        deleteImage = {deleteImage} 
      />
    </>
  )
}

UserPage.propTypes = {
  user: PropTypes.object.isRequired,
  setUser: PropTypes.func.isRequired
}

export default UserPage
