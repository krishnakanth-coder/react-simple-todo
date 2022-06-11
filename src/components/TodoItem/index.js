import './index.css'

const TodoItem = props => {
  const {todo, delectTodo} = props
  const {title, id} = todo
  const deleteItem = () => {
    delectTodo(id)
  }
  return (
    <li className="container">
      <p className="title">{title}</p>
      <button type="button" className="button" onClick={deleteItem}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
