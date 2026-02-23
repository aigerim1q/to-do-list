'use client'
import { useState, useEffect} from 'react'

interface Task {
  id: number
  title: string
  done: boolean
  createdAt: string
}

export default function Home() {
  const [tasks ,setTasks] = useState<Task[]>([])
  const [ title ,setTitle]= useState('')
  const [ loading ,setLoading] = useState(false)

  useEffect(() => {
    fetch('http://localhost:3001/tasks')
    .then(res => res.json())
    .then(data => setTasks(data))

  }, [])

  const createTask = () => {
    fetch('http://localhost:3001/tasks', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({title})
  })    
  .then(res => res.json())
  .then(newTask => setTasks([...tasks, newTask]))

  }

  const updateTask = (id:number, done: boolean ) => {
    fetch(`http://localhost:3001/tasks/${id}`, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({done})
  })    
  .then(res => res.json())
  .then(updated => setTasks(tasks.map(t => t.id === id ? updated : t)))
  }

  const deleteTask = (id:number ) => {
    fetch(`http://localhost:3001/tasks/${id}`, {
      method: 'DELETE',
  })    
  .then(() => setTasks(tasks.filter(t => t.id !== id)))
  }

  
  
  return (
  <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">To Do List</h1>
      <input
        className="border rounded-lg px-4 py-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="NewTask"
      />
      <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 mb-4" onClick={createTask}>ADD</button>
      {tasks.map(task => (
      <div key={task.id} className="flex items-center justify-between py-2 border-b">
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => updateTask(task.id, !task.done)}
        />
        <span className="text-black">{task.title}</span>
        <button className="text-red-400 hover:text-red-600" onClick={() => deleteTask(task.id)}>DELETE</button>
      </div>
    ))}
    </div>
  </div>
)

}