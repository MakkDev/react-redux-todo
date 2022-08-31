import React from 'react'
import '../styles.css'
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { deleteTodo, addTodo } from '../actions';


export default function TodoContainer() {

const todos = useSelector(state => state);
const dispatch = useDispatch();

  return (
    <div className="container">
    <h1 className="title"> To-Do List</h1>
    <div className="input__container">
        <input placeholder="New task name" type="text" id="input__field"/>
        <button onClick={() => dispatch(addTodo()) } id="addTodoButton">Submit</button>
    </div>
    <div id="todoList">{todos}</div>
    <button onClick={() => dispatch(deleteTodo()) } id="clearListButton">Clear List</button>
    <span className="item__count-container">Tasks Remaining: <span id="itemCount"></span> </span>
</div>
  )
}
