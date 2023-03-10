import PropTypes from 'prop-types'
import { useContext } from 'react'
import { userContext } from '../context/userContext'
import useHover from '../hooks/useHover'
const Image = (props) => {
  const { url, id, isFavorite } = props
  const { updatePhoto, addCartItem, removeCartItem, cartItems } = useContext(userContext)
  const { isHovered, refHover } = useHover()
  const isInCart = cartItems.some(item => item.id === id)

  const toggleIsFavorite = (e) => {
    const newPhoto = { isFavorite: !isFavorite }
    updatePhoto(id, newPhoto)
  }

  const heartIcon = <i
      onClick={toggleIsFavorite}
      className={`${isFavorite ? 'ri-heart-fill' : 'ri-heart-line'} 
      mx-10 my-6 favorite w-fit rounded-md absolute cursor-pointer inset-0 m-4 text-3xl h-fit`}
    >

    </i>

  const addIcon = isInCart
    ? <i onClick={(e) => { removeCartItem(id) }} className={'ri-shopping-cart-2-fill cart rounded-md absolute top-0 w-fit right-0 m-4 mx-10 my-6 text-3xl cursor-pointer h-fit'}></i>
    : <i onClick={(e) => { addCartItem({ id, url }) }} className={'ri-shopping-cart-2-line cart rounded-md absolute top-0 w-fit right-0 m-4 mx-10 my-6 text-3xl cursor-pointer h-fit'}></i>

  return (
    <div ref={refHover} className="relative font-bold" >
      <img className={`w-full mb-4 object-cover max-h-[20rem] ${isHovered && 'opacity-60'}`} src={url} alt={`image number ${id}`} />
      {isHovered && heartIcon}
      {isHovered && addIcon}
    </div>
  )
}

Image.propTypes = {
  url: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool,
  isInCart: PropTypes.bool
}

export default Image
