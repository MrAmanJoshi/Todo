import React from "react";
import moment from 'moment';




const Moment= ()=>{
  const token = localStorage.getItem("token")
  return <div className="flex justify-end "><p className="text-sm font-bold ">{token && moment().format('lll')}</p>
   </div>
}

export default Moment;