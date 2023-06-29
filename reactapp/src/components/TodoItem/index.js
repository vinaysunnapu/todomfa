import './index.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const TodoItem = props => {
  const {item, deleteTodo, onUpdate} = props
  const {id, data} = item
  const onDeleteTodo = () => {
    deleteTodo(id)
  }

  const onClickUpdate = () => {
    onUpdate(id)
  }

  return (
    <li className="d-flex flex-row mt-3 bg-info p-2 list">
      <p className="todo-para text-light text">{data}</p>
      <button
        type="button"
        className="btn-danger bg-danger m-1"
        onClick={onDeleteTodo}
      >
        Delete
      </button>
      <button
        type="button"
        className="btn-primary bg-success m-1"
        onClick={onClickUpdate}
      >
        Edit
      </button>
    </li>
  )
}

export default TodoItem
