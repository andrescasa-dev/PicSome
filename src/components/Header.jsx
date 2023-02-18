import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { userContext } from '../context/userContext'

const Header = props => {
  console.log(userContext)
  const { cartItems } = useContext(userContext)
  const cartIcon = cartItems.length > 0
    ? <i className="ri-shopping-cart-2-fill ri-fw ri-2x"></i>
    : <i className="ri-shopping-cart-2-line ri-fw ri-2x"></i>
  return (
    <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <Link to="/">
      <h2 className="text-3xl font-bold ">Pic Some</h2>
      </Link>

      <Link to='Cart'>
      {cartIcon}
      </Link>
    </div>
  )
}

export default Header
