import { useContext } from 'react'
import userContext from '../context/userContext'

const Cart = props => {
  const context = useContext(userContext)
  return (
    <main>
      <h1 className="text-3xl">Check out</h1>
      <p>hello {context.name}</p>
    </main>
  )
}

export default Cart
