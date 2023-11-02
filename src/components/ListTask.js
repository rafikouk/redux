import React, { useState } from 'react'
import Task from './Task'

const ListTask = ({tasks}) => {
  const [filter, setFilter] = useState("All")
  console.log(filter);
  return (
    <div>
      <div>
        <button onClick={() => setFilter("All")}>All</button>
        <button onClick={() => setFilter("To Do")}>To Do</button>
        <button onClick={() => setFilter("Done")}>Done</button>
      </div>
      <div>
        {(filter === "Done"
          ? tasks.filter(task => task.isDone === true)
          : filter === "To Do"
            ? tasks.filter(task => task.isDone === false)
            : tasks).map(task => {
              return (
                <Task key={task.id} task={task}/>
            )
          })}
      </div>
    </div>
  )
}

export default ListTask
