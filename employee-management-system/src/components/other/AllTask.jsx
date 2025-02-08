import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData,setUserData] = useContext(AuthContext);

//   console.log(authData.employees);

  return (
    <div className="bg-[#1c1c1c] p-5 mt-5 rounded space-y-1">
        <div 
          className="bg-red-400 py-2 px-4 flex justify-between rounded">
            <h2 className="text-xl w-1/5">Employee Name</h2>
            <h3 className="text-xl w-1/5">New Task</h3>
            <h5 className="text-xl w-1/5">Active Task</h5>
            <h5 className="text-xl w-1/5">Completed Task</h5>
            <h5 className="text-xl w-1/5">Failed Task Task</h5>
        </div>


        <div className="h-[80%]">
            {userData.map((element , idx) => {
                return (
                <div 
                key={idx}
                className="border-2 border-emerald-600 py-2 px-4 flex justify-between rounded mt-1">
                    <h2 className="text-xl w-1/5">{element.firstName}</h2>
                    <h3 className="text-xl w-1/5">{element.taskNumbers.newTask}</h3>
                    <h5 className="text-xl w-1/5">{element.taskNumbers.active}</h5>
                    <h5 className="text-xl w-1/5">{element.taskNumbers.completed}</h5>
                    <h5 className="text-xl w-1/5">{element.taskNumbers.failed}</h5>
                </div>
                );
            })}
        </div>
    </div>
  );
};

export default AllTask;
