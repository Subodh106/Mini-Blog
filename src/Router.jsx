import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import App from './App.jsx'
import About from './Pages/About/About.jsx'
import Home from "./Pages/Home/Home.jsx"
import PostDetails from './Pages/PostDetails/PostDetails.jsx'


const router = createBrowserRouter(
createRoutesFromElements(
    <Route path='/' element={<App/>}>
    <Route index path='/home' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/postdetails' element={<PostDetails/>}></Route>
    </Route>
)
)

export default router