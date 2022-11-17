import React, {useState} from 'react';
import Header from "./Header"
import TodosPage from "./TodosPage"
import Login from "./Login"
import Calculator from "./Calculator"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserRoute from './UserRoute';
import AuthRoute from './AuthRoute';
import Moment from './Moment'
import Signup from './Signup';

function App() {
  const [ user, setUser ] = useState();
  
  return (
    <BrowserRouter>
    <div>
      <Moment/>
      
    <Header setUser= {setUser}/>
      <Routes>
          
  <Route path="/" element={<UserRoute user={user}><TodosPage/></UserRoute>}></Route>
        
        <Route path='/calculator' element={<UserRoute><Calculator/></UserRoute>}></Route>
        
<Route path="/Login" element={<AuthRoute user={user}><Login setUser={setUser}/></AuthRoute>}></Route>

        <Route path="/signup"  element={<AuthRoute user={user}><Signup setUser={setUser}/></AuthRoute>}></Route>

        </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;

/*

  <Calculator/>
  */