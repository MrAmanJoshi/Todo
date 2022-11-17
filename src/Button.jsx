import React from "react";

function Button({className, ...rest}){
  return (
    <button  className= {   " px-4 py-2 bg-yellow-400 text-white hover:bg-yellow-500 hover:ring-1 hover:ring-yellow-600 ring-2 ring-yellow-400 rounded-lg " + className }  {...rest} ></button>
  )
}
export default Button;