// import React, { useEffect, useState } from 'react'
import { useLoaderData } from "react-router-dom"

const Github = () => {

    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/prabhatkumargupta00')
    //     .then(response => response.json())
    //     .then(data =>{
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])

    const data = useLoaderData();


  return (
    <div className='mx-[15%] flex justify-between text-center m-5 bg-gray-600 text-white p-4 text-3xl rounded-lg' >
          <div className="text-left m-6">
              <h2 className="mb-4 text-4xl" >Name : {data.name} </h2>
              <h2 className="mb-4 text-4xl" >Location : {data.location}</h2>
              <h2 className="mb-4 text-4xl"  >Followers : {data.followers}</h2>
          </div>
          <img className='rounded-full' src={data.avatar_url} alt="git picture" width={300}/>
    </div>
  )
}

export default Github

// eslint-disable-next-line react-refresh/only-export-components
export const githubInfoLoader = async () =>{
    const response = await fetch('https://api.github.com/users/prabhatkumargupta00')

    return response.json();
}