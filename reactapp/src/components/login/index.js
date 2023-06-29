import './index.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
const imageUrl =
  'https://res.cloudinary.com/dcauubpq9/image/upload/v1687851561/0204.png_860_akowvz.png'

const getUserDetails = () => {
  const data = JSON.parse(localStorage.getItem('profileData'))
  if (data) {
    return data
  } else {
    return {}
  }
}

const Login = () => {
  const [usersDetails, setUserDetails] = useState(
    JSON.parse(localStorage.getItem('usersData')),
  )
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [cond, setCond] = useState(false)
  const navigate = useNavigate()
  const [profile, setProfile] = useState(getUserDetails())
  const [todoCond,setTodoCond] = useState(false)

  // console.log(usersDetails)

  useEffect(() => {
    localStorage.setItem('profileData', JSON.stringify(profile))
    // console.log(profile)
    if (todoCond){
          navigate('/todo')
    }
  }, [profile])

  const onChangeUsername = event => {
    setCond(false)

    setUsername(event.target.value)
  }

  const onChangePassword = event => {
    setCond(false)

    setPassword(event.target.value)
  }

  const onSubmitForm = event => {
    event.preventDefault()

    // console.log('submit')
    // console.log(usersDetails[0].username)
    // console.log(username)
    const user = usersDetails.find(each => {
      if (each.username === username) {
        return true
      }
    })

    //  console.log(user)

    if (user) {
      if (user.password === password) {
        setCond(false)
        setProfile(user)
        setTodoCond(true)
        // navigate('/todo')
      } else {
        setCond(true)
      }
    } else {
      setCond(true)
    }
  }

  const onRegister = () => {
    navigate('/')
  }

  

  return (
    <div className="login-container">
      <img className="login-image" src={imageUrl} />
      <form className="login-form-container" onSubmit={onSubmitForm}>
        <h1 className="login-heading">Login</h1>
        <div className="form-sub">
          <label className="input-label mt-3" htmlFor="username">
            USERNAME
          </label>
          <br />
          <input
            type="text"
            value={username}
            id="username"
            className="username-input-field form-control"
            placeholder="Username"
            onChange={onChangeUsername}
          />
          <br />

          <label className="input-label mt-1" htmlFor="password">
            PASSWORD
          </label>
          <br />
          <input
            type="password"
            value={password}
            id="password"
            className="password-input-field  form-control"
            placeholder="Password"
            onChange={onChangePassword}
          />
          <button type="submit" className="login-button mt-3">
            Login
          </button>
          {cond && (
            <p className="condition">username and password did not match</p>
          )}
        </div>
        <button type="button" className="re-button" onClick={onRegister}>
          Register
        </button>
      </form>
    </div>
  )
}

export default Login
