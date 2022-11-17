import React from "react";
import { TiDelete } from 'react-icons/ti';

const TodosList = ({uDTodo, onChange, onSelect}) => {
 console.log('uDTodo',uDTodo)
  
  return ( <div> 
  <div className="flex w-full">
     
          <input onClick={()=>(onChange(uDTodo))}  type='checkbox'  
         className=""/> 
          
        <p className="text-yellow-500 ml-1 font-medium text-lg">{uDTodo.title}</p>
    
          <p className="pl-10 pr-auto"><TiDelete className='text-2xl ' onClick={()=>onSelect(uDTodo)}/></p>
          
      </div> 
    </div>)
}

export default TodosList;

