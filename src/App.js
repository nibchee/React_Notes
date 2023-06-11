import React, { useState } from 'react'
import './App.css';
import TodoTable from './components/ToDoTable';
import NewTodoForm from './components/NewTodoForm';

function App() {
  //array of objects
  // const todos = [
  //   { rowNumber: 1, rowDescription: 'Feed puppy', rowAssigned: 'User One' },
  //   { rowNumber: 2, rowDescription: 'Water plants', rowAssigned: 'User Two' },
  //   { rowNumber: 3, rowDescription: 'Make Dinner', rowAssigned: 'User Three' },
  //   { rowNumber: 4, rowDescription: 'Charge Phone Battery', rowAssigned: 'User Four' }
  // ] 

  //as useStae gives 2 values as output so here we are destructing arrays
  const [todos, setTodos] = useState(
    [
      { rowNumber: 1, rowDescription: 'Feed puppy', rowAssigned: 'User One' },
      { rowNumber: 2, rowDescription: 'Water plants', rowAssigned: 'User Two' },
      { rowNumber: 3, rowDescription: 'Make Dinner', rowAssigned: 'User Three' },
      { rowNumber: 4, rowDescription: 'Charge Phone Battery', rowAssigned: 'User Four' }
    ]
  )
  const addTodo = (description, assigned) => {
    let rowNumber = 0;

    if (todos.length > 0) {
      rowNumber = todos[todos.length - 1].rowNumber + 1;
      const newTodo = {
        rowNumber: rowNumber,
        rowDescription: description,
        rowAssigned: assigned
      }
      //here istaed pushing we are destructing using setTodod function
      //  todos.push(newTodo);
      setTodos(todos => [...todos, newTodo])
      //  setTodos(todos.push(newTodo));
      console.log(todos);
    } else {
      rowNumber = 1;
    }
    console.log('Our add Todo btn has been clicked')
  }

  const deleteTodo = (deleteTodoRowNumber) => {
    let filtered = todos.filter(function (value) {
      return value.rowNumber !== deleteTodoRowNumber;
    });

    setTodos(filtered);
  }

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your Todos</div>
        <div className="card-body">
          <TodoTable todos={todos} deleteTodo={deleteTodo} />
          <button className='btn btn-primary' >
            Add new todo
          </button>
          <NewTodoForm addTodo={addTodo} />
        </div>
      </div>
    </div>
  );
}

export default App;
