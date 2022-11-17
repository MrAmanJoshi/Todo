import React, { useState, useEffect } from "react"
import CalculatorButtons from "./CalculatorButtons"

const Calculator = () => {

  
  const [ count, setCount ] = useState('')

  // useEffect(() => {
  //   setShowCount(...showCount, count)
  // }
  //   , [count])

  // const evaluate = (a, b) => {
  //   return (a + b)
  // }
  // const calculate = () => {
  //   setResult(eval(showCount))
  // }
  return (
    <div>
      <div className="flex flex-col items-center mt-5">
        <div className="flex ">


        </div>
      </div>
      <div className="mt-24">
        <CalculatorButtons count={count} setCount={setCount} />

      </div>

    </div>
  )
}

export default Calculator;
