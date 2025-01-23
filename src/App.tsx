
import { useState } from 'react'
import './App.css'
import InputField from './components/inputField'
import Todolist from './components/Todolist'
export interface Todo{
  id:number,
  todo:string,
}

const App: React.FC = () => {
  const [todo, settodo] = useState<string>("")
  const [todos, settodos] = useState<Todo[]>([])
  console.log(todos)

  return (
    <>
    <div className='home'>
      <h1>Todo App</h1>
      <InputField todo={todo} settodo={settodo} todos={todos} settodos={settodos} />
      <Todolist   todos={todos} />
      </div>
    </>
  )
}

export default App
