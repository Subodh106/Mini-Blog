import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import App from './App.jsx'
import Home from "./Pages/Home/Home.jsx"
import PostDetails from './Pages/PostDetails/PostDetails.jsx'
import Login from "./Pages/Login/Login.jsx"

const router = createBrowserRouter(
createRoutesFromElements(
    <Route path='/' element={<App/>}>
    <Route path='/' element={<Home/>}></Route>
    <Route path="/home" element={<Home/>}></Route>
    <Route path='/postdetails/:id' element={<PostDetails/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    </Route>
)
)

export default router