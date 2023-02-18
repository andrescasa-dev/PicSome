import PropTypes from 'prop-types'
import { useContext, useState } from 'react'
import { userContext } from '../context/userContext'
const Image = (props) => {
  const { url, id, isFavorite } = props
  const { updatePhoto, addCartItem, removeCartItem } = useContext(userContext)
  const [isHovered, setIsHovered] = useState(false)
  const [isInCart, setIsInCart] = useState(false)

  const toggleIsHovered = (e) => setIsHovered(wasHovered => !wasHovered)
  const toggleIsFavorite = (e) => {
    const newPhoto = { isFavorite: !isFavorite }
    updatePhoto(id, newPhoto)
  }

  const heartIcon = <i onClick={toggleIsFavorite} className={`${isFavorite ? 'ri-heart-fill' : 'ri-heart-line'} mx-8 favorite w-fit rounded-md absolute cursor-pointer inset-0 m-4 text-2xl h-fit`}></i>
  const addIcon = isInCart
    ? <i onClick={(e) => { removeCartItem(id); setIsInCart(false) }} className={'ri-close-circle-line cart rounded-md absolute top-0 w-fit right-0 m-4 mx-8 text-2xl cursor-pointer h-fit'}></i>
    : <i onClick={(e) => { addCartItem({ id, url }); setIsInCart(true) }} className={'ri-add-circle-line cart rounded-md absolute top-0 w-fit right-0 m-4 mx-8 text-2xl cursor-pointer h-fit'}></i>

  return (
    <div className="relative" onMouseEnter={toggleIsHovered} onMouseLeave={toggleIsHovered} >
      {isHovered && heartIcon}
      {isHovered && addIcon}
      <img className="w-full max-w-md max-h-[20rem]" src={url} alt={`image number ${id}`} />
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
