import React from 'react'
import Header from '../other/Header'
import TaskListNumber from '../other/TaskListNumber'
import TaskList from '../TaskList/TaskList'

function EmployeeDashboard(props) {
  // console.log(data)
  return (
    <>
      <div className='p-10 bg-[#1c1c1c] h-screen'>
        <Header changeUser={props.changeUser} data={props.data}/>
        <TaskListNumber data={props.data}/>
        <TaskList data={props.data}/>
      </div>
    </>
  )
}

export default EmployeeDashboard
