import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css";
import "./Components/Navbar/Navbar.css"
import "./Pages/Home/Home.css"
import "./Pages/About/About.css"
import "./Pages/PostDetails/PostDetails.css"
import "./Components/Footer/Footer.css"
import "./Pages/Login/Login.css"
import {RouterProvider } from 'react-router-dom'
import router from './Router.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
