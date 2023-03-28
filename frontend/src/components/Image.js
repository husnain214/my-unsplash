import PropTypes from 'prop-types'

const Image = ({ label, url, openDeletePhotoModal }) => {
  return (
    <article tabIndex='0'>
      <img src={url} alt={label} />
      
      <div className='image-overlay grid align-content-sb'>
        <button 
          onClick={openDeletePhotoModal}
          className='delete-btn align-self-start justify-self-end fw-500 text-accent-200 fs-200' 
          type='button'>Delete</button>
        <p className='image-label align-self-end fw-700 text-secondary-100 fs-500'>{label}</p>
      </div>
    </article>
  )
}

Image.propTypes = {
  url: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  openDeletePhotoModal: PropTypes.func.isRequired
}

export default Image