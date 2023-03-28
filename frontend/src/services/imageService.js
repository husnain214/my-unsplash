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

export default { createImage, setToken }