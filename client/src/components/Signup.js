import { useState } from "react"
import {Link, useNavigate} from "react-router-dom"
import axios from 'axios'

export const Signup = () => {
  const [userName,setUserName] = useState("")
  const [password,setPassword] = useState("")
  const [confirmpassword,setConfirmPassword] = useState("")
  const [error,setError] = useState()
  const navigate = useNavigate()


  const formStyle = {
    marginLeft: "40px",
    marginRight: "40px"
  }

  const anchorStyle = {
    marginLeft: "40px",
    display: "block",
    fontWeight: 700,
    textDecoration : "none"

  }

  const errorStyle = {
    marginLeft: "40px",
    display: "block",
    fontWeight: 900,
    color: "red",
    fontSize: "14px"
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    try{
      await axios.post('/api/v1/users/',{
        username: userName, password
      })
      localStorage.setItem("isLoggedIn","true")
      setError()
      navigate("/")
    }
    catch(err){
      setError(err.response.data.message)
    }
  }
  
    return (
        <div className="wrapper">
        <h2>CashTrack</h2>
        {error && <label style={errorStyle}>{error}</label>}
        <form style={formStyle} onSubmit={handleLogin}>
            <label>Username</label>
            <input type="text" value={userName} onChange = {(e) => {setUserName(e.target.value)}} placeholder="Enter Username"></input>
            <label>Password</label>
            <input type="password" value={password} onChange = {(e) => {setPassword(e.target.value)}} placeholder="Enter Password"></input>
            <label>Confirm Password</label>
            <input type="password" value={confirmpassword} onChange = {(e) => {setConfirmPassword(e.target.value)}} placeholder="Confirm Password"></input>
            <button className="add" disabled = {!userName || !password}>Sign Up</button>
        </form>
        <Link  to="/login" style={anchorStyle}>Already have an account? Log in.</Link>
        </div>
  )
}