import PropTypes from 'prop-types'
const CartItem = ({ id, url, price }) => {
  return (
    <div className='flex items-center justify-between mx-auto bg-gray-600 p-8'>
      <img className='h-full' src={url} alt={`img-${id}`} />
      <p className='text-2xl px-20'>${price || '1.00'}</p>
    </div>
  )
}

CartItem.propTypes = {
  id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  price: PropTypes.number
}

export default CartItem
