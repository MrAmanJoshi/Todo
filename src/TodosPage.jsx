import React, {useState, useEffect} from "react";
import TodosList from "./TodosList"
import DoneTodosList from "./DoneTodosList"
import Button from "./Button"

const TodosPage = () => {

  const [ todo, setTodo ] = useState('');

  const newTodo = todo.trim();
  
  const stringValue = localStorage.getItem("todoList");

  const saveValue = JSON.parse(stringValue)
  
console.log("save balue is", saveValue)
const [ todoList, setTodoList ] = useState(saveValue||[]);
  localStorage.setItem("todoList",JSON.stringify(todoList))

  
  const [ addTodoBtn, setAddTodoBtn] = useState(false)
  
  const unDoneTodos = todoList.filter(function(todos){
    return todos.done === false
  });

const doneTodos = todoList.filter((todos) => todos.done === true);
  
  const handleAddTodo = (e) => {
    setTodo(e.target.value)
  };

  const handleSaveTodo = (e) => {
    e.preventDefault()
    setTodoList( [...todoList,{title: newTodo, id: newTodo, done: false}])
    setTodo("")
  };

  const addTodoDoneList = (uDTodo) => {
    const newTodoList= todoList.filter((todos)=> todos.id !== uDTodo.id
    );
    
  setTodoList([...newTodoList,{title: uDTodo.title, id: uDTodo.title, done: true }]);
};

  const addTodoUnDoneList = (cmpltTodos) => {
  const newTodoList=  todoList.filter((todos)=> cmpltTodos.id !== todos.id );
    
    setTodoList([...newTodoList, {
      title: cmpltTodos.title, id: cmpltTodos.id, done: false
    }]);
  };

  const addButton = () => {
    setAddTodoBtn(true)
  }
  const cancelButton = () => {
    setAddTodoBtn(false)
  }

  const handleDeleteTodo = (uDTodo, cmpltTodos) => { const deleted  = todoList.filter((deleteTodo)=> (uDTodo.id || cmpltTodos.id) !== deleteTodo.id)
                                       setTodoList(deleted)  
                              localStorage.setItem("todoList",JSON.stringify(deleted))
                                   localStorage.removeItem("todoList")
                                                 }
  
    return(

    <div className="pl-3">
      
    <h1 className="text-3xl mt-10 font-semibold ">Things to get done</h1>  
  <Button onClick={()=>location.reload()} className="mt-5">Refresh</Button>
      
      <h1 className="font-medium text-lg mt-10">Things to do</h1>

        <div className=" flex flex-col mt-4 ">    
          
         { 
  unDoneTodos.map((uDTodo, index) => <TodosList  
key={index}                                uDTodo={uDTodo}
          onChange={addTodoDoneList}
                                onSelect={handleDeleteTodo}
                                />)}

      </div> 

    {addTodoBtn == false && <div>  <Button onClick={addButton} className=" mt-5" > + Add a todo </Button>
       </div>
}
       { addTodoBtn== true && <form onSubmit={handleSaveTodo}>
          
          <div className="border border-gray-100 drop-shadow-lg ml-3 mt-4 pt-5 px-3">

      
    <h4 className="text-lg font-semibold ">Create a todo</h4>

      <input onChange= {handleAddTodo} type="text" placeholder="Write an article about XState" className=" border 
        border-yellow-600 hover:border-yellow-600 p-5 h-10 mt-5"/>
         
      <div className="flex my-4">
     
       <Button disabled={!todo  } type="submit">Save</Button>
        
        <button onClick={cancelButton} className="bg-white border border-black text-black ml-4 px-4 py-2 rounded-lg ">Cancel</button>
      </div>
        </div>
         </form> 
}      
      <p className="font-medium mt-5">
Things done   </p>
      
      {
  doneTodos.map((dTodos, index)=><DoneTodosList 
key={index+1}  
                            cmpltTodos={dTodos}
    onChange ={addTodoUnDoneList}   
onSelect={handleDeleteTodo}                        
                  />)}
    </div>  
  )
}

export default TodosPage;