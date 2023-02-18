import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import { UserContextProvider } from './context/userContext'

function App () {
  return (
    <UserContextProvider>
      <div className="App font-sans pb-16">
        <Header/>
        <Outlet/>
      </div>
    </UserContextProvider>
  )
}

export default App
