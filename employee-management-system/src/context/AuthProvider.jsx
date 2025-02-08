import React, { createContext, useState ,useEffect } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage';

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    // localStorage.clear()

    const [userData , setUserData] = useState(null)

    // let data = getLocalStorage();
    // console.log(data)

    useEffect(() => {
        setLocalStorage()
        const {employees} = getLocalStorage();

        setUserData(employees);
    }, [])
    


  return (
    <div>
        <AuthContext.Provider value={[userData,setUserData]}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider