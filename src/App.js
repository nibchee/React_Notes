import './App.css';
import TodoTable from './components/ToDoTable';

function App() {
  //array of objects
  const todos=[
    {rowNumber:1,rowDescription:'Feed puppy',rowAssigned:'User One'},
    {rowNumber:2,rowDescription:'Water plants',rowAssigned:'User Two'},
    {rowNumber:3,rowDescription:'Make Dinner',rowAssigned:'User Three'}]

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your Todos</div>
        <div className="card-body">
         <TodoTable todos={todos}/>
        </div>
      </div>
    </div>
  );
}

export default App;
