import React, { useState} from "react";
import Button2 from "./Button2"
import {FiDelete} from "react-icons/fi"

const CalculatorButtons = ({count, setCount}) => {

  let countString;
  
  const handleClick = (e) => {
    countString = e.target.name;
    setCount("")
    setCount(count.concat(countString))
  }
  
  const calculate = ()=>{
    setCount( eval(count).toString())
  }
  console.log("count",count)

  const handleClear = ()=>{
    setCount('')
  }

  const handleDelete = () => {
    setCount(count.slice(0, -1))
  }
  
  return (
     <div className="flex items-center  flex-col mt-18 ">
       
      <input className="h-12 w-64 border border-yellow-400 mb-10" type="screen" value={count}/>
  
       <div className="flex ++
         justify-end">
      <Button2  onClick={handleClear}>AC</Button2>
         
         <Button2  onClick={handleDelete} className="flex justify-center items-center"><FiDelete/></Button2>
         
 
       </div>
      <div>
      <Button2 name="7" onClick={handleClick}>7</Button2>

              <Button2 name="8" onClick={handleClick}>8</Button2>

              <Button2 name="9" onClick={handleClick}>9</Button2>

              <Button2 name="/" onClick={handleClick}>/</Button2>

      
      </div>

       
             <div>
                     <Button2 name="6" onClick={handleClick}>6</Button2>

                     <Button2 name="5" onClick={handleClick}>5</Button2>

                     <Button2 name="4" onClick={handleClick}>4</Button2>

                     <Button2 name="*" onClick={handleClick}>x</Button2>

               
      </div>
      
      <div>
                     <Button2 name="3" onClick={handleClick}>3</Button2>

             <Button2 name="2" onClick={handleClick}>2</Button2>

             <Button2 name="1" onClick={handleClick}>1</Button2>

             <Button2 name="+" onClick={handleClick}>+</Button2>

  </div>

      <div>
                     <Button2 name="0" onClick={handleClick}>0</Button2>

             <Button2 name="." onClick={handleClick}>.</Button2>

             <Button2 name="" onClick={calculate}>=</Button2>

             <Button2 name="-" onClick={handleClick}>-</Button2>

      </div>
      
    </div>

  )
}

export default CalculatorButtons;

