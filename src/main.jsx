import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import Contact from './components/contact/Contact.jsx'
import User from './components/user/User.jsx'
import Github, { jasir } from './components/github/Github.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children : [
      {
        path: "",
        element: <Home />
      },
      {
        path:"about",
        element: <About />
      },
      {
        path:"contact",
        element: <Contact />
      },
      {
        path:"user/:userid",
        element: <User />
      },
      { 
        loader: jasir,
        path:"github",
        element: <Github />
      }
      
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
