
import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/home'
import Auth from './components/auth'
import Main from './components/main'
import Notes from './components/notes'
import NotesDetail from './components/NotesDetails'
import Practice from './components/learn'
import Practice_view from './components/practice_view'
import Quiz from './components/quiz'
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
  ,
  {
    path : '/notes',
    element : <Notes/>,
  }
  ,
  {
    path : '/notes-view/:subject',
    element : <NotesDetail/>,
  }
  ,
  {
    path : '/practice',
    element : <Practice/>
  }
  ,
  {
    path : '/practice-view/:subject',
    element : <Practice_view/>
  }
  ,
  {
    path : '/Quiz',
    element : <Quiz/>
  }
      
])

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
