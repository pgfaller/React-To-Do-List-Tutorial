import React, { useState } from 'react';
function App() {

  // Create new task
  const [newTask, setNewTask] = useState("")
  // Add to the task array
  const [tasks, setTasks] = useState([])

  return (
    <div>
      {tasks.map((toDo, id) => {
        return (
          <div>
            <span> {toDo} </span><button id={id} onClick={() => deleteTasks(id)}>Delete</button>
          </div>
        )
      })}
      <input type="text" value ={newTask} onChange={event => setNewTask(event.target.value)}/>
      <button onClick={addTasks}>Add</button>
      <h1>{newTask}</h1>
    </div>
  )

  function addTasks() {
    setTasks(prevArray => [...prevArray, newTask])
    setNewTask('')
  }

  function deleteTasks(id) {
    const tasksCopy = [...tasks]
    tasksCopy.splice(id, 1)
    setTasks(tasksCopy)
  }
};


export default App;