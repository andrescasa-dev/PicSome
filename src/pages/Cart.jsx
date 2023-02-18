import { useContext } from 'react'
import CartItem from '../components/CartItem'
import { userContext } from '../context/userContext'

const Cart = (props) => {
  const DEFAULT_PRICE = 1
  const { cartItems } = useContext(userContext)
  const items = cartItems.map(item => <CartItem key={item.id} {...item} />)
  const sumUp = cartItems.reduce((acc, curr) => { return curr.price ? curr.price + acc : DEFAULT_PRICE + acc }, 0)
  const total = cartItems.length > 0
    ? `Total: ${sumUp}`
    : 'You do not have any items in cart, lets add some pictures'
  return (
    <main className='flex flex-col items-center gap-12'>
      <h1 className="text-3xl text-center p-10">Check out</h1>
      <div className='grid auto-rows-[10rem] gap-4 p-4'>
        {items}
      </div>
      <p className='text-center text-4xl text-bold'>{total}</p>
      {cartItems.length > 0 && <button className='w-1/3 py-2 rounded-sm bg-gray-800 text-neutral-200 font-bold text-2xl'>Order</button>}
    </main>
  )
}

export default Cart
