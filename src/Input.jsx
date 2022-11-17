import React from "react"

const Input = ({onChange, onBlur, touched, error, type, value, id, name, placeholder})=> {
  
let borderClass = "border-yellow-400";
  if(touched && error ){
  borderClass = "border-red-400"
  }
  return(
   <div className="mx-5 my-2"> 
    <input placeholder={placeholder} className={" h-10 border border-yellow-400 "+ borderClass }
      name={name}
      type={type}
      onChange={onChange}
      onBlur = {onBlur}
       value= {value}
      error={error}
      touched={touched}
      id={id}
      />
  
      {touched && error && <div className="text-red-400">{error}</div> }
   </div>   
  )
}

export default Input;
