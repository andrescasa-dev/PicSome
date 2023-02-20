import PropTypes from 'prop-types'
import { createContext, useEffect, useState } from 'react'
const API_URL = 'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'

const userContext = createContext()

const UserContextProvider = ({ children }) => {
  const [photos, setPhotos] = useState([])
  const [cartItems, setCartItems] = useState([])
  const updatePhoto = (id, newPhoto) => {
    const newPhotos = photos.map((curr, i) => {
      return curr.id === id ? { ...curr, ...newPhoto } : curr
    })
    setPhotos(newPhotos)
  }
  const addCartItem = (photo) => {
    setCartItems([...cartItems, photo])
  }
  const removeCartItem = (id) => {
    setCartItems((prevCartItems) => prevCartItems.filter(item => item.id !== id))
  }
  const removeAllCartItems = () => setCartItems([])

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setPhotos(data))
  }, [])

  return (
    <userContext.Provider value={{ photos, updatePhoto, addCartItem, removeCartItem, cartItems, removeAllCartItems }}>
      {children}
    </userContext.Provider>
  )
}

UserContextProvider.propTypes = {
  children: PropTypes.element
}

export { UserContextProvider, userContext }
