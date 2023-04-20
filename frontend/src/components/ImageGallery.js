import { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import Masonry from 'react-masonry-css'

import './ImageGallery.css'

import Image from './Image'
import DeleteModal from './DeleteModal'

const ImageGallery = ({ verifyUser, deleteImage, images }) => {
  const imageGalleryRef = useRef()
  const [deleteImageId, setDeleteImage] = useState('')

  const openDeletePhotoModal = () => {
    imageGalleryRef.current.openDialog()
  }

  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1
  }
  
  return (
    <>
      <main className='image-gallery | container'>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
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
        </Masonry>
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