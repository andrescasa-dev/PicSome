import { Link } from 'react-router-dom'

const Header = props => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <Link to="/">
      <h2 className="text-3xl font-bold ">Pic Some</h2>
      </Link>

      <Link to='Cart'>
      <i className="ri-shopping-cart-line ri-fw ri-2x"></i>
      </Link>
    </div>
  )
}

export default Header
