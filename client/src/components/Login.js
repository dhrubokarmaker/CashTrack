import { useState } from "react"
import {Link} from "react-router-dom"
import { useAuth } from "../contexts/AuthenticationContext"
import { Navigate } from 'react-router-dom'

export const Login = () => {
  const [userName,setUserName] = useState("")
  const [password,setPassword] = useState("")
        
  const {authStatus, setCurrentUser, setAuthStatus} = useAuth()


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

  const handleLogin = (e) => {
    e.preventDefault();
    if(userName === "dhrubo" && password === "123"){
        setCurrentUser("dhrubo")
        setAuthStatus(true)
    }
    else{
        console.log("baal falaiso")
    }
  }
  
    return (
        <div className="wrapper">
        <h2>CashTrack</h2>
        <form style={formStyle} onSubmit={handleLogin}>
            <label>Username</label>
            <input type="text" value={userName} onChange = {(e) => {setUserName(e.target.value)}} placeholder="Enter Username"></input>
            <label>Password</label>
            <input type="password" value={password} onChange = {(e) => {setPassword(e.target.value)}} placeholder="Enter Password"></input>
            <button className="add" disabled = {!userName || !password}>Log In</button>
        </form>
        <Link to="/signup" style={anchorStyle}>New user? Sign up.</Link>
        {authStatus && <Navigate to = "/" exact></Navigate>}
        </div>
  )
}
