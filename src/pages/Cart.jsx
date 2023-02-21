import { useContext } from 'react'
import CartItem from '../components/CartItem'
import { userContext } from '../context/userContext'

const Cart = (props) => {
  const DEFAULT_PRICE = 1
  const { cartItems, removeAllCartItems } = useContext(userContext)

  const items = cartItems.map(item => <CartItem key={item.id} {...item} />)

  const sumUp = cartItems.reduce((acc, curr) => { return curr.price ? curr.price + acc : DEFAULT_PRICE + acc }, 0)
  const msgTotal = cartItems.length > 0
    ? `Total: ${sumUp.toLocaleString('en-En', { style: 'currency', currency: 'USD' })}`
    : 'Your cart is empty'

  const order = (e) => {
    setTimeout(() => {
      removeAllCartItems()
      console.log('the order was done')
    }, 3000)
    e.target.innerText = 'Ordering...'
  }

  return (
    <main className='flex flex-col items-center gap-12 w-2/3 mx-auto'>
      <h1 className="text-3xl text-center p-10 uppercase">Check out</h1>
      <div className='grid auto-rows-[14rem] gap-3 p-4'>
        {items}
      </div>
      <p className='text-center text-4xl text-bold'>{msgTotal}</p>
      {cartItems.length > 0 && <button onClick={order} className='w-1/3 py-2 rounded-sm bg-gray-800 text-neutral-200 font-bold text-2xl'>Order</button>}
    </main>
  )
}

export default Cart
