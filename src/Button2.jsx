import React from "react";

function Button2({className, ...rest}){
  return (
    <button  className= {   " w-16 h-14 text-2xl font-bold mx-1 my-1 bg-gray-800 text-white hover:bg-gray-900 hover:ring-1 hover:ring-yellow-300 ring-2 ring-gray-200 rounded-sm " + className }  {...rest} ></button>
  )
}
export default Button2;