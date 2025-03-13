import NavBar from "./components/NavBar"
import { IoSearch } from "react-icons/io5";
import { FaCirclePlus } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { collection, getDocs } from 'firebase/firestore'

import { db } from "./config/firebase"



function App() {


  const [contacts , setContacts] = useState([]);

  useEffect(() => {

    const getContacts = async () => {
        try {
          const contactsRef = collection(db , "contacts");
          const constactSnapshot = await getDocs(contactsRef);
          // const contactLists = constactSnapshot.docs.map((doc) => doc.data())
          console.log(constactSnapshot)
        } catch (error) {
          console.log(error)
        }
    };

    getContacts();

  } , [])



  return (
    <div className="max-w-[370px] m-auto px-4">
      <NavBar />

      <div className="flex gap-2">
        <div className="flex relative items-center flex-grow">
          <IoSearch className="text-white text-2xl absolute ml-1 "/>


          <input type="text" className="border border-white bg-transparent rounded-md p-2 text-white h-10 flex-grow pl-8 outline-none" placeholder="Search..." />

        </div>

    
            <FaCirclePlus className="text-5xl text-white cursor-pointer"/>
       
      </div>
    </div>
  )  
}

export default App
