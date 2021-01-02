import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import todolist from './todolist'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    todolist
  })

export default createRootReducer
