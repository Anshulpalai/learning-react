import React from 'react'
import { useState } from 'react';

function Github() {
    const [data, setData] = useState([])
    fetch("https://api.github.com/users/anshulpalai").then((res)=> res.json()).then((data)=> setData(data));
  return (
    <div>Github followers: {data.followers}
    <img src={data.avatar_url} alt="git picture" />
    </div>
  )
}

export default Github