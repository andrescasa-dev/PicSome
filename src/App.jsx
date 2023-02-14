import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import userContext from './context/userContext'

function App () {
  return (
    <userContext.Provider value={{ name: 'andres' }}>
    <div className="App font-sans">
      <Header/>
      <Outlet/>
    </div>
    </userContext.Provider>
  )
}

export default App
