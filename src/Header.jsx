import React from "react"
import moment from 'moment';
import { SlCalculator } from 'react-icons/sl';
import { Link } from "react-router-dom";

function Header(setUser){
  
  
    const token = localStorage.getItem("token")


  const handleLogout= () => {
    localStorage.removeItem("token")
    
  }
  
  return (
    <div className=" flex justify-between pl-3 py-4 border border-gray-200 text-xl font-medium ">
    <h1>XTodo</h1>
      <div className= "mr-5 flex"> 
        { token && <Link to="/calculator"><SlCalculator className="mx-3 mt-1 text-xl"/></Link>}

</div>
    </div>
  )
}

export default Header;