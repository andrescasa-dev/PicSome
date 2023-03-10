import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { userContext } from '../context/userContext'

const Header = props => {
  const { cartItems } = useContext(userContext)
  const cartIcon = cartItems.length > 0
    ? <i className="ri-shopping-cart-2-fill ri-fw ri-2x"></i>
    : <i className="ri-shopping-cart-2-line ri-fw ri-2x"></i>
  return (
    <header className='main-grid'>
      <div className="col-start-1 col-end-[-1] flex justify-between items-center p-6 px-10 mb-8 bg-gray-800 text-white">
        <Link to="/">
        <h2 className="text-4xl font-bold ">Pic Some</h2>
        </Link>

        <Link className='bg-gray-700 rounded-lg px-4 py-1' to='Cart'>
        {cartIcon}
        </Link>
      </div>
    </header>
  )
}

export default Header
