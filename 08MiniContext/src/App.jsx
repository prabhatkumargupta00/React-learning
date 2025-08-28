import './App.css'
import Login from './Componentss/Login'
import Profile from './Componentss/Profile'
import UserContextProvider from './Context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
      <h1>React with chai and share is important.</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
