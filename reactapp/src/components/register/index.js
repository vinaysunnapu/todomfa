import './index.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
const imageUrl =
  'https://res.cloudinary.com/dcauubpq9/image/upload/v1687843831/register_eysbks.png'

const getFromLocalStoarge = () => {
  const userData = JSON.parse(localStorage.getItem('usersData'))
  if (userData) {
    return userData
  } else {
    return []
  }
}

const Register = () => {
  const [userDetails, setUserDetails] = useState(getFromLocalStoarge())

  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [username, setUsername] = useState()
  const [password, setPassword] = useState('')
  const [gender, setGender] = useState('')
  const [navCond, setNavCond] = useState(false)
  const [reCond, setReCond] = useState(false)
  let navigate = useNavigate()

  useEffect(() => {
    localStorage.setItem('usersData', JSON.stringify(userDetails))
    if (navCond) {
      navigate('/login')
    }
  }, [userDetails, navigate])

  const onChangeFullname = event => {
    setFullName(event.target.value)
  }

  const onChangeEmail = event => {
    setEmail(event.target.value)
  }

  const onChangeNumber = event => {
    setNumber(event.target.value)
  }

  const onChangeGender = event => {
    setGender(event.target.value)
  }

  const onChangeUsername = event => {
    setUsername(event.target.value)
  }

  const onChangePassword = event => {
    setPassword(event.target.value)
  }

  const onRegister = event => {
    event.preventDefault()
    if (
      fullName !== '' &&
      email !== '' &&
      number !== '' &&
      gender !== '' &&
      username !== '' &&
      password !== ''
    ) {
      const newUser = {
        id: new Date().getTime().toString(),
        name: fullName,
        email: email,
        number: number,
        gender: gender,
        username: username,
        password: password,
      }

      setReCond(false)
      setUserDetails([...userDetails, newUser])
      setFullName('')
      setEmail('')
      setGender(null)
      setNumber('')
      setPassword('')
      setUsername('')
      setNavCond(true)
    } else {
      setReCond(true)
    }
  }

  return (
    <div className="register-container">
      <img alt="register" src={imageUrl} className="reg-image" />
      <div className="reg-container">
        <h1 className="reg-heading">Registration</h1>
        <form className="reg-form-container" onSubmit={onRegister}>
          <label htmlFor="fullname" className="reg-label mt-2">
            Full Name{' '}
          </label>
          <input
            value={fullName}
            type="text"
            id="fullname"
            className="form-control input"
            onChange={onChangeFullname}
          />
          <label htmlFor="email" className="reg-label mt-2">
            Email{' '}
          </label>
          <input
            value={email}
            type="text"
            id="email"
            className="form-control input"
            onChange={onChangeEmail}
          />
          <label htmlFor="phn" className="reg-label mt-2">
            Phone Number{' '}
          </label>
          <input
            value={number}
            type="text"
            id="phn"
            className="form-control input"
            onChange={onChangeNumber}
          />
          <label className="reg-label mt-2">Gender </label>
          <div className="gender-container">
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              onChange={onChangeGender}
            />
            <label htmlFor="male" className="reg-label">
              Male
            </label>
            <input
              type="radio"
              id="male"
              name="gender"
              value="female"
              onChange={onChangeGender}
            />
            <label htmlFor="male" className="reg-label">
              Female
            </label>
          </div>
          <label htmlFor="username" className="reg-label mt-2">
            Create Username{' '}
          </label>
          <input
            value={username}
            type="text"
            id="username"
            className="form-control input"
            onChange={onChangeUsername}
          />
          <label htmlFor="password" className="reg-label mt-2">
            Enter Password{' '}
          </label>
          <input
            value={password}
            type="password"
            id="password"
            className="form-control input"
            onChange={onChangePassword}
          />
          <button type="submit" className="register-button mt-3">
            Register
          </button>
          {reCond && <p className="re-cond">please enter all the details</p>}
        </form>
      </div>
    </div>
  )
}

export default Register
