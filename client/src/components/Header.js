import axios from "axios"
import { useNavigate } from "react-router-dom"

export const Header = () => {
  const navbarStyle = {
    width: "100%",
    backgroundColor: "black",
    height: "50px"
  }
  const navbarNav = {
    maxWidth: "100%",
    display: "flex",
    justifyContent: "space-between",
    listStyle: "none",
    padding:0,
    paddingTop:"12px",
    color: "white",
    margin:0
  }
  const logoutStyle = {
    paddingRight:"8px",
    fontWeight:"700",
    fontSize:"0.9rem",
    textDecoration : "none",
    textAlign:"center",
    color: "white"
  }
  const navigate = useNavigate()
  const logout = async (e) => {
    e.preventDefault();
    try{
      await axios.post('https://cashtrack-backend.onrender.com/api/v1/users/logout',undefined,{withCredentials: true})
      localStorage.clear("isLoggedIn")
      navigate("/login")
    }
    catch(err){
      if(err.response.status === 401 || err.response.status === 403){
        navigate("/login")
      }
    }
  }
  return (
    <nav style={navbarStyle}>
      <ul style={navbarNav}>
        <li style={{width : "130px"}}><a href="/"style={{textDecoration: "none",color:"white",margin:0, paddingLeft: "14px",fontWeight:900,fontSize:"1.6rem"}}>CashTrack</a></li>
        <li style={{width : "60px", paddingTop: "5px"}}><a style= {logoutStyle} href="/" onClick={logout}>Logout</a></li>
      </ul>
    </nav>
  )
}
