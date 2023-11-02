import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { completeTask, editTask } from '../Redux/actions/taskActions'

const Task = ({task}) => {
  const dispatch = useDispatch()

  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(task.description)

  const handleEdit = (e) => {
    e.preventDefault();
    let editedTask = {
      id: task.id,
      description: editValue,
      isDone: false
    }
    dispatch(editTask(editedTask));
    setIsEditing(false)
  }
  return (
    <div>
      <div className={task.isDone ? "completed" : ""}>
        {isEditing ? (
          <form onSubmit={handleEdit}>
            <input type="text" 
            value={editValue}
            onChange={(e) => {setEditValue(e.target.value)}} />
            <button>Save</button>
          </form>
        ) : (
          <div>
          <p onClick={() => dispatch(completeTask(task))}>{task.description}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
        )}
      </div>
    </div>
  )
}

export default Task