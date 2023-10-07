import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './Components/Home.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Profile from './Components/Profile.jsx'
import Events from './Components/Events.jsx'
import Groups from './Components/Groups.jsx'
import Login from './Components/Login.jsx'
import SignUp from './Components/SignUp.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: '/profile',
        element: <Profile/>
      },
      {
        path: '/events',
        element: <Events/>
      },
      {
        path: '/groups',
        element: <Groups/>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/signup',
        element: <SignUp/>
      }
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
