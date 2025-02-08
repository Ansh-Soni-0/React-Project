import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {

    const [userData,setUserData] = useContext(AuthContext);

    

    const [taskTitle , setTaskTitle] = useState('');
    const [taskDescription , setTaskDescription] = useState('');
    const [taskDate , setTaskDate] = useState('');
    const [asignTo , setAsignTo] = useState('');
    const [category , setCategory] = useState('');

    const [newTask , setNewtask] = useState({});

    const submitHandler = (e) => {
        e.preventDefault()

        // console.log(taskTitle,taskDescription,taskDate,asignTo,category);

        setNewtask({taskTitle , taskDescription , taskDate , category , active:false , newTask:true , failed:false , completed:false})

        // console.log(task);

        const data = userData
        console.log(data);
        

        // console.log(data)

        data.forEach((element) => {
            // console.log(element.firstName)
            if(asignTo === element.firstName){
                // console.log(element.tasks)

                element.tasks.push(newTask);

                // console.log(element);

                element.taskNumbers.newTask = element.taskNumbers.newTask + 1;


                
            }
        })

        
        setUserData(data)
        console.log(data);
        



        setTaskTitle('')
        setTaskDescription('')
        setTaskDate('')
        setAsignTo('')
        setCategory('')
    }

  return (
    <div className='p-5 bg-[#1c1c1c] mt-5 rounded'>
            <form 
            onSubmit={(e) => {submitHandler(e)}}
            className='flex flex-wrap items-start justify-between w-full'>

                <div className='w-1/2'>
                    <div>

                        <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                        <input 
                        value={taskTitle}
                        onChange={(e) => {
                            setTaskTitle(e.target.value)
                        }}
                        className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                        type="text" 
                        placeholder='Make ui design' />

                    </div>

                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                        <input 
                        value={taskDate}
                        onChange={(e) => {
                            setTaskDate(e.target.value)
                        }}
                        className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                        type="date"  />
                    </div>

                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Asign to</h3>
                        <input 
                        value={asignTo}
                        onChange={(e) => {
                            setAsignTo(e.target.value)
                        }}
                        className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                        type="text" 
                        placeholder='employee name' />
                    </div>
                    
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                        <input 
                        value={category}
                        onChange={(e) => {
                            setCategory(e.target.value)
                        }}
                        className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                        type="text" 
                        placeholder='design, dev, etx' />
                    </div>
                </div>
               

                <div className='w-1/2 flex flex-col items-start'>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea 
                    value={taskDescription}
                    onChange={(e) => {
                        setTaskDescription(e.target.value)
                    }}
                    className='resize-none w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400'
                    name="" 
                    id="" 
                    cols="30" rows="10" 
                    placeholder='write something'></textarea>

                    <button className='bg-emerald-500 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full py-2'>Create Task</button>
                </div>
                
                

                
            </form>
    </div>
  )
}

export default CreateTask