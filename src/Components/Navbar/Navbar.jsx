import { NavLink } from 'react-router-dom'
const Navbar = () => {
return (
    <>
    <div className='nav-main'>
        <div className="logo font-semibold cursor-pointer ">
            <NavLink to='/home'><h1 className='text-2xl'>Mini Blog</h1> </NavLink>
        </div>
        <nav className='flex justify-center align-center gap-10 list-none text-xl cursor-pointer'>
            <NavLink to="/home" className={`home link text-lg`}>Home</NavLink>
            <NavLink to="/login" className={`Login link text-lg`}>Log In</NavLink>
        </nav>
    </div>
    </>
)
}

export default Navbar
