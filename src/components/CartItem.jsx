import PropTypes from 'prop-types'
const CartItem = ({ id, url, price }) => {
  return (
    <div className='flex items-center justify-between w-1/2 mx-auto'>
      <img className='h-full' src={url} alt={`img-${id}`} />
      <p>${price || '1.00'}</p>
    </div>
  )
}

CartItem.propTypes = {
  id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  price: PropTypes.number
}

export default CartItem
