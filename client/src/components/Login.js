import { useState } from "react"
import {Link, useNavigate} from "react-router-dom"
import axios from 'axios'

export const Login = () => {
  const [userName,setUserName] = useState("")
  const [password,setPassword] = useState("")
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
    fontWeight: 800,
    color: "red",
    fontSize: "14px"
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    try{
      await axios.post('/api/v1/users/login',{
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
            <button className="add" disabled = {!userName || !password}>Log In</button>
        </form>
        <Link to="/signup" style={anchorStyle}>New user? Sign up.</Link>
        </div>
  )
}
