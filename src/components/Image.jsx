import PropTypes from 'prop-types'
import { useState } from 'react'

const Image = (props) => {
  const { url, id, updatePhoto, isFavorite } = props
  const [isHovered, setIsHovered] = useState(false)
  const toggleIsHovered = (e) => setIsHovered(wasHovered => !wasHovered)
  const toggleIsFavorite = (e) => {
    const newPhoto = { isFavorite: !isFavorite }
    console.log({ newPhoto, updatePhoto })
    updatePhoto(id, newPhoto)
  }

  const heartIcon = <i onClick={toggleIsFavorite} className={`${isFavorite ? 'ri-heart-fill' : 'ri-heart-line'} mx-8 favorite w-fit rounded-md absolute cursor-pointer inset-0 m-4 text-2xl h-fit`}></i>
  const addIcon = <i className="ri-add-circle-line cart rounded-md absolute top-0 w-fit right-0 m-4 mx-8 text-2xl cursor-pointer h-fit"></i>

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
  updatePhoto: PropTypes.func.isRequired
}

export default Image
