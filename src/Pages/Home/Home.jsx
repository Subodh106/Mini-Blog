import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Data } from '../../Data/Data'

const Home = () => {
const [delay , setdelay]=useState(false)
useEffect(()=>{
    setTimeout(() => {
    setdelay(true)
    }, 4000);
},[])




return (
    <div className='Home p-10'>
        <div className="texts">
            <h1 className='heading text-3xl font-semibold'>Welcome to the Blog🚀</h1>
            <p className='text-center text-lg text-gray-500'>Discover awesome post below!</p>
        </div>
        <div className='Content'>
            {
                (!delay)?<div class="spinner-container " id="spinner">
                <div class="spinner"></div>
                </div>:<div className='posts'>
                    {Data.map((data)=>{
                        return(
                        <div className='card shadow-2xl' key={data.id}>
                            <img src={data.image} alt="image" />
                            <h3 className='text-center font-semibold'>{data.title}</h3>
                            <p className='text-center font-lg'>{data.content}</p>
                            <Link to={`/postdetails/${data.id}`}><button className='Read-More'>Read More →</button></Link>
                        </div>
                    )})}
                </div>
            }
        </div>
    </div>
)
}

export default Home