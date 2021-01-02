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
    let post = [...getState().todolist.toDo]
    if (title && description) {
      post = [...post, newToDo]
      return dispatch({ type: GET_TODO, toDo: post })
    }
    // eslint-disable-next-line no-unused-expressions
    return axios.post('/api/v1/todos', { newToDo })
  }
}

export const patchToDo = (title, description, id) => {
  return (dispatch,getState) => {
    const toDoList = [...getState().todolist.toDo]
    const newToDo = {
      _id: id,
      title,
      description,
      date: new Date()
    }
    const patchedToDolist = toDoList.map((todo) => {
      return todo._id === id ? {...newToDo } : todo
    })
    console.log(patchedToDolist)
    axios.patch('/api/v1/todos', { newToDo })
    return dispatch({ type: GET_TODO, toDo: patchedToDolist })
  }
}

export const deleteToDo=(id)=>{
  return (dispatch,getState)=>{
    const toDoList=[...getState().todolist.toDo]
    const deletedToDo=toDoList.filter(todo=>todo._id !== id)
    axios.delete(`api/v1/todos/${id}`)
    return dispatch({type:GET_TODO,toDo:deletedToDo})
  }
}
