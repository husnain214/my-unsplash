import axios from 'axios'
const baseUrl = '/api/images'

let token = null

const setToken = (newToken) => {
  token = `bearer ${newToken}`
}

const createImage = async imageData => {
  const config = {
    headers: { Authorization: token }
  }

  const response = await axios.post(baseUrl, imageData, config)
  return response.data
}

const getImages = async () => {
  const config = {
    headers: { Authorization: token }
  }

  const response = await axios.get(baseUrl, config)
  return response.data
}

const deleteImage = async id => {
  const config = {
    headers: { Authorization: token }
  }

  return await axios.delete(`${baseUrl}/${id}`, config)
}

export default { createImage, getImages, deleteImage, setToken }