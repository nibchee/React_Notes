import ToDoRowItem from "./ToDoRowItem"

function TodoTable(props) {
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Description</th>
                    <th scope='col'>Assigned</th>
                </tr>
            </thead>
            <tbody>

                {props.todos.map(todo => (
                    <ToDoRowItem
                        rowNumber={todo.rowNumber}
                        rowDescription={todo.rowDescription}
                        rowAssigned={todo.rowAssigned} />
                ))}

            </tbody>

        </table>
    )
}

export default TodoTable;