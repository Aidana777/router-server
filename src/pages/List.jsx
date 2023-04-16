import React, { useEffect, useState } from 'react'
import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/users';
const List = () => {
  const [post, setPost] = useState([])

  useEffect(() => {
    axios
      .get(url)
      .then(data => {
        setPost(data.data);
        console.log(data.data);
      })
  }, [])

  return (
    <div className='container' >
<ul>
  <li>Name</li>
  <li>UserName</li>
  <li>Email</li>
</ul>
      {post.map(user => {
        return (
          <div  key={user.id}>
            <ul>
              <li>{user.name}</li>
            </ul>
            <ul>
              <li>{user.username}</li>
            </ul>
            <ul>
              <li>{user.email}</li>
            </ul>
          </div>
        )
      })}

    </div>
  )
}

export default List