
import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/home'
import Auth from './components/auth'
import Main from './components/main'
// import './styles/media.css'

const router = createBrowserRouter([
  {
    path : '/',
    element : <Home/>,
    
  }
  ,
  {
    path : '/auth',
    element : <Auth/>,
  }
  ,
  {
    path : '/main',
    element : <Main/>,
  }
  
  
      
])

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
