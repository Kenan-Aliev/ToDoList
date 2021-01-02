import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteToDo, patchToDo } from '../redux/reducers/todolist'
import '../style/todolist.css'

const ShowToDoList = ({ todo }) => {
  const dispatch = useDispatch()
  const [edit, setEdit] = useState(false)
  const [editTitle, setEditTitle] = useState(todo.title)
  const [editDescription, setEditDescription] = useState(todo.description)
  return (
    <div className="todo" key={todo._id}>
      {!edit ? (
        <div>
          <div className="todo_title">{todo.title}</div>
          <div className="todo_description">{todo.description}</div>
          <button className="todo_edit" type="button" onClick={() => setEdit(true)}>
            Edit
          </button>
          <button className="todo_delete" type="button" onClick={()=>dispatch(deleteToDo(todo._id))}>
            Delete
          </button>
        </div>
      ) : (
        <div>
          <input
            className="title_edit_input"
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          />
          <br />
          <input
            className="description_edit_input"
            type="text"
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
          />
          <br />
          <button
            className="save_button"
            type="button"
            onClick={() => dispatch(patchToDo(editTitle,editDescription , todo._id))}
          >
            Save
          </button>
          <button className="cancel_button" type="button" onClick={() => setEdit(false)}>
            Cancel
          </button>
        </div>
      )}
    </div>
  )
}

export default ShowToDoList
