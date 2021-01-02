import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import '../style/home.css'
import ToDoList from './todolist'
// eslint-disable-next-line import/named
import { getToDo } from '../redux/reducers/todolist'
import Header from './header'

const Home = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getToDo())
  }, [])
  return (
    <div className="home">
      <Header />
      <Route exact path="/" component={() => <ToDoList />} />
    </div>
  )
}
export default Home
