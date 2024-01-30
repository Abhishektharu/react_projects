import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import GithubAccoutLoader from './GithubAccoutLoader';

function Github() {
  const data = useLoaderData();
    // useEffect to store the Object from api
    // const [data, setData] = useState([]);

    // // use fetch to call api
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/praty474')
    // .then(res => res.json())
    // .then(result =>{
    //     console.log(result);
    //     setData(result);
    // })
    // })
  return (
    <div className='bg-gray-600 text-white text-3xl p-4'>
      <img src={data.avatar_url}/>
      Followers: {data.followers}
    </div>
  )
}

export default Github

