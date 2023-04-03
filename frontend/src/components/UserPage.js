import { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

import './UserPage.css'
import Header from './Header'
import ImageGallery from './ImageGallery'
import AddModal from './AddModal'
import imageService from '../services/imageService'
import loginService from '../services/loginService'
import LoadingScreen from './LoadingScreen'

const UserPage = ({ user, setUser }) => {
  const [images, setImages] = useState([])
  const [searchedImages, setSearchedImages] = useState([])
  const [loaderVisibility, setLoaderVisbility] = useState(true)

  const userPageRef = useRef()
  const _refForLoader = useRef()

  useEffect( () => {
    imageService.getImages()
      .then(responseImages => {
        setImages(responseImages)
        
        setTimeout(() => {
          _refForLoader.current.fadeOut()
        }, 2000)
      })
  }, [])

  const searchImages = text => {
    setSearchedImages( 
      images.filter( image => 
        image.label.toLowerCase().includes(text)
      ) 
    )
  } 

  const createImage = async imageData => { 
    const responseData = await imageService.createImage(imageData)
    setImages([responseData, ...images])
  }

  const deleteImage = async imageId => { 
    await imageService.deleteImage(imageId)
    setImages(images.filter(image => image.id !== imageId))
  }

  const verifyUser = async password => {
    try {
      await loginService.login({ email: user.email, password })
      return true
    } catch (error) {
      return false
    }
  }

  if(loaderVisibility) {
    return <LoadingScreen ref={_refForLoader} handleAnimationEnd = {() => setLoaderVisbility(false)} />
  }

  return (
    <>
      <Header 
        setUser = {setUser} 
        searchImages = {searchImages}
        openAddPhotoModal = {() => userPageRef.current.openDialog()} 
      />

      <ImageGallery 
        images = {searchedImages.length === 0 ? images : searchedImages} 
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
