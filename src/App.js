import './App.css';
import ToDoRowItem from './components/ToDoRowItem';

function App() {
  const todos=[
    {rowNumber:1,rowDescription:'Feed puppy',rowAssigned:'User One'},
    {rowNumber:2,rowDescription:'Water plants',rowAssigned:'User Two'},
    {rowNumber:3,rowDescription:'Make Dinner',rowAssigned:'User Three'}]
  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your Todos</div>
        <div className="card-body">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Description</th>
                <th scope="col">Assigned</th>
              </tr>
            </thead>
            <tbody>
              <ToDoRowItem 
              rowNumber={todos[0].rowNumber} 
              rowDescription={todos[0].rowDescription} 
              rowAssigned={todos[0].rowAssigned}/>

              <ToDoRowItem 
              rowNumber={todos[1].rowNumber} 
              rowDescription={todos[1].rowDescription} 
              rowAssigned={todos[1].rowAssigned}/>

              <ToDoRowItem 
              rowNumber={todos[2].rowNumber} 
              rowDescription={todos[2].rowDescription} 
              rowAssigned={todos[2].rowAssigned}/>
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
