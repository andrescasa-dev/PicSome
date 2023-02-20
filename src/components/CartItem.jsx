import PropTypes from 'prop-types'
import { useContext } from 'react'
import { userContext } from '../context/userContext'

const CartItem = ({ id, url, price }) => {
  const { removeCartItem } = useContext(userContext)

  const toggleFillTrashIcon = (e) => {
    e.target.classList.toggle('ri-delete-bin-fill')
    e.target.classList.toggle('ri-delete-bin-line')
  }

  return (
    <div className='flex gap-8 items-center mx-auto bg-gray-600 p-8'>
      <i onMouseEnter={toggleFillTrashIcon}
        onMouseLeave={toggleFillTrashIcon}
        onClick={() => removeCartItem(id)}
        className="ri-delete-bin-line cursor-pointer ri-lg p-3 py-4 bg-gray-700 rounded-lg"
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
