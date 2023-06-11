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
  const addTodo = () => {
    if (todos.length > 0) {
      const newTodo = {
        rowNumber: todos.length + 1,
        rowDescription: 'New Todo',
        rowAssigned: 'user Three'
      }
      //here istaed pushing we are destructing using setTodod function
      //  todos.push(newTodo);
      setTodos(todos => [...todos, newTodo])
      //  setTodos(todos.push(newTodo));
      console.log(todos);
    }
    console.log('Our add Todo btn has been clicked')
  }

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your Todos</div>
        <div className="card-body">
          <TodoTable todos={todos} />
          <button className='btn btn-primary' onClick={addTodo}>
            Add new todo
          </button>
          <NewTodoForm />
        </div>
      </div>
    </div>
  );
}

export default App;
