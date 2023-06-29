import {Route, Routes} from 'react-router-dom'

import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Todo from './components/Todoapp'
import Register from './components/register/index.js'
import Login from './components/login'
import Profile from './components/prfile'

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Register />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/todo" element={<Todo />} />
      <Route exact path="/profile" element={<Profile/>}/>
    </Routes>
  )
}

export default App
