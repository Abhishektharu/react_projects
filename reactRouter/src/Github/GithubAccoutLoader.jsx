import React from 'react'
import { useLoaderData } from 'react-router-dom';
const GithubAccoutLoader = async ()=>{
        const response = await fetch('https://api.github.com/users/abhishektharu');
        console.log(response);
        return response.json();}

export default GithubAccoutLoader