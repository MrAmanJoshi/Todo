import React from "react";
import { Navigate } from "react-router-dom"; 

const UserRoute= ({children, user})=>{
 const token =  localStorage.getItem("token")

  if(!token){
    return <Navigate to="/Login"/>
  }
  
  return children;
}

export default UserRoute;