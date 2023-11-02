import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../Redux/actions/taskActions'

const AddTask = () => {
  const [task, setTask] = useState("")
  const dispatch = useDispatch()
  const handleSubmit = () => {
    if(task) {
      dispatch(addTask(task))
      setTask("")
    } else {
      alert("Please enter a task.")
    }
  }
  return (
    <div>
      <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={handleSubmit}>Add Task</button>
    </div>
  )
}

export default AddTask