import './App.css';
import TodoTable from './components/ToDoTable';

function App() {
  //array of objects
  const todos = [
    { rowNumber: 1, rowDescription: 'Feed puppy', rowAssigned: 'User One' },
    { rowNumber: 2, rowDescription: 'Water plants', rowAssigned: 'User Two' },
    { rowNumber: 3, rowDescription: 'Make Dinner', rowAssigned: 'User Three' },
    { rowNumber: 4, rowDescription: 'Charge Phone Battery', rowAssigned: 'User Four' }
  ]

  const addTodo = () => {
    if (todos.length > 0) {
      const newTodo = {
        rowNumber: todos.length + 1,
        rowDescription: 'New Todo',
        rowAssigned: 'user Three'
      }
      todos.push(newTodo);
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
        </div>
      </div>
    </div>
  );
}

export default App;
