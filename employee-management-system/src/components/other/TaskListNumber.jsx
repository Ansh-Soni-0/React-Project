import React from 'react'

function TaskListNumber({data}) {
    // console.log(data.taskNumbers)
  return (
    <div className='flex justify-between mt-10 gap-4'>

        <div
        className='rounded-2xl w-[45%] p-10 bg-red-400 py-6 px-9'>
            <h2 className='text-3xl font-semibold'>
                {data.taskNumbers.newTask}
            </h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>

        <div 
        className='rounded-2xl w-[45%] p-10 bg-blue-400 py-6 px-9'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.completed}</h2>
            <h3 className='text-xl font-medium'>Complete Task</h3>
        </div>

        <div 
        className='rounded-2xl w-[45%] p-10 bg-green-400 py-6 px-9'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.active}</h2>
            <h3 className='text-xl font-medium'>Accepted Task</h3>
        </div>

        <div 
        className='rounded-2xl w-[45%] p-10 bg-yellow-400 py-6 px-9'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.failed}</h2>
            <h3 className='text-xl font-medium'>Failed Task</h3>
        </div>
      
    </div>
  )
}

export default TaskListNumber
