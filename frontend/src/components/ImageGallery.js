import { useRef, useState } from 'react'
import PropTypes from 'prop-types'

import './ImageGallery.css'

import Image from './Image'
import DeleteModal from './DeleteModal'

const ImageGallery = ({ verifyUser, deleteImage, images }) => {
  const imageGalleryRef = useRef()
  const [deleteImageId, setDeleteImage] = useState('')

  const openDeletePhotoModal = () => {
    imageGalleryRef.current.openDialog()
  }
  
  return (
    <>
      <main className='image-gallery | container grid align-items-start' style={{ gap: '2rem' }}>
        {
          images.map(image =>
            <Image 
              key = {image.id}
              image = {image}
              setDeleteImage = {setDeleteImage}
              openDeletePhotoModal = {openDeletePhotoModal} 
            />
          )
        }
      </main>

      <DeleteModal 
        ref = {imageGalleryRef} 
        id = {deleteImageId} 
        verifyUser = {verifyUser}
        deleteImage = {deleteImage}
      />
    </>
  )
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  deleteImage: PropTypes.func.isRequired,
  verifyUser: PropTypes.func.isRequired
}

export default ImageGallery