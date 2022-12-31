import { useState } from "react"
import {Link} from "react-router-dom"

export const Signup = () => {
  const [userName,setUserName] = useState("")
  const [password,setPassword] = useState("")
  const [confirmpassword,setConfirmPassword] = useState("")

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
    console.log({userName,password})
  }
  
    return (
        <div className="wrapper">
        <h2>CashTrack</h2>
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