import React, { useState } from 'react'


function Header(props) {
  // console.log(data)
  // const [username, setUsername] = useState('')

  // if(!data){
  //   setUsername('Admin')
  // } else {
  //   setUsername(data.firstName)
  // }

  const logOutUser = () => {
    localStorage.setItem('loggedInUser' , '')

    props.changeUser('');
    
    // console.log(props.changeUser);

    // window.location.reload()
  }

  return (
    <div className='flex items-end justify-between '>
      <h1 className='text-2xl font-medium'>hello <br /> <span className='text-3xl'>username👋</span> </h1>
      <button 
      onClick={logOutUser}
      className='bg-red-600 text-white px-5 py-2 rounded-4xl text-center cursor-pointer text-lg font-medium'>Log Out</button>
    </div>
  )
}

export default Header
