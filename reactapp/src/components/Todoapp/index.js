import './index.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import TodoItem from '../TodoItem'

const profileImg =
  'https://res.cloudinary.com/dcauubpq9/image/upload/v1687947194/3135715_ileolg.png'

const getLocalStorage = () => {
  const storedList = JSON.parse(localStorage.getItem('todoList'))
  if (storedList) {
    return storedList
  } else {
    return []
  }
}

const Todo = () => {
  const [inputTodo, setInputTodo] = useState('')
  const [inputList, setInputList] = useState(getLocalStorage())
  const [toggleBtn, setToggleBtn] = useState(true)
  const [activeId, setActiveId] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(inputList))
  }, [inputList])

  const onChangeInput = event => {
    setInputTodo(event.target.value)
  }

  const onUpdateTodo = () => {
    const uData = inputList.map(each => {
      if (each.id === activeId) {
        return {...each, data: inputTodo}
      } else {
        return each
      }
    })

    setInputList(uData)
    setToggleBtn(true)
    setInputTodo('')
  }

  const onAddTodo = () => {
    if (inputTodo === '') {
      alert('please enter todo')
    } else {
      const newTodo = {
        id: new Date().getTime().toString(),
        data: inputTodo,
      }
      if (inputTodo !== '') {
        setInputList([...inputList, newTodo])
        setInputTodo('')
      }
    }
  }

  const deleteTodo = id => {
    const filteredTodo = inputList.filter(each => each.id !== id)
    setInputList(filteredTodo)
  }

  const onUpdate = id => {
    setToggleBtn(false)
    const updateItem = inputList.find(ele => {
      return ele.id === id
    })

    console.log(updateItem)
    setInputTodo(updateItem.data)
    setActiveId(id)
  }

  const onLogout = () => {
    navigate('/login')
  }

  const onProfile = () =>{
    navigate('/profile')
  }

  // console.log(inputList)

  return (
    <>
      <nav className="nav-container">
        <h1 className="logo">TODO</h1>
        <div>
        <button type="button" onClick={onProfile}>
          <img src={profileImg} alt="profile" className="profile-image" />
          </button>
          <button
            type="button"
            className="logout-button ml-5 mr-3"
            onClick={onLogout}
          >
            Logout
          </button>
        </div>
      </nav>
      <div className="container">
        <h1 className="text-center text-secondary mb-5"> Todo App</h1>
        <div className="d-flex flex-row justify-content-center;">
          <input
            placeholder="Enter Todo"
            value={inputTodo}
            className="form-control"
            type="text"
            onChange={onChangeInput}
          />
          {toggleBtn ? (
            <button
              type="button"
              className="btn-success bg-primary m-2 text-light button"
              onClick={onAddTodo}
            >
              ADD
            </button>
          ) : (
            <button
              type="button"
              className="btn-success m-2 text-success bg-warning button"
              onClick={onUpdateTodo}
            >
              UPDATE
            </button>
          )}
        </div>
        <ul className="m-5">
          {inputList.map(each => (
            <TodoItem
              key={each.id}
              item={each}
              deleteTodo={deleteTodo}
              onUpdate={onUpdate}
            />
          ))}
        </ul>
      </div>
      
    </>
  )
}

export default Todo
