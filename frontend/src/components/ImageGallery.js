import PropTypes from 'prop-types'

import './ImageGallery.css'

import Image from './Image'

const ImageGallery = ({ images, openDeletePhotoModal }) => {
  return (
    <main className='container grid' style={{ gap: '2rem' }}>
      {
        images.map(image => {
          <Image 
            key = {image.id}
            label = {image.label}
            url = {image.url} 
            openDeletePhotoModal = {openDeletePhotoModal} 
          />
        })
      }
    </main>
  )
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  openDeletePhotoModal: PropTypes.func.isRequired
}

export default ImageGallery