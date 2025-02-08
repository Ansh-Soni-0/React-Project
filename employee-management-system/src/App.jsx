import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Deshboard/EmployeeDashboard'
import AdminDashboard from './components/Deshboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'


function App() {



  const [user, setUser] = useState(null)

  const [loggedInUserData , setLoggedInUserdata] = useState(null);

  const [userData , setUserData] = useContext(AuthContext)
  // console.log(authData);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    

    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)

      setUser(userData.role)
      
      setLoggedInUserdata(userData.data)
    }
    
  },[])


  const handleLogin = (email , password) => {
    //admin check
    if(email === 'admin@me.com' && password === '123'){
      setUser('admin');
      // console.log(user);
      localStorage.setItem('loggedInUser' , JSON.stringify({role:'admin'}))
    }
    //user check
    else if(userData){
      const employee = userData.find((e) => email == e.email && e.password == password);

      if(employee){
        setUser('employee');
        // console.log(user);
        setLoggedInUserdata(employee)
        localStorage.setItem('loggedInUser' , JSON.stringify({role:'employee' , data:employee}))
      }

    }
    else {
      alert("invalid credentials")
    }
  }

  
  
  
  // handleLogin('user@me.com',123)

  return (
    <>
      {!user ? <Login handleLogin={handleLogin}/> : ""}

      {user === 'admin' ? <AdminDashboard changeUser={setUser}/> : (user == 'employee' ?<EmployeeDashboard data={loggedInUserData} changeUser={setUser}/> : null)}


      {/* {!user ? <Login handleLogin={handleLogin}/> : ((user=='admin') ? <AdminDashboard /> : <EmployeeDashboard />)} */}

      

      {/* <EmployeeDashboard /> */}

      {/* <AdminDashboard /> */}
    </>
  )
}

export default App