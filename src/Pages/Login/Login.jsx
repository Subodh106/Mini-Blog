import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
    const[username ,setUsername]=useState('')
    const[password,setPassword]=useState('');
    const[userDetail,setuserDetail]=useState({})
    const handleSubmit = (e)=>{
        e.preventDefault();
        setuserDetail({})
        setuserDetail({username,password});
    }
return (
    <>
        <div className='login'>
            <div className='form shadow-lg'>
                <h1 className='text-3xl font-bold'>Login</h1>
                <div className="input-area">
                    <label htmlFor="username" className='text-xl font-semibold'>Enter your Username</label>
                    <input
                    type="text" 
                    placeholder='Enter you username' 
                    id='username'
                    className='text-sm' 
                    value={username}
                    onChange={(e)=>{setUsername(e.target.value)}}
                    />
                    <label htmlFor="password" className='text-xl font-semibold'>
                        Enter you password
                    </label>
                    <input 
                    type="text" 
                    placeholder='Enter you Password' 
                    id='password'
                    className='text-sm' 
                    value={password}
                    onChange={(e)=>{setPassword(e.target.value)}}
                    />
                    <button type='submit' onClick={handleSubmit} className='Read-More'>Submit</button>
                    <Link to={`/createaccount`}><p className='text-xs'>Create new Account</p></Link>
                </div>
            </div>
        </div>
    </>
)
}

export default Login