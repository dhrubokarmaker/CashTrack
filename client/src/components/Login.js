import { useState } from "react"
import {Link, useNavigate} from "react-router-dom"
import axios from 'axios'
import ClipLoader from "react-spinners/ClipLoader";

export const Login = () => {
  const [userName,setUserName] = useState("")
  const [password,setPassword] = useState("")
  const [loading,setLoading] = useState(false)
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
      setLoading(true)
      await axios.post('https://cashtrack-backend.onrender.com/api/v1/users/login',{
        username: userName, password
      })
      localStorage.setItem("isLoggedIn","true")
      setError()
      setLoading(false)
      navigate("/")
    }
    catch(err){
      setLoading(false)
      setError(err.response.data.message)
    }
  }
  
    return (
        <div className="all">
        <div className="wrapper">
        <h2>CashTrack</h2>
        {error && <label style={errorStyle}>{error}</label>}
        <form style={formStyle} onSubmit={handleLogin}>
            <label>Username</label>
            <input type="text" value={userName} onChange = {(e) => {setUserName(e.target.value)}} placeholder="Enter Username"></input>
            <label>Password</label>
            <input type="password" value={password} onChange = {(e) => {setPassword(e.target.value)}} placeholder="Enter Password"></input>
            <button className="add" disabled = {!userName || !password}>
              {loading?
                <ClipLoader
                  color={"black"}
                  size={15}></ClipLoader> :
                  "Log In"
              }</button>
            
        </form>
        <Link to="/signup" style={anchorStyle}>New user? Sign up.</Link>
        </div>
        </div>
  )
}
