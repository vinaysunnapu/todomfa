import './index.css'
import {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'


const Profile = () =>{
    let data = JSON.parse(localStorage.getItem('profileData'))
     // console.log(data)
     const {name,email,number,gender} = data
     const navigate = useNavigate()

     const onLogout = () =>{
        navigate('/login')
        
     }
    
    return (
        <div className="profile-container">
            <h1 className="profile-heading">Profile Details</h1>
            <div className="details">
            <p>Name : {name}</p>
            <p>Gender : {gender}</p>
            <p>Phone No : {number}</p>
            <p>Email : {email}</p>
            </div>
            <button type="button" className="logout-button margin" onClick={onLogout}>Logout</button>
        </div>
    )
}

export default Profile;