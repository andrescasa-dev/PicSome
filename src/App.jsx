import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import { UserContextProvider } from './context/userContext'

function App () {
  return (
    <UserContextProvider>
      <>
        <Header/>
        <Outlet/>
      </>
    </UserContextProvider>
  )
}

export default App
