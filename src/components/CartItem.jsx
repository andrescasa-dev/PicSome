import PropTypes from 'prop-types'
import { useContext } from 'react'
import { userContext } from '../context/userContext'
import useHover from '../hooks/useHover'

const CartItem = ({ id, url, price }) => {
  const { removeCartItem } = useContext(userContext)
  const { isHovered, refHover } = useHover()

  const trashIcon = isHovered ? 'ri-delete-bin-fill' : 'ri-delete-bin-line'

  return (
    <div className='flex gap-8 items-center mx-auto bg-gray-600 p-8'>
      <i
        className={'cursor-pointer ri-lg p-3 py-4 bg-gray-700 rounded-lg ' + trashIcon}
        onClick={() => removeCartItem(id)}
        ref={refHover}
      >
      </i>
      <div className='flex h-full items-center justify-between'>
        <img className='h-full' src={url} alt={`img-${id}`} />
        <p className='text-2xl px-20'>${price || '1.00'}</p>
      </div>
    </div>
  )
}

CartItem.propTypes = {
  id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  price: PropTypes.number
}

export default CartItem
