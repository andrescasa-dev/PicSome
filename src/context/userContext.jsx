import PropTypes from 'prop-types'
import { createContext, useEffect, useState } from 'react'
const API_URL = 'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'

const userContext = createContext()

const UserContextProvider = ({ children }) => {
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setPhotos(data))
  }, [])

  return (
    <userContext.Provider value={{ photos }}>
      {children}
    </userContext.Provider>
  )
}

UserContextProvider.propTypes = {
  children: PropTypes.element
}

export { UserContextProvider, userContext }
