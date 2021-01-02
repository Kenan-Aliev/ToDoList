import React from 'react'
import { useSelector } from 'react-redux'
import '../style/todolist.css'
import ShowToDoList from './showtodolist'

const ToDoList = () => {
  const todolist = useSelector((s) => s.todolist.toDo)
  return (
    <div className="todolist">
      {todolist.map((todo) => {
        return <ShowToDoList key={todo._id} todo={todo} />
      })}
    </div>
  )
}
export default ToDoList
