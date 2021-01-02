import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { postToDo } from '../redux/reducers/todolist'
import '../style/header.css'

const Header = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const dispatch = useDispatch()
  return (
    <div className="header container">
      <div className="header_title">ToDoList</div>
      <div className="header_div">Create new</div>

      <div className="header_input_block">
        <input
          className="header_title_input"
          name="title"
          type="text"
          value={title}
          placeholder="add title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <input
          className="header_description_input"
          name="description"
          type="text"
          value={description}
          placeholder="add description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <button
          className="header_input_block_button"
          type="button"
          onClick={() => {
            dispatch(postToDo(title, description))
            setTitle('')
            setDescription('')
          }}
        >
          Add ToDo
        </button>
      </div>
    </div>
  )
}
export default Header
