import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
return (
    <>
        <div className='login'>
            <div className='form shadow-lg'>
                <h1 className='text-3xl font-bold'>Login</h1>
                <div className="input-area">
                    <label htmlFor="username" className='text-xl font-semibold'>Enter your Username</label>
                    <input type="text" placeholder='Enter you user name' id='username'
                    className='text-sm' />
                    <label htmlFor="password" className='text-xl font-semibold'>
                        Enter you password
                    </label>
                    <input type="text" placeholder='Enter you Password' id='password'
                    className='text-sm' />
                    <button className='Read-More'>Submit</button>
                    <Link to={`/forgetpassword`}><p className='text-xs'>Forget Password</p></Link>
                </div>
            </div>
        </div>
    </>
)
}

export default Login