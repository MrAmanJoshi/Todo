import React from "react";
import { TiDelete } from 'react-icons/ti';

const DoneTodosList = ({cmpltTodos, onChange, onSelect})=> {
  
  return ( <div> 
  <div className="flex w-full">
     
          <input className="bg-green-400" onClick={()=>onChange(cmpltTodos)} checked= {true}  type='checkbox'  
         className=""/> 
          
        <p className="text-green-400 ml-1 font-medium text-lg">{cmpltTodos.title}</p>
          
          <p className="pl-10 pr-auto"><TiDelete className='text-2xl' onClick={()=>onSelect(cmpltTodos)}/></p>
          
          
      </div> 
    </div>)
}

export default DoneTodosList;
