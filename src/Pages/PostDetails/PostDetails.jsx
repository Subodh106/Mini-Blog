import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Data } from '../../Data/Data'
import { Link } from 'react-router-dom'
const PostDetails = () => {
  const{id}=useParams()
  const [data,setData]=useState({})
  useEffect(()=>{
    const Posts = Data[id-1];
    console.log(Posts)
    setData();
    setData(Posts)
  })
  console.log(data.title)
  return (
    <>
      <div className='postDetails'>
        <div className="title text-center text-3xl font-bold">
          <h1>{data.title}</h1>
        </div>
        <div className="author text-lg text-center">
          Author: {data.author}
        </div>
        <div className="image shadow-lg">
          <img src={data.image} alt="image" />
        </div>
        <div className="paragraph">
          {data.paragraph}
        </div>
        <div className="buttons">
        <Link to="/home"><button className="return Read-More">
          Back
        </button></Link>
        <button className="share Read-More">
          Share
        </button>
      </div>
    </div>
  </>
  )
}

export default PostDetails