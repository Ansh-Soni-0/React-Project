import React, { useState } from 'react'

function Login({handleLogin}) {

  // console.log(handleLogin)

  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');



  const submitHandler = (e) => {

      e.preventDefault();
      handleLogin(email , password)

      // console.log("email is" , email);
      // console.log("password is" , password);

      setEmail("");
      setPassword("");

  }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 p-20 border-emerald-600 rounded-2xl'>

            <form

            onSubmit={(e) => {submitHandler(e)}}
            
            className='flex flex-col items-center justify-center '>

                <input 
                required
                className='border-2 border-emerald-600 py-4 px-5 rounded-full text-xl outline-none bg-transparent placeholder:text-gray-400'
                type="email" 
                placeholder='Enter Your Email'
                
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />

                <input 
                required
                className='border-2 border-emerald-600 py-4 px-5 rounded-full text-xl outline-none bg-transparent placeholder:text-gray-400 mt-4'
                type="password" 
                placeholder='Enter password'
                
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <button
                className='w-full border-2 border-none bg-emerald-600 py-4 px-5 rounded-full text-xl outline-none mt-4 cursor-pointer'
                >Log in</button>

            </form>

        </div>
    </div>
  )
}

export default Login
