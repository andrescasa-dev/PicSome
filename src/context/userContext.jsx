import PropTypes from 'prop-types'
import { createContext, useEffect, useState } from 'react'
const API_URL = 'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'

const userContext = createContext()

const UserContextProvider = ({ children }) => {
  const [photos, setPhotos] = useState([])
  const updatePhoto = (id, newPhoto) => {
    const newPhotos = photos.map((curr, i) => {
      return curr.id === id ? { ...curr, ...newPhoto } : curr
    })
    setPhotos(newPhotos)
  }
  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setPhotos(data))
  }, [])

  return (
    <userContext.Provider value={{ photos, updatePhoto }}>
      {children}
    </userContext.Provider>
  )
}

UserContextProvider.propTypes = {
  children: PropTypes.element
}

export { UserContextProvider, userContext }
