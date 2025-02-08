import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

function TaskList({data}) {
    // console.log(data);
    
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto w-full py-5 mt-10 flex items-center justify-start gap-5 flex-nowrap' >

        {
            data.tasks.map((element,idx) => {

                if(element.active){
                    return <AcceptTask key={idx} data={element}/>
                }
                if(element.newTask){
                    return <NewTask key={idx}  data={element}/>
                }
                
                if(element.Completed){
                    return <CompleteTask key={idx}  data={element}/>
                }
                
                if(element.failed){
                    return <FailedTask key={idx}  data={element}/>
                }
                
            })
        }

        {/* <AcceptTask />

        <CompleteTask />

        <NewTask />

        <FailedTask /> */}
       
      
    </div>
  )
}

export default TaskList
