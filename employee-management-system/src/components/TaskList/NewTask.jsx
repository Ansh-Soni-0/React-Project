import React from 'react'

function NewTask({data}) {
  return (
    <>
      <div className='h-full flex-shrink-0 p-5 w-[300px] bg-green-400 rounded-2xl'>
            <div className='flex justify-between items-center text-sm'>
                <h3 className='bg-red-600 px-3 py-1'>{data.category}</h3>
                <h4 className='text-sm'>{data.date}</h4>
            </div>

            <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
            <p className='text-sm mt-2'>{data.description}</p>

            <div className='mt-4'>
                <button className='bg-red-500 py-1 px-2 text-sm w-full'>Accept Task</button>
            </div>
        </div>
    </>
  )
}

export default NewTask
