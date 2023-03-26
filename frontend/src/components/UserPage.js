import PropTypes from 'prop-types'

import './UserPage.css'
import Header from './Header'
import ImageGallery from './ImageGallery'
import AddModal from './AddModal'

const UserPage = ({ setUser }) => {
  return (
    <>
      <Header setUser = {setUser} />
      <ImageGallery />
      <AddModal />
    </>
  )
}

UserPage.propTypes = {
  setUser: PropTypes.func.isRequired
}

export default UserPage