import axios from 'axios'

const initialState = {
  toDo: []
}

const GET_TODO = 'GET_TODO'

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TODO:
      return { ...state, toDo: action.toDo }
    default:
      return state
  }
}

export const getToDo = () => {
  return (dispatch) => {
    axios('/api/v1/todos').then(({ data }) => dispatch({ type: GET_TODO, toDo: data }))
  }
}

export const postToDo = (title, description) => {
  return (dispatch, getState) => {
    const newToDo = {
      title,
      description,
      date: new Date()
    }
    const post = [...getState().todolist.toDo,newToDo]
    if (title && description) {
       // eslint-disable-next-line no-unused-expressions
      axios.post('/api/v1/todos', { newToDo })
      return dispatch({ type: GET_TODO, toDo: post })
    }
   return console.log(post)
  }
}

export const patchToDo = (title, description, date) => {
  return (dispatch, getState) => {
    const toDoList = [...getState().todolist.toDo]
    const newToDo = {
      title,
      description,
      date
    }
    const patchedToDolist = toDoList.map((todo) => {
      return todo.date === date ? { ...newToDo } : todo
    })
    console.log(patchedToDolist)
    axios.patch('/api/v1/todos', { newToDo })
    return dispatch({ type: GET_TODO, toDo: patchedToDolist })
  }
}

export const deleteToDo = (date) => {
  return (dispatch, getState) => {
    const toDoList = [...getState().todolist.toDo]
    const deletedToDo = toDoList.filter((todo) => todo.date !== date)
    axios.delete(`/api/v1/todos/${date}`)
    return dispatch({ type: GET_TODO, toDo: deletedToDo })
  }
}
